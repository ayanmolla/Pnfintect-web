import React from 'react'
import './Services.css'
// import { MdCall } from 'react-icons/md';
import { CiShop } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { IoManOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

function Services() {
  return (

    <main>
      <div className='Services'>
        <div className="Services-top">
          <div className="Services-top-left">
            <p>WHAT WE DO</p>
            <h1><span>Elevate Your Business With</span> <br /> Opticores Tailored Solutions</h1>
          </div>
          <div className="Services-top-right">
            <h1 className='Heading-services'>SERVICES</h1>
          </div>
        </div>
        <div className="Services-mid">
          <div className="Services-blur"></div>
          <div className="Services-card">
            
            <div className="Service-icon"><CiShop size={34} /></div>
            <h2>IT Services</h2>
            <p>Substantially, the prosperity of organizations in the sector hangs on their capability to establish their services and develop their technical competence. We provide the preeminent IT service to make you grow digitally.</p>

            {/* <div className="Service-center">
            <div className="about-buttons">
                <button className='about-buttons-1'>DISCOVER</button><button className='about-buttons-2'><IoIosArrowForward /></button>
            </div>
            </div> */}
          </div>
          <div className="Services-card">
          
          <div className="Service-icon"><GrGroup size={34} /></div>
            <h2>FinTech</h2>
            <p>Fintech is a budgetary transformation that illustrates a growing folding of money superintendence area. Roundpay specializes in technology development to aid the banking and financial industries. development to aid the banking and financial industries</p>

            {/* <div className="Service-center">
              <div className="about-buttons">
                  <button className='about-buttons-1'>DISCOVER</button><button className='about-buttons-2'><IoIosArrowForward /></button>
              </div>            
            </div> */}
          </div>
          <div className="Services-card">
          <div className="Service-icon"><IoManOutline size={34} /></div>
            <h2>Travel Services</h2>
            <p>Fintech is a budgetary transformation that illustrates a growing folding of money superintendence area. Roundpay specializes in technology development to aid the banking and financial industries. development to aid the banking and financial industries</p>

            {/* <div className="Service-center">
              <div className="about-buttons">
                  <button className='about-buttons-1'>DISCOVER</button><button className='about-buttons-2'><IoIosArrowForward /></button>
              </div>            
            </div> */}
          </div>
          <div className="Services-card">
          
          <div className="Service-icon"><CiShoppingBasket size={34} /></div>
            <h2>VAS Services</h2>
            <p>VAS is a prevalent telecommunications sector term for non-core services, or, in essence, all services afar standard voice calls and fax  we offer world-class customer support to fax  we offer world-class customer support to answer all your queries.</p>

            {/* <div className="Service-center">
              <div className="about-buttons">
                  <button className='about-buttons-1'>DISCOVER</button><button className='about-buttons-2'><IoIosArrowForward /></button>
              </div>            
            </div> */}
          </div>
        </div>
        <div className="Services-bottom">
          <div className="about-buttons">
            <button className='about-buttons-1'>DISCOVER</button><button className='about-buttons-2'><IoIosArrowForward /></button>
          </div>    
        </div>
      </div>
      <h3 className='Service-end-line'><span></span><span></span><span></span><span></span> 02</h3>
    </main>

  )
}

export default Services;