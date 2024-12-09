import React, { useState } from "react";
import "./Testimonials.css";
import profile1 from "./image/depositphotos_196025328-stock-photo-portrait-copyspace-empty-place-advertisement.jpg";
import profile2 from "./image/depositphotos_589084500-stock-photo-handsome-young-mixed-race-man.jpg";
import profile3 from "./image/depositphotos_593903434-stock-photo-face-world-confidence-cropped-portrait.jpg";
import profile4 from "./image/istockphoto-1132928597-612x612.jpg";
import profile5 from './image/pexels-italo-melo-881954-2379005.jpg';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const profiles = [
  {
    name: "Patrick Neeman",
    image: profile1,
    quote: "Pn Software Tech Pvt. Ltd has the most excellent customer care service I've ever experienced for any software or product ever. Any time there's trouble I am able to communicate or chat with a real person in seconds, and they actually solve the trouble. If you have an option then considers Pn Software Tech Pvt. Ltd first!",
  },
  {
    name: "Karen McGrane",
    image: profile2,
    quote: "Everyone I spoke with, from Pn Software Tech Pvt. Ltd, gives top-notch consumer service and took very less time to resolve my queries without any difficulties.",
  },
  {
    name: "Don Norman",
    image: profile3,
    title: "Co-founder of the NN/g",
    quote: "A magnificent company! Awe-inspiring consumer support from the initial to the final stage. The team is really proficient and goes the go beyond expectations at every stage. I would prefer Pn Software Tech Pvt. Ltd honestly.",
  },
  {
    name: "Dieter Rams",
    image: profile4,
    quote: "The attention to detail given by Pn Software Tech Pvt. Ltd was so magnificent and their problem-solving skills are up to the mark..",
  },
  {
    name: "Italo Melo",
    image: profile5,
    quote: "Stupendous service, great communication, and a really great method to help and support to get the right deal. Pn Software Tech Pvt. Ltd is a awesome company!",
  },
];

const Testimonials = () => {
  const [currentProfile, setCurrentProfile] = useState(2);

  const handleScroll = (direction) => {
    setCurrentProfile((prev) =>
      direction === "up"
        ? (prev - 1 + profiles.length) % profiles.length
        : (prev + 1) % profiles.length
    );
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-overlay">
        {/* Left Section - Profiles on Curve */}
        <div className="testimonial-curve">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className={`profile-item ${
                index === currentProfile ? "active" : ""
              }`}
            >
              <img src={profile.image} alt={profile.name} />
              {index === currentProfile && (
                <div className="profile-details">
                  <h3>{profile.name}</h3>
                  {profile.title && <p>{profile.title}</p>}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section - Quote */}
        <div className="testimonial-content">
          <p className="quote">{profiles[currentProfile].quote}</p>
        </div>

        {/* Scroll Buttons */}
        <div className="testimonial-scroll-buttons">
          <button className="scroll-btn" onClick={() => handleScroll("up")}>
            <FaArrowUp />
          </button>
          <button className="scroll-btn" onClick={() => handleScroll("down")}>
            <FaArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;