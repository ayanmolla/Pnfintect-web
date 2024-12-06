import React, { useEffect } from 'react';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import './HomeSection.css';
import bgVideo from '../../Assets/Videos/12024715_1920_1080_30fps.mp4';

function HomeSection() {
  useEffect(() => {
    Splitting();
  }, []);

  return (
    <section className="hero-section">
      <video autoPlay loop muted width="640" height="280" className="hero-bg-v">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="hero-container">
        <div className="hero-contaoner-box">
          <h1 className="hero-top-title" data-splitting>We turn ideas into reality</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur asperiores quos placeat porro ducimus consequuntur vitae ab tempore voluptatum animi.
          </p>
          <div className="scroll-down-btn">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;