import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://safenetcare.online/contact" />
      </Helmet>
      <div className="contact-section">
        <h1>Contact SafeNet Support</h1>
        <h2>Contact Us</h2>
        <p>If you have any questions or need support, feel free to reach out to us:</p>
        <p><strong>Email:</strong> support@safenet.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> SafeNet Solutions,13 Ramson's Plaza Sector 95 Gurgaon (Haryana) 122004</p>
      </div>
      <div style={{marginTop:'2rem', textAlign:'center'}}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/privacy">Privacy</Link> | <Link to="/terms">Terms</Link>
      </div>
    </div>
  );
};

export default Contact;
