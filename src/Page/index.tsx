import React from "react";
import LottieTest from "./LottieTest";
import TestHeader from "./TestHeader";
import styles from "./styles.module.scss";

const LottieTestPage: React.FC = () => {
  return (
    <div className={styles.testPage}>
      <h1 className={styles.pageTitle}>Lottie Animation Test Page</h1>
      <div className={styles.description}>
        <p>This page tests the optimized Lottie animation in two contexts:</p>
        <ol>
          <li>As a standalone animation component</li>
          <li>As part of a simplified header component (similar to the actual implementation)</li>
        </ol>
      </div>
      
      <div className={styles.testGrid}>
        <LottieTest />
        <TestHeader />
      </div>
      
      <div className={styles.performanceNotes}>
        <h3>Performance Improvements</h3>
        <ul>
          <li>Reduced layers from 18 to 5</li>
          <li>Optimized keyframes while maintaining visual effect</li>
          <li>Added throttling to reduce state updates</li>
          <li>Reduced DOM operations</li>
          <li>Improved memory management with proper cleanup</li>
        </ul>
      </div>
    </div>
  );
};

export default LottieTestPage;