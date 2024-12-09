import React from 'react';
import './FormPopup.css';
import { LuMoveRight } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { FaArrowUp } from 'react-icons/fa';

const FormPopup = ({ onClose }) => {
  return (
    <>

    <div className="Form-Popup-modal">
        <div className="Form-Popup-modal-content">
            <div className="Form-Popup-top-title-box">
                <h3><LuMoveRight /> <span>Consult Now</span></h3>
                <h2>Drop Us a Message</h2>
            </div>
            <span className="Form-Popup-close-btn" onClick={onClose}><IoClose /></span>
            <div className="Form-Popup-container">
                <form>
                    <input type="text" placeholder="Name*" required />
                    <input type="number" placeholder='Phone No*' required />
                    <input type="email" placeholder="Email*" required />
                    <input type="text" placeholder="Location*" required />
                    <textarea placeholder="Message*" required></textarea>
                    <button><span>Connect With PN Software Tech Pvt. Ltd</span><FaArrowUp /></button>
                </form>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default FormPopup;