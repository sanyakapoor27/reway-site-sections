import googlebadge from "../assets/google-play-badge.png";
import rewayphonelogo from "../assets/Screenshot_2023-11-06-15-08-52-689_com.android.vending-removebg-preview-removebg-preview.png";
import React from 'react';
import { useSpring, animated } from 'react-spring';
import './AppPage.css';

const AppPage = () => {
  const gradientProps = useSpring({
    from: { background: 'conic-gradient(#3cd4ba, #26d701, #57e86b)' },
    to: { background: 'conic-gradient(90deg, #26d701, #00ab08, #4ded30, #ff8a00)' },
    config: { duration: 10, loop: true },
  });

  return (
    <div className="download-app-page">
      <div className="circle-container">
        <div className="content">
          <h2>Download The <span> Reway</span><br/>App, Now! </h2>
          <div className="container">
            <div className="sections">
              <div className="section">
                <h3><span id="span1">Reway</span> for recyclers</h3>
                <p>Find More E-Waste Pickups! <br/> Grow your Recycling Business.</p>
                <div className="google-play-badge">
                <a href="https://play.google.com/store/apps/details?id=com.rewaytech.rewayrecyclers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={googlebadge} alt="Google Play Badge" />
                </a>
                </div>
              </div>
              <div className="section">
                <h3><span>Reway</span> for consumers</h3>
                <p>Transform e-waste, sell to trusted recyclers,track impact, earn rewards!</p>
                <div className="google-play-badge">
                <a href="https://play.google.com/store/apps/details?id=com.rewaytech.rewayusers" 
                target="_blank"
                rel="noopener noreferrer">
                  <img src={googlebadge} alt="Google Play Badge" />
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="circle-gradient">
          <animated.div className="animated-gradient" style={{ ...gradientProps }}>
          </animated.div>
        </div>
          <div className="app-logo">
            <img src={rewayphonelogo} alt="App Logo" />
          </div>
      </div>
    </div>
  );
};

export default AppPage;
