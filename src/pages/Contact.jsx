import React, { useEffect, useState } from 'react';
import { useResponsive } from '../hooks/useResponsive';

const Contact = () => {
  const { isMobile, isTablet } = useResponsive();

  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`);
      formDataToSend.append('to', formData.email); 
      
      const response = await fetch('http://localhost:8081/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });
      
      const result = await response.json();
      console.log('Response result:', result);
      
      if (result.success) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Failed to send message: ' + result.message);
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  const cardStyle = {
    background: '#f0faff',
    border: '1px solid #b3e5fc',
    borderRadius: isMobile ? '6px' : '8px',
    padding: isMobile ? '16px' : '20px',
    color: '#003366',
    boxShadow: '0 4px 12px rgba(0, 102, 204, 0.1)',
    transition: 'transform 0.3s ease',
    flex: isMobile ? '1 1 100%' : isTablet ? '1 1 45%' : '1 1 250px',
    margin: isMobile ? '8px 0' : '10px',
    fontSize: isMobile ? '14px' : '16px',
  };

  const sectionHeading = {
    color: '#ffffff',
    fontSize: isMobile ? '2rem' : isTablet ? '2.4rem' : '2.8rem',
    fontWeight: '700',
    marginBottom: isMobile ? '16px' : '20px',
    textAlign: 'center',
    lineHeight: '1.2',
  };

  const heroStyle = {
    background: 'linear-gradient(135deg, #8fd3f4, #1e90ff)',
    color: '#ffffff',
    padding: isMobile ? '40px 16px' : isTablet ? '50px 20px' : '60px 20px',
    textAlign: 'center',
  };

  const heroSubtextStyle = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#e6f7ff',
    lineHeight: '1.5',
  };

  const gridContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: isMobile ? '0' : '10px',
  };

  const formContainerStyle = {
    background: '#e6f4fc',
    padding: isMobile ? '20px 16px' : '30px',
    borderRadius: isMobile ? '8px' : '10px',
    maxWidth: '600px',
    margin: isMobile ? '30px auto' : '40px auto',
    boxShadow: '0 4px 12px rgba(0, 102, 204, 0.1)',
    width: isMobile ? '95%' : 'auto',
    boxSizing: 'border-box',
  };

  const inputStyle = {
    width: '100%',
    padding: isMobile ? '8px' : '10px',
    borderRadius: '6px',
    border: '1px solid #aadfff',
    fontSize: isMobile ? '14px' : '16px',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#003366',
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: '500',
  };

  const buttonStyle = {
    backgroundColor: '#00aaff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: isMobile ? '10px 20px' : '12px 24px',
    cursor: 'pointer',
    fontSize: isMobile ? '14px' : '1rem',
    width: '100%',
    transition: 'background-color 0.3s ease',
  };

  const ctaStyle = {
    background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
    color: '#ffffff',
    padding: isMobile ? '30px 16px' : '40px 20px',
    textAlign: 'center',
    borderRadius: isMobile ? '8px' : '10px',
    marginTop: isMobile ? '30px' : '40px',
  };

  const ctaButtonStyle = {
    backgroundColor: '#ffffff',
    color: '#0077cc',
    padding: isMobile ? '8px 16px' : '10px 20px',
    margin: isMobile ? '5px' : '0 10px 0 0',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: isMobile ? '14px' : '16px',
    display: isMobile ? 'block' : 'inline-block',
    marginBottom: isMobile ? '10px' : '0',
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Hero Section */}
      <div style={heroStyle}>
        <h1 style={sectionHeading}>Contact Us</h1>
        <p style={heroSubtextStyle}>
          We're here to help! Whether you have questions about our antivirus products, need technical assistance, or want to share feedback, feel free to get in touch with our support team.
        </p>
      </div>

      {/* Grid Section */}
      <div style={{ padding: isMobile ? '30px 16px' : '40px 20px' }}>
        <div style={gridContainerStyle}>
          {/* Contact Info Cards */}
          {[
            {
              title: 'Email Support',
              detail: 'info@safenetcare.online',
              note: 'Available 24/7'
            },
            {
              title: 'Phone Support',
              detail: '+1 (833) 860-0046',
              note: 'Toll-Free'
            },
            {
              title: 'Business Hours',
              detail: 'Mon – Fri: 9:00 AM – 6:00 PM (EST)',
              note: 'Sat – Sun: Closed'
            }
          ].map((item, i) => (
            <div key={i} style={cardStyle}>
              <h3 style={{ 
                color: '#0077cc', 
                fontSize: isMobile ? '16px' : '18px',
                marginBottom: '10px'
              }}>{item.title}</h3>
              <p style={{ 
                marginBottom: '8px',
                fontSize: isMobile ? '14px' : '16px',
                wordBreak: 'break-word'
              }}>
                <strong>{item.detail}</strong>
              </p>
              <span style={{ 
                color: '#555', 
                fontSize: isMobile ? '12px' : '14px' 
              }}>{item.note}</span>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div style={formContainerStyle}>
          <h2 style={{ 
            color: '#005ea6', 
            marginBottom: '20px', 
            textAlign: 'center',
            fontSize: isMobile ? '1.5rem' : '1.8rem'
          }}>Send us a Message</h2>
          
          {/* Success Message */}
          {showSuccess && (
            <div style={{
              backgroundColor: '#d4edda',
              color: '#155724',
              padding: '15px',
              borderRadius: '8px',
              border: '1px solid #c3e6cb',
              marginBottom: '20px',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              🎉 Thank you for contacting us! We'll get back to you soon.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            {[
              { label: 'Full Name', type: 'text', name: 'name' },
              { label: 'Email Address', type: 'email', name: 'email' },
              { label: 'Phone Number', type: 'tel', name: 'phone' }
            ].map(({ label, type, name }) => (
              <div key={name} style={{ marginBottom: '15px' }}>
                <label style={labelStyle}>{label}</label>
                <input 
                  type={type} 
                  name={name} 
                  value={formData[name]}
                  onChange={handleInputChange}
                  style={inputStyle}
                  required
                />
              </div>
            ))}

            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Subject</label>
              <select 
                name="subject" 
                value={formData.subject}
                onChange={handleInputChange}
                style={inputStyle}
                required
              >
                <option value="">Select a topic</option>
                <option value="technical-support">Technical Support</option>
                <option value="product-inquiry">Product Inquiry</option>
                <option value="billing">Billing Questions</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={labelStyle}>Message</label>
              <textarea 
                name="message" 
                rows={isMobile ? "4" : "5"} 
                value={formData.message}
                onChange={handleInputChange}
                style={inputStyle}
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              style={{
                ...buttonStyle,
                backgroundColor: isSubmitting ? '#ccc' : '#00aaff',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1
              }}
              onMouseOver={(e) => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = '#0099dd';
                }
              }}
              onMouseOut={(e) => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = '#00aaff';
                }
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* CTA Section */}
        <div style={ctaStyle}>
          <h2 style={{ 
            fontSize: isMobile ? '1.5rem' : '2rem',
            marginBottom: '10px'
          }}>Your Security is Our Priority</h2>
          <p style={{ 
            fontSize: isMobile ? '14px' : '16px',
            marginBottom: '20px',
            lineHeight: '1.5'
          }}>
            Reach out anytime — we're ready to assist you with all your cybersecurity needs.
          </p>
          <div style={{ 
            marginTop: '20px',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <a href="tel:+18338600046" style={ctaButtonStyle}>+1 (833) 860-0046</a>
            <a href="mailto:info@safenetcare.online" style={{
              ...ctaButtonStyle,
              margin: isMobile ? '0' : '0 0 0 10px'
            }}>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;