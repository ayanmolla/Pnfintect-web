import React from 'react';
import './Footer.css';
import logoimg from './Image/Logo img.jpg';
import { FaInstagram, FaLinkedin, FaTelegram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-top-container">
                <div className="footer-title-box">
                    <div className="footer-logo-box">
                        <img src={logoimg} alt="" />
                        <span>PN SOFTWARE TECH PVT. LTD</span>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id sapiente
                    dolor autem mollitia odio modi, sunt provident assumenda voluptates
                    aut perspiciatis itaque culpa ad vero a delectus nihil veniam eligendi.</p>
                </div>
                <div className="footer-icon-box">
                    <a href="#"><FaXTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTelegram /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>
            </div>
            <div className="footer-bottom-container">
                <div className="footer-left-box">
                    <p>&copy;2024 All Right Reserved by <span>PN SOFTWARE TECH PVT. LTD</span></p>
                </div>
                <div className="footer-right-box">
                    <a href="#">Terms Of Service</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;