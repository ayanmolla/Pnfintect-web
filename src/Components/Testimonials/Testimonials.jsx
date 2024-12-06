import React, { useState } from 'react';
import './Testimonials.css';
import profile1 from './image/depositphotos_196025328-stock-photo-portrait-copyspace-empty-place-advertisement.jpg';
import profile2 from './image/depositphotos_589084500-stock-photo-handsome-young-mixed-race-man.jpg';
import profile3 from './image/depositphotos_593903434-stock-photo-face-world-confidence-cropped-portrait.jpg';
import profile4 from './image/istockphoto-1132928597-612x612.jpg';

const profiles = [
  { name: 'Patrick Neeman', image: profile1 },
  { name: 'Karen McGrane', image: profile2 },
  { name: 'Don Norman', image: profile3, title: 'Co-founder of the NN/g' },
  { name: 'Dieter Rams', image: profile4 },
];

const Testimonials = () => {
  const [currentProfile, setCurrentProfile] = useState(2); // Default to 'Don Norman'

  const handleScroll = (direction) => {
    setCurrentProfile((prev) =>
      direction === 'up'
        ? (prev - 1 + profiles.length) % profiles.length
        : (prev + 1) % profiles.length
    );
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-overlay">
        {/* Left Section - Curved Profiles */}
        <div className="testimonial-profile-section">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className={`profile-circle ${
                index === currentProfile ? 'active-profile' : ''
              }`}
            >
              <img src={profile.image} alt={profile.name} />
              {index === currentProfile && (
                <>
                  <h3>{profile.name}</h3>
                  {profile.title && <p>{profile.title}</p>}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Right Section - Quote */}
        <div className="testimonial-content">
          <p className="quote">
            "Good design is actually a lot harder to notice than poor design, in
            part because good designs fit our needs so well that the design is
            invisible."
          </p>
        </div>

        {/* Scroll Buttons */}
        <div className="testimonial-scroll-buttons">
          <button className="scroll-btn" onClick={() => handleScroll('up')}>
            &#9650;
          </button>
          <button className="scroll-btn" onClick={() => handleScroll('down')}>
            &#9660;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;