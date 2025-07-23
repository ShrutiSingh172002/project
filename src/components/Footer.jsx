import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
        <Link to="/refund">Refund Policy</Link>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 SafeNet. All Rights Reserved</p>
        <p className="footer-brand">SafeNet</p>
      </div>
      
      {/* Add these responsive styles to your App.css */}
      <style jsx>{`
        @media (max-width: 768px) {
          .footer {
            padding: 1.5rem 1rem;
            text-align: center;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 1.5rem;
          }
          
          .footer-links a {
            font-size: 0.9rem;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          
          .footer-links a:last-child {
            border-bottom: none;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
          }
          
          .footer-bottom p {
            font-size: 0.8rem;
            margin: 0;
          }
          
          .footer-brand {
            font-size: 1rem !important;
            font-weight: bold;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer {
            padding: 2rem 1.5rem;
          }
          
          .footer-links {
            gap: 1.5rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .footer-links a {
            font-size: 0.95rem;
          }
          
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          
          .footer-bottom p {
            font-size: 0.9rem;
          }
        }
        
        @media (min-width: 1025px) {
          .footer {
            padding: 2.5rem 2rem;
          }
          
          .footer-links {
            gap: 2rem;
            justify-content: center;
          }
          
          .footer-links a {
            font-size: 1rem;
          }
          
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          
          .footer-bottom p {
            font-size: 1rem;
          }
        }
        
        /* Ensure footer stays at bottom on all devices */
        .footer {
          margin-top: auto;
        }
        
        /* Improve touch targets on mobile */
        @media (max-width: 768px) {
          .footer-links a {
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;