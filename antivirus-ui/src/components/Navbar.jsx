import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <Link to="/" className="logo">SafeNet</Link>

        {/* Contact number with Lucide phone icon */}
        <a href="tel:+919876543210" className="contact-link">
          <Phone size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          +91 98765 43210
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
