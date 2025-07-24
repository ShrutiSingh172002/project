import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://safenetcare.online/about" />
      </Helmet>
      <div className="page-content">
        <h1>About SafeNet Antivirus Solutions</h1>
        <h2>About Us</h2>
        <p>At SafeNet, your digital safety is our top priority. In an age where cyber threats are constantly evolving, we’re here to provide powerful, real-time protection to keep your devices, data, and privacy secure.

          We are a dedicated team of cybersecurity experts, developers, and researchers focused on building innovative antivirus solutions that are fast, lightweight, and incredibly effective. Whether you're a home user or a business, our tools are designed to detect and block malware, ransomware, phishing attempts, and other digital threats before they reach you.

          Our mission is simple: protect what matters most — your identity, your data, and your peace of mind.</p>
      </div>
      <div style={{marginTop:'2rem', textAlign:'center'}}>
        <Link to="/">Home</Link> | <Link to="/contact">Contact</Link> | <Link to="/privacy">Privacy</Link> | <Link to="/terms">Terms</Link>
      </div>
    </div>
  );
};

export default About;
