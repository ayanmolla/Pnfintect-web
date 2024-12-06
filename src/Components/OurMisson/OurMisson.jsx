import React from 'react'
import './OurMisson.css'
import { FaArrowRightLong } from "react-icons/fa6";

function OurMisson() {
  return (
    <main>
        <div className="OurMisson">
            <div className="OurMisson-top">
                <p>OUR MISSION</p>
                <h1>Complete assurance about quality & timely execution</h1>
            </div>
            <div className="OurMisson-mid">
                <div className="OurMisson-hover-box">
                    <h2>01</h2>
                    <h1>Experience</h1>
                    <h3>Assingment</h3>
                    <p>10 +Years Experience in Telecom and Fintech Industry.</p>
                    <span>
                        <FaArrowRightLong />
                    </span>
                </div>
                <div className="OurMisson-hover-box">
                    <h2>02</h2>
                    <h1>Support</h1>
                    <h3>Assingment</h3>
                    <p>the Clock Support.</p>
                    <span>
                        <FaArrowRightLong />
                    </span>
                </div>
                <div className="OurMisson-hover-box">
                    <h2>03</h2>
                    <h1>Sharing</h1>
                    <h3>Assingment</h3>
                    <p>Best Revenue Sharing of Industry.</p>
                    <span>
                        <FaArrowRightLong />
                    </span>
                </div>
                <div className="OurMisson-hover-box">
                    <h2>04</h2>
                    <h1>Services</h1>
                    <h3>Assingment</h3>
                    <p>All Supporting Services for Fintech and Recharge industry are under 1 roof.</p>
                    <span>
                        <FaArrowRightLong />
                    </span>
                </div>
            </div>
        </div>
    </main>
  )
}

export default OurMisson;
