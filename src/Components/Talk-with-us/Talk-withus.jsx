import React, { useState } from 'react';
import './Talk-withus.css';
import FormPopup from '../Form-popup/FormPopup';

const Talkwithus = () => {
  const [showFormPopup, setShowFormPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowFormPopup(true);
  };

  const handleClosePopup = () => {
    setShowFormPopup(false);
  };

  return (
    <>

    <section className="TalkwithusContainer">
      <div className="TalkwithusBackgroundText">
        <span>Let's Work</span>
        <span>Together</span>
      </div>
      <div className="TalkwithusContent">
        <div className="TalkwithusLabelWrapper">
          <span className="TalkwithusLabel">
            <span className="TalkwithusArrow">→</span>
            Contact With Us
          </span>
        </div>
        <h2 className="TalkwithusHeading">
          Have Any Quarries On Minds!
          <br />
          Feel Free to Contact Us
        </h2>
        <div className="TalkwithusButtonContainer">
          <button className="TalkwithusButton" onClick={handleOpenPopup}>
            <span className="TalkwithusButtonText">Let's Talk<br />With Us</span>
            <span className="TalkwithusButtonIcon">↑</span>
          </button>
        </div>
      </div>
    </section>

    {showFormPopup && <FormPopup onClose={handleClosePopup} />}

    </>
  );
};

export default Talkwithus;