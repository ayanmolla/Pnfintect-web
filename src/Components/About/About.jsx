import React from 'react'
// import { FaBeer } from 'react-icons/fa';
import './About.css'
import { MdCall } from 'react-icons/md';

function About() {
  return (
    <main className='main-about'>
      <div className='about'>
        <div className="about-left">
          <div className="about-blur-box"></div>
        </div>
        <div className="about-right">
          <h1 className='Heading-about' >ABOUT</h1>
          <div className="about-contant">
          <p className='about-top-peragraph'>We are happy to introduce you to Roundpay</p>
          <p className='about-mid-peragraph'>Pn Software Pvt. Ltd is an IT and Recharge services provider company that deals with IT market Requirements and custom software.</p>
          <p className='about-end-peragraph'>We are the foremost Recharge API provider in India and issue Multi Recharge API to our great consumers. We have a team of specialists and crackerjack professionals. Our panel of experts is proficient to serve excellence to accomplish your business objectives.</p>        
          </div>
          <div className="about-buttons">
              <button className='about-buttons-1'>READ MORE</button><button className='about-buttons-2'><MdCall /></button>
          </div>
        </div>
      </div>
      <h3 className='about-end-line'>01 <span></span><span></span><span></span><span></span></h3>
    </main>

  )
}

export default About;