import React, { useEffect, useState, useRef, useCallback } from "react";
import lottie from "lottie-web";
import type { AnimationItem } from "lottie-web"; // Using type-only import
import styles from "./styles.module.scss";
import optimizedLottieData from './optimized-lottie.json';

const TestHeader: React.FC = () => {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const loaderAnimationRef = useRef<AnimationItem | null>(null);
  const logoAnimationRef = useRef<AnimationItem | null>(null);
  const frameCounterRef = useRef(0);

  const setupLoaderAnimation = useCallback(() => {
    if (!loaderRef.current) return;
    
    if (loaderAnimationRef.current) {
      loaderAnimationRef.current.destroy();
      loaderAnimationRef.current = null;
    }
    
    loaderRef.current.innerHTML = "";
    
    setLoadingProgress(0);
    frameCounterRef.current = 0;
    
    loaderAnimationRef.current = lottie.loadAnimation({
      container: loaderRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: optimizedLottieData,
    });
    
    const handleEnterFrame = () => {
      if (!loaderAnimationRef.current || !loaderAnimationRef.current.totalFrames) return;
      
      if (frameCounterRef.current++ % 3 !== 0) return;
      
      const currentFrame = loaderAnimationRef.current.currentFrame;
      const totalFrames = loaderAnimationRef.current.totalFrames;
      const progress = Math.min(Math.max((currentFrame / totalFrames) * 100, 0), 99.9);
      setLoadingProgress(Math.round(progress));
    };
    
    const handleComplete = () => {
      setLoadingProgress(100);
      
      setTimeout(() => {
        setPreloaderFinished(true);
        
        if (logoRef.current) {
          logoRef.current.innerHTML = "";
          
          logoAnimationRef.current = lottie.loadAnimation({
            container: logoRef.current,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: optimizedLottieData,
          });
        }
      }, 300);
    };
    
    loaderAnimationRef.current.addEventListener("enterFrame", handleEnterFrame);
    loaderAnimationRef.current.addEventListener("complete", handleComplete);
    
    return {
      handleEnterFrame,
      handleComplete
    };
  }, []);

  useEffect(() => {
    const cleanup = setupLoaderAnimation();
    
    return () => {
      if (cleanup && loaderAnimationRef.current) {
        loaderAnimationRef.current.removeEventListener("enterFrame", cleanup.handleEnterFrame);
        loaderAnimationRef.current.removeEventListener("complete", cleanup.handleComplete);
        loaderAnimationRef.current.destroy();
        loaderAnimationRef.current = null;
      }
      
      if (logoAnimationRef.current) {
        logoAnimationRef.current.destroy();
        logoAnimationRef.current = null;
      }
    };
  }, [setupLoaderAnimation]);

  const handleRestart = () => {
    setPreloaderFinished(false);
    
    if (logoAnimationRef.current) {
      logoAnimationRef.current.destroy();
      logoAnimationRef.current = null;
    }
    
    setTimeout(() => {
      setupLoaderAnimation();
    }, 50);
  };

  return (
    <div className={styles.testHeaderContainer}>
      <h2>Header Component Test</h2>
      
      <header ref={headerRef} className={styles.header}>
        <div ref={logoRef} className={styles.headerLogo}></div>
        <div className={styles.headerLinks}>
          <a href="#" className={styles.headerLink}>Home</a>
          <a href="#" className={styles.headerLink}>About</a>
          <a href="#" className={styles.headerLink}>Contact</a>
          <a href="#" className={styles.headerLink}>Menu</a>
        </div>
      </header>
      
      {!preloaderFinished && (
        <div ref={preloaderRef} className={styles.headerPreloader}>
          <div ref={loaderRef} className={styles.headerLoader}></div>
          <div className={styles.headerLoadingProgress}>
            <div className={styles.headerProgressBar}>
              <div 
                className={styles.headerProgressBarFill}
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className={styles.headerProgressText}>
              {loadingProgress}%
            </div>
          </div>
        </div>
      )}
      
      {preloaderFinished && (
        <div className={styles.headerControls}>
          <button 
            onClick={handleRestart}
            className={styles.restartButton}
          >
            Restart Header Animation
          </button>
        </div>
      )}
    </div>
  );
};

export default TestHeader;