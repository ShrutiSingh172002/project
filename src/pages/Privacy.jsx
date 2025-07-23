import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useResponsive } from '../hooks/useResponsive';

const Privacy = () => {
  const { isMobile, isTablet } = useResponsive();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const listItemStyle = {
    marginBottom: isMobile ? '6px' : '8px',
    textAlign: 'left',
    paddingLeft: isMobile ? '16px' : '20px',
    position: 'relative',
    fontSize: isMobile ? '14px' : '16px',
    lineHeight: isMobile ? '1.4' : '1.6',
  };

  const bulletStyle = {
    position: 'absolute',
    left: 0,
    color: '#007bff',
    fontSize: isMobile ? '12px' : '14px',
  };

  const containerStyle = {
    background: 'linear-gradient(135deg, #e6f0fa, #cce0f5)',
    padding: isMobile ? '20px 16px' : isTablet ? '30px 24px' : '40px',
    borderRadius: isMobile ? '8px' : '12px',
    boxShadow: '0 8px 20px rgba(0, 51, 102, 0.2)',
    fontFamily: "'Segoe UI', sans-serif",
    color: '#003366',
    transition: 'transform 0.3s ease',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    color: '#005ea6',
    textShadow: '1px 1px 2px rgba(0, 94, 166, 0.2)',
    fontSize: isMobile ? '24px' : isTablet ? '28px' : '32px',
    marginBottom: isMobile ? '16px' : '20px',
  };

  const subHeadingStyle = {
    color: '#005ea6',
    marginTop: isMobile ? '20px' : '30px',
    fontSize: isMobile ? '18px' : isTablet ? '20px' : '24px',
    marginBottom: isMobile ? '12px' : '16px',
  };

  const paragraphStyle = {
    fontSize: isMobile ? '14px' : '16px',
    lineHeight: isMobile ? '1.5' : '1.6',
    marginBottom: isMobile ? '16px' : '20px',
    textAlign: isMobile ? 'left' : 'center',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    textAlign: 'left',
  };

  const emailStyle = {
    color: '#005ea6',
    fontWeight: 'bold',
    wordBreak: 'break-word',
  };

  return (
    <div
      data-aos="fade-up"
      style={containerStyle}
    >
      <h2 style={headingStyle}>
        Privacy Policy
      </h2>

      <p style={paragraphStyle}>
        Your privacy is important to us. At SafeNet, we are committed to protecting the confidentiality and security of your personal information...
      </p>

      <h3 style={subHeadingStyle}>Information We Collect</h3>
      <p style={paragraphStyle}>
        We may collect limited personal information such as your name, email address, and device data...
      </p>

      <h3 style={subHeadingStyle}>How We Use Your Information</h3>
      <ul style={listStyle}>
        {[
          'To provide and maintain our antivirus and cybersecurity services.',
          'To notify you of updates, alerts, or product improvements.',
          'To personalize your user experience and enhance service efficiency.',
          'To troubleshoot issues and provide customer support.',
        ].map((item, idx) => (
          <li key={idx} style={listItemStyle}>
            <span style={bulletStyle}>🔹</span>{item}
          </li>
        ))}
      </ul>

      <h3 style={subHeadingStyle}>Data Protection and Storage</h3>
      <p style={paragraphStyle}>
        Your information is stored on secure servers protected by modern encryption standards...
      </p>

      <h3 style={subHeadingStyle}>Third-Party Sharing</h3>
      <p style={paragraphStyle}>
        SafeNet does <strong>not</strong> sell, rent, or trade your personal information...
      </p>

      <h3 style={subHeadingStyle}>Your Rights</h3>
      <p style={paragraphStyle}>You have full control over your data. At any time, you may:</p>
      <ul style={listStyle}>
        {[
          'Request access to the data we store about you.',
          'Request correction or deletion of your personal information.',
          'Withdraw consent for data processing.',
        ].map((item, idx) => (
          <li key={idx} style={listItemStyle}>
            <span style={bulletStyle}>🔹</span>{item}
          </li>
        ))}
      </ul>
      <p style={paragraphStyle}>
        Simply contact our support team at <span style={emailStyle}>info@safenetcare.online</span> to make a request.
      </p>

      <h3 style={subHeadingStyle}>Policy Updates</h3>
      <p style={paragraphStyle}>We may occasionally update this policy to reflect changes in regulations or services...</p>

      <p style={{...paragraphStyle, marginTop: isMobile ? '16px' : '20px'}}>
        By using our services, you agree to the terms outlined in this Privacy Policy...
      </p>
    </div>
  );
};

export default Privacy;