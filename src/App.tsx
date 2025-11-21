import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LottieTestPage from './Page/LottieTest';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="app-nav">
          <h1>Lottie Animation Testing</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/lottie-test">Lottie Test</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="home-page">
              <h2>Lottie Animation Performance Testing</h2>
              <p>This application tests the performance of an optimized Lottie animation.</p>
              <p>The original Lottie animation was causing performance issues. We've created an optimized version with:</p>
              <ul>
                <li>Reduced layers (from 18 to 5)</li>
                <li>Simplified keyframes</li>
                <li>Optimized animation paths</li>
                <li>Throttled progress updates</li>
              </ul>
              <div className="cta-button">
                <Link to="/lottie-test">Go to Lottie Test</Link>
              </div>
            </div>
          } />
          <Route path="/lottie-test" element={<LottieTestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;