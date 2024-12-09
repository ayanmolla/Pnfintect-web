import React from 'react'
import './OurMisson.css'
import { FaArrowRightLong } from "react-icons/fa6";
import bgContent from './images/14 (1).png'
// import bgContent from './images/6.png'
// import bgContent from './images/5.png'
// import bgContent from './images/Group 1 (3).png'
// import bgContent from './images/Group 32.png'


function OurMisson() {
  return (
    <main>
        <div className="OurMisson">
            <div className="OurMisson-top">
                <h1 className='OurMisson-top-heading'><span>Complete assurance about</span> <br /> quality & timely execution</h1>
                <h1 className='Heading-OurMisson'>OUR MISSION</h1>
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
                    <img className='bgContant-OurMisson' src={bgContent} alt="" />
                </div>
                <div className="OurMisson-hover-box">
                    <h2>02</h2>
                    <h1>Support</h1>
                    <h3>Assingment</h3>
                    <p>the Clock Support.</p>
                    <span>
                        <FaArrowRightLong />
                    </span>
                    <img className='bgContant-OurMisson' src={bgContent} alt="" />
                    
                </div>
                <div className="OurMisson-hover-box">
                    <h2>03</h2>
                    <h1>Sharing</h1>
                    <h3>Assingment</h3>
                    <p>Best Revenue Sharing of Industry.</p>
                    <span>
                        <FaArrowRightLong />
                    </span>
                    <img className='bgContant-OurMisson' src={bgContent} alt="" />
                </div>
                <div className="OurMisson-hover-box">
                    <h2>04</h2>
                    <h1>Services</h1>
                    <h3>Assingment</h3>
                    <p>All Supporting Services for Fintech and Recharge industry are under 1 roof.</p>
                    <span>
                        <FaArrowRightLong />
                    </span>
                    <img className='bgContant-OurMisson' src={bgContent} alt="" />
                </div>
            </div>
        </div>
        <h3 className='about-end-line'>03 <span></span><span></span><span></span><span></span></h3>
    </main>
  )
}

export default OurMisson;