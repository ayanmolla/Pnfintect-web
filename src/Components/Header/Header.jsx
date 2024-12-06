import React, { useState } from 'react';
import './Header.css';
import logoimg from './Image/Logo img.jpg';
import { IoChevronDown, IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = {
    'About Us': {
      items: ['Overview', 'Career']
    },
    'API Services': {
      items: [
        'Recharge API', 
        'Travel API', 
        'Domestic Money Transfer', 
        'BBPS', 
        'Payout API', 
        'Pan Card API'
      ]
    },
    'Fintech': {
      items: [
        'AePS', 
        'POS', 
        'Mini ATM', 
        'Indo Nepal Money Transfer', 
        'Prepaid Card', 
        'Pan Card - UTI'
      ]
    },
    'IT Services': {
      items: [
        'Software Development', 
        'MLM Software', 
        'Recharge Application', 
        'Digital Marketing', 
        'Blockchain Development'
      ]
    },
    'VAS Services': {
      items: [
        'Long/Short Code', 
        'Bulk SMS', 
        'Sim Hosting', 
        'HLR Lookup', 
        'Pincode Finder', 
        'IFSC Finder'
      ]
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const renderDropdownMenu = (isDesktop = true) => {
    return (
      <ul className={isDesktop ? '' : 'mobile-menu'}>
        <li><a href="#" onClick={isDesktop ? undefined : closeMobileMenu}>Home</a></li>
        {Object.keys(menuItems).map((menu) => (
          <li
            key={menu}
            className="dropdown-menu"
            onMouseEnter={isDesktop ? () => setActiveDropdown(menu) : undefined}
            onMouseLeave={isDesktop ? () => setActiveDropdown(null) : undefined}
          >
            <a 
              href="#" 
              className={activeDropdown === menu ? 'active' : ''}
              onClick={(e) => {
                if (!isDesktop) {
                  e.preventDefault();
                  setActiveDropdown(activeDropdown === menu ? null : menu);
                }
              }}
            >
              {menu}
              <IoChevronDown
                size={14}
                className={`dropdown-icon ${activeDropdown === menu ? 'rotate' : ''}`}
              />
            </a>
            {activeDropdown === menu && (
              <div className="dropdown-content">
                {menuItems[menu].items.map((item) => (
                  <a 
                    key={item} 
                    href="#"
                    onClick={isDesktop ? undefined : closeMobileMenu}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
        <li><a href="#" onClick={isDesktop ? undefined : closeMobileMenu}>Blog</a></li>
      </ul>
    );
  };

  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-logo-box">
            <img src={logoimg} alt="Logo" className="header-logo" />
            <span className="header-logo-text">PN SOFTWARE TECH PVT.LTD</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="header-link-content desktop-nav">
            <div className="header-link-box">
              {renderDropdownMenu()}
            </div>
            <div className="header-btn-box">
              <button>Contact</button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="mobile-nav">
            <button 
              className="hamburger-btn" 
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="mobile-menu-overlay">
              <div className="mobile-menu-content">
                <div className="header-link-box">
                  {renderDropdownMenu(false)}
                </div>
                <div className="header-btn-box mobile-contact-btn">
                  <button>Contact</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;