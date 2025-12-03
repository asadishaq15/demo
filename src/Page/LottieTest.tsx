import React, { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import type { AnimationItem } from "lottie-web";
import styles from "./styles.module.scss";
import optimizedLottieData from './optimized-lottie.json';

const LottieTest: React.FC = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const frameCounterRef = useRef(0);
  
  const setupAnimation = () => {
    if (!loaderRef.current) return;
    
    if (animationRef.current) {
      animationRef.current.destroy();
    }
    
    loaderRef.current.innerHTML = "";
    
    animationRef.current = lottie.loadAnimation({
      container: loaderRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: optimizedLottieData,
    });
    
    frameCounterRef.current = 0;
    
    const handleEnterFrame = () => {
      if (!animationRef.current || !animationRef.current.totalFrames) return;
      
      if (frameCounterRef.current++ % 3 !== 0) return;
      
      const currentFrame = animationRef.current.currentFrame;
      const totalFrames = animationRef.current.totalFrames;
      const progress = Math.min(Math.max((currentFrame / totalFrames) * 100, 0), 99.9);
      setLoadingProgress(Math.round(progress));
    };
    
    const handleComplete = () => {
      setLoadingProgress(100);
      setTimeout(() => {
        setPreloaderFinished(true);
      }, 300);
    };
    
    animationRef.current.addEventListener("enterFrame", handleEnterFrame);
    animationRef.current.addEventListener("complete", handleComplete);
    
    const cleanupRef = {
      handleEnterFrame,
      handleComplete
    };
    
    return cleanupRef;
  };
  
  useEffect(() => {
    const cleanup = setupAnimation();
    
    return () => {
      if (cleanup && animationRef.current) {
        animationRef.current.removeEventListener("enterFrame", cleanup.handleEnterFrame);
        animationRef.current.removeEventListener("complete", cleanup.handleComplete);
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, []);

  const handleRestart = () => {
    setPreloaderFinished(false);
    setLoadingProgress(0);
    
    setTimeout(() => {
      setupAnimation();
    }, 50);
  };
  
  return (
    <div className={styles.testContainer}>
      {!preloaderFinished ? (
        <div className={styles.preloader}>
          <h2>Standalone Lottie Test</h2>
          <div ref={loaderRef} className={styles.loader}></div>
          <div className={styles.loadingProgress}>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressBarFill}
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className={styles.progressText}>
              {loadingProgress}%
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          <h2>Standalone Lottie Test</h2>
          <h3>Animation Complete!</h3>
          <p>The optimized Lottie animation has successfully loaded.</p>
          <button 
            onClick={handleRestart}
            className={styles.restartButton}
          >
            Restart Animation
          </button>
        </div>
      )}
    </div>
  );
};

export default LottieTest;