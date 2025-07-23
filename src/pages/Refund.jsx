import React, { useEffect } from 'react';
import { useResponsive } from '../hooks/useResponsive';

const Refund = () => {
  const { isMobile, isTablet } = useResponsive();

  useEffect(() => {
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
    boxShadow: '0 8px 24px rgba(0, 64, 128, 0.2)',
    fontFamily: "'Segoe UI', sans-serif",
    color: '#003366',
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
    <div style={containerStyle}>
      <h2 style={headingStyle}>
        Refund Policy
      </h2>

      <p style={paragraphStyle}>
        At SafeNet, we stand by the quality of our antivirus solutions. If you're not completely satisfied
        with your purchase, we offer a transparent and fair refund policy to ensure your peace of mind.
      </p>

      <h3 style={subHeadingStyle}>Eligibility for Refund</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <span style={bulletStyle}>🔹</span> You may request a refund within <strong>7 days</strong> of your original purchase date.
        </li>
        <li style={listItemStyle}>
          <span style={bulletStyle}>🔹</span> Refunds are considered in the following cases:
        </li>
        <li style={listItemStyle}>
          <span style={bulletStyle}>🔹</span> The product fails to install or activate due to a technical issue on our end.
        </li>
        <li style={listItemStyle}>
          <span style={bulletStyle}>🔹</span> Key features of the product do not function as advertised and our support team is unable to resolve the issue.
        </li>
        <li style={listItemStyle}>
          <span style={bulletStyle}>🔹</span> You were charged in error or experienced duplicate billing.
        </li>
      </ul>

      <h3 style={subHeadingStyle}>Non-Refundable Situations</h3>
      <ul style={listStyle}>
        {[
          'Requests made after the 7-day window.',
          'Refunds for reasons not related to technical malfunction (e.g., user error, change of mind).',
          'Purchases made through unauthorized resellers or third-party platforms.',
        ].map((item, idx) => (
          <li key={idx} style={listItemStyle}>
            <span style={bulletStyle}>🔹</span> {item}
          </li>
        ))}
      </ul>

      <h3 style={subHeadingStyle}>How to Request a Refund</h3>
      <p style={paragraphStyle}>
        To initiate a refund, please contact our support team at <span style={emailStyle}>info@safenetcare.online</span> and include the following:
      </p>
      <ul style={listStyle}>
        {[
          'Your order ID or proof of purchase.',
          'A brief explanation of the issue you encountered.',
          'Your contact email and system details (if technical issue).',
        ].map((item, idx) => (
          <li key={idx} style={listItemStyle}>
            <span style={bulletStyle}>🔹</span> {item}
          </li>
        ))}
      </ul>
      <p style={paragraphStyle}>
        We aim to process all eligible refund requests within <strong>5–7 business days</strong> after reviewing your case.
      </p>

      <h3 style={subHeadingStyle}>Subscription-Based Products</h3>
      <p style={paragraphStyle}>
        If you're subscribed to an auto-renewing plan, you may cancel anytime. Refunds for renewals will be issued only if requested
        within <strong>3 days</strong> of the renewal charge.
      </p>

      <p style={{...paragraphStyle, marginTop: isMobile ? '20px' : '30px'}}>
        Your satisfaction is important to us. We're committed to making your experience with SafeNet secure and frustration-free.
      </p>
    </div>
  );
};

export default Refund;