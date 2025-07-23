import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CheckCircle, Monitor, Smartphone, Apple, Building, Globe, Lock, Mail } from 'lucide-react';
import './Home.css';
import servicesImage from '../assets/protect-img.jpg';
import { useResponsive } from '../hooks/useResponsive';

const services = [
  { id: 1, icon: <Monitor size={32} />, title: "Windows Antivirus" },
  { id: 2, icon: <Apple size={32} />, title: "Mac Antivirus" },
  { id: 3, icon: <Smartphone size={32} />, title: "Android Security" },
  { id: 4, icon: <Apple size={32} />, title: "iOS Protection" },
  { id: 5, icon: <Building size={32} />, title: "Enterprise Security" },
  { id: 6, icon: <Globe size={32} />, title: "Web Protection" },
  { id: 7, icon: <Lock size={32} />, title: "Firewall & VPN" },
  { id: 8, icon: <Mail size={32} />, title: "Email Protection" },
];

const Home = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const handleServiceClick = (id) => {
    navigate(`/services/${id}`);
  };

  // Responsive styles
  const getResponsiveStyles = () => {
    if (isMobile) {
      return {
        container: { padding: '1rem' },
        hero: { padding: '2rem 0' },
        heading: { fontSize: '1.5rem', marginBottom: '1rem' },
        text: { fontSize: '0.9rem', lineHeight: '1.4' },
        grid: { 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '1rem',
          padding: '0 0.5rem'
        },
        card: { 
          padding: '1rem', 
          textAlign: 'center',
          minHeight: '100px'
        },
        icon: { marginBottom: '0.5rem' },
        cardText: { fontSize: '0.8rem' },
        image: { 
          maxWidth: '100%', 
          height: 'auto',
          borderRadius: '8px',
          margin: '1rem 0'
        },
        whyChoose: { padding: '1.5rem 0' },
        cta: { padding: '2rem 0' },
        button: { 
          padding: '0.75rem 1.25rem',
          fontSize: '0.9rem',
          marginTop: '1rem',
          display: 'inline-block',
          textDecoration: 'none',
          borderRadius: '6px',
          minWidth: 'auto',
          width: 'auto',
          maxWidth: '200px',
          textAlign: 'center'
        }
      };
    } else if (isTablet) {
      return {
        container: { padding: '1.5rem' },
        hero: { padding: '2.5rem 0' },
        heading: { fontSize: '2rem', marginBottom: '1.25rem' },
        text: { fontSize: '1rem', lineHeight: '1.5' },
        grid: { 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '1.5rem',
          padding: '0 1rem'
        },
        card: { 
          padding: '1.5rem', 
          textAlign: 'center',
          minHeight: '120px'
        },
        icon: { marginBottom: '0.75rem' },
        cardText: { fontSize: '0.9rem' },
        image: { 
          maxWidth: '90%', 
          height: 'auto',
          borderRadius: '10px',
          margin: '1.5rem 0'
        },
        whyChoose: { padding: '2rem 0' },
        cta: { padding: '2.5rem 0' },
        button: { 
          padding: '1rem 2rem',
          fontSize: '1rem',
          marginTop: '1.5rem',
          display: 'inline-block',
          textDecoration: 'none',
          borderRadius: '8px'
        }
      };
    } else {
      return {
        container: { padding: '2rem' },
        hero: { padding: '3rem 0' },
        heading: { fontSize: '2.5rem', marginBottom: '1.5rem' },
        text: { fontSize: '1.1rem', lineHeight: '1.6' },
        grid: { 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '2rem',
          padding: '0 1.5rem'
        },
        card: { 
          padding: '2rem', 
          textAlign: 'center',
          minHeight: '150px'
        },
        icon: { marginBottom: '1rem' },
        cardText: { fontSize: '1rem' },
        image: { 
          maxWidth: '800px', 
          width: '100%', 
          height: '100%',
          borderRadius: '12px',
          margin: '2rem 0'
        },
        whyChoose: { padding: '2.5rem 0' },
        cta: { padding: '3rem 0' },
        button: { 
          padding: '1.2rem 2.5rem',
          fontSize: '1.1rem',
          marginTop: '2rem',
          display: 'inline-block',
          textDecoration: 'none',
          borderRadius: '10px'
        }
      };
    }
  };

  const styles = getResponsiveStyles();

  return (
    <div className="home-page" style={styles.container}>
      {/* ✅ Meta Tags */}
      <Helmet>
        <title>Secure Software Solutions|safenetcare.online</title>
        <meta
          name="description"
          content="Safenetcare.online is a trusted software provider offering advanced antivirus solutions and secure digital tools tailored to meet the unique needs of businesses across various industries. With a focus on performance, reliability, and innovation, Safenetcare delivers cutting-edge protection and customized cybersecurity solutions."
        />
        <meta
          name="keywords"
          content="Best Software Solutions Gurugram, Our Antivirus Software Solutions, Window Antivirus Services, Mac Antivirus Services, Android Security, iOS Protection Service, Best Enterprise Security, Web Protection, Firewall & VPN Services, Email Protection, SecureTech Solutions, Smart Secure Systems, CodeShield Experts, NextGen Software Security, Trusted App Defense, Cyber-Safe Code, SecureCode Lab, Digital Armor Solutions, SafeSoft Engineers, Fortified Software."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero" style={styles.hero}>
        <h1 className="heading-blue" style={styles.heading}>Securing Your Digital World</h1>
        <p className="text-black" style={styles.text}>
          Safenetcare.online is a trusted software provider offering advanced antivirus solutions and secure digital tools tailored to meet the unique needs of businesses across various industries.
        </p>
        <p className="text-black" style={styles.text}>
          With a focus on performance, reliability, and innovation, SafeNet delivers cutting-edge protection and customized cybersecurity solutions designed for growth.
        </p>
      </section>

      {/* Antivirus Categories */}
      <section className="categories">
        <h2 className="heading-blue" style={styles.heading}>Our Antivirus Solutions  – Smart, Secure & Always Ahead</h2>
        <p className="text-black" style={styles.text}>
          At SafeNet, our antivirus solutions are more than just protection—they are a comprehensive shield designed to proactively defend against the most advanced cyber threats. In today's ever-evolving digital world, safeguarding your data, devices, and privacy is essential. That's where our intelligent antivirus technology comes in, providing unmatched security with speed, precision, and reliability. Backed by 24/7 expert support, SafeNet ensures you're never alone in your fight against cybercrime. We're constantly updating our virus definitions and software capabilities, so you stay one step ahead of hackers and malicious software.
        </p>
        <div className="grid" style={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className="card" style={styles.card} onClick={() => handleServiceClick(service.id)}>
              <div className="icon" style={styles.icon}>
                {React.cloneElement(service.icon, { size: isMobile ? 24 : isTablet ? 28 : 32 })}
              </div>
              <div className="text" style={styles.cardText}>{service.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="protection-image-section" style={{ textAlign: 'center', margin: styles.image.margin }}>
        <img
          src={servicesImage}
          alt="Device Protection"
          style={{ 
            maxWidth: styles.image.maxWidth, 
            width: styles.image.width || '100%', 
            height: styles.image.height || 'auto', 
            borderRadius: styles.image.borderRadius, 
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)' 
          }}
        />
      </section>

      {/* Why Choose SafeNet Section */}
      <section className="why-choose-content" style={styles.whyChoose}>
        <div className="why-choose-container">
          <h2 className="heading-blue center-text" style={styles.heading}>Why Choose Us</h2>
          <p className="text-black center-text" style={styles.text}>
            SafeNet stands out with its user-friendly interface and lightweight design, making it easy to install, use, and manage — even for non-technical users. It runs seamlessly in the background without slowing down your system, ensuring a smooth and uninterrupted experience.
          </p>
          <ul className="why-features" style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: isMobile ? '1rem 0' : '1.5rem 0' 
          }}>
            <li style={{ marginBottom: isMobile ? '0.8rem' : '1rem' }}>
              <span className="bullet-item" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem' 
              }}>
                <CheckCircle size={isMobile ? 16 : 20} color="#2d6cdf" />
                <strong className="black-bold" style={{ fontSize: styles.text.fontSize }}>Real-time protection</strong>
              </span>
            </li>
            <li style={{ marginBottom: isMobile ? '0.8rem' : '1rem' }}>
              <span className="bullet-item" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem' 
              }}>
                <CheckCircle size={isMobile ? 16 : 20} color="#2d6cdf" />
                <strong className="black-bold" style={{ fontSize: styles.text.fontSize }}>Fast and lightweight scanning</strong>
              </span>
            </li>
             <li style={{ marginBottom: isMobile ? '0.8rem' : '1rem' }}>
              <span className="bullet-item" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem' 
              }}>
                 <CheckCircle size={isMobile ? 16 : 20} color="#2d6cdf" />
                 <strong className="black-bold" style={{ fontSize: styles.text.fontSize }}>24/7 customer support</strong>
              </span>
            </li>
            <li style={{ marginBottom: isMobile ? '0.8rem' : '1rem' }}>
              <span className="bullet-item" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem' 
              }}>
                <CheckCircle size={isMobile ? 16 : 20} color="#2d6cdf" />
                <strong className="black-bold" style={{ fontSize: styles.text.fontSize }}>Easy to use and install</strong>
              </span>
            </li>
          </ul>

        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" style={styles.cta}>
        <h2 className="heading-blue" style={styles.heading}>Ready to protect your digital life?</h2>
        <p className="text-black" style={styles.text}>
          Installation is fast and simple. In just a few clicks, you can set up your device protection and start enjoying a safer digital experience. The user-friendly interface is designed for everyone – whether you're a tech expert or a first-time user. You can schedule automatic scans, customize your security settings, and receive instant notifications about any threats found on your device. Worried about performance? Don't be. Our lightweight software is optimized for speed and efficiency. It runs quietly in the background without slowing down your system, allowing you to work, browse, stream, or play without interruption. It's the ideal balance between powerful protection and smooth device performance.
        </p>
        <p className="text-black" style={styles.text}>
          We also offer extra features like secure browsing, parental controls, and identity theft prevention. With our all-in-one protection suite, you're not just protecting your device – you're protecting your digital lifestyle. For businesses, we offer scalable solutions that provide endpoint protection, network security, and centralized control, ensuring complete security across your entire organization. In addition, our dedicated customer support team is available to assist you with setup, troubleshooting, or any questions you may have. Our goal is to empower you with tools and support to stay ahead of cyber threats at all times. So, are you ready to protect your device? Don't wait for a cyberattack to take action. Choose a trusted name in digital security and take the first step towards complete device protection today. Your safety is our priority – and with our protection, your device is always in good hands.
        </p>
        <a href="/contact" className="highlight-button no-border" style={styles.button}>Contact Us</a>
      </section>
    </div>
  );
};

export default Home;