import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenWidth <= 768;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-mobile-layout">
        <Link to="/" className="logo">SafeNet</Link>
        <a href="tel:+18338600046" className="contact-number-link mobile-center-phone">
          <FiPhone style={{ marginRight: '0.12em', verticalAlign: 'middle' }} />
          <span style={{ verticalAlign: 'middle' }}>+1 (833) 860-0046</span>
        </a>
        {isMobile && (
          <button
            className="hamburger-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        )}
      </div>
      
      {/* Desktop center phone number */}
      {!isMobile && (
        <div className="navbar-phone-center">
          <a href="tel:+18338600046" className="contact-number-link">
            <FiPhone style={{ marginRight: '0.12em', verticalAlign: 'middle' }} />
            <span style={{ verticalAlign: 'middle' }}>+1 (833) 860-0046</span>
          </a>
        </div>
      )}
      
      <div
        className={`navbar-main-items${isMobile ? ' mobile' : ''}${isMobile && isMenuOpen ? ' open' : ''}`}
        style={isMobile ? { display: isMenuOpen ? 'flex' : 'none' } : {}}
      >
        <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
        <Link to="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</Link>
        <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
      </div>
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
