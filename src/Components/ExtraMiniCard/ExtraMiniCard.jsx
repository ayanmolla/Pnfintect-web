import React from 'react'
import './ExtraMiniCard.css'
import { FaArrowRightLong } from "react-icons/fa6";

function ExtraMiniCard() {
  return (
    <main>
      <div className='ExtraMiniCard'>

        <div className="ExtraMiniCard-bg1">
            <div className="ExtraMiniCard-box ">
                <p>01</p>
                <h2>Bank APIs</h2>
                <FaArrowRightLong />
            </div>
            <div className="ExtraMiniCard-box-shadow"></div>
        </div>

        <div className="ExtraMiniCard-bg2">
            <div className="ExtraMiniCard-box ">
                <p>02</p>
                <h2>IT Consulting</h2>
                <FaArrowRightLong />
            </div>
            <div className="ExtraMiniCard-box-shadow"></div>
        </div>
        
        <div className="ExtraMiniCard-bg3">
            <div className="ExtraMiniCard-box ">
                <p>03</p>
                <h2>Banking - BC Model</h2>
                <FaArrowRightLong />
            </div>
            <div className="ExtraMiniCard-box-shadow"></div>
        </div>

        <div className="ExtraMiniCard-bg4">
            <div className="ExtraMiniCard-box ">
             <p>04</p>
                <h2>Custom Software</h2>
                <FaArrowRightLong />
            </div>
            <div className="ExtraMiniCard-box-shadow"></div>
        </div>
      </div>
    </main>
  )
}

export default ExtraMiniCard;