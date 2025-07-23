import React, { useState, useEffect } from 'react';

const Terms = () => {
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth <= 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveStyles = () => {
    const baseStyles = {
      container: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e6f0fa, #cce0f5)',
        padding: screenSize === 'mobile' ? '20px' : screenSize === 'tablet' ? '30px' : '40px',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0, 51, 102, 0.2)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#003366',
        textAlign: 'center',
        maxWidth: screenSize === 'mobile' ? '100%' : '800px',
        margin: '0 auto'
      },
      wrapper: {
        maxWidth: '64rem',
        margin: '0 auto'
      },
      header: {
        textAlign: 'center',
        marginBottom: screenSize === 'mobile' ? '2rem' : '3rem'
      },
      title: {
        fontSize: screenSize === 'mobile' ? '2rem' : screenSize === 'tablet' ? '2.25rem' : '2.5rem',
        fontWeight: 'bold',
        color: '#005ea6',
        textShadow: '1px 1px 2px rgba(0, 94, 166, 0.2)',
        marginBottom: '1rem'
      },
      subtitle: {
        fontSize: screenSize === 'mobile' ? '1rem' : '1.125rem',
        color: '#1d4ed8'
      },
      content: {
        padding: screenSize === 'mobile' ? '1.5rem' : screenSize === 'tablet' ? '2rem' : '3rem',
        lineHeight: '1.6',
        color: '#1e40af',
        textAlign: 'left'
      },
      section: {
        borderBottom: '1px solid #bfdbfe',
        paddingBottom: screenSize === 'mobile' ? '1.5rem' : '2rem',
        marginBottom: screenSize === 'mobile' ? '1.5rem' : '2rem'
      },
      sectionTitle: {
        fontSize: screenSize === 'mobile' ? '1.25rem' : screenSize === 'tablet' ? '1.375rem' : '1.5rem',
        fontWeight: '600',
        color: '#1e3a8a',
        marginBottom: '1rem'
      },
      text: {
        color: '#1e40af',
        marginBottom: '1rem',
        fontSize: screenSize === 'mobile' ? '0.9rem' : '1rem'
      },
      list: {
        paddingLeft: screenSize === 'mobile' ? '1rem' : '1.5rem',
        color: '#1e40af'
      },
      listItem: {
        marginBottom: '0.5rem',
        fontSize: screenSize === 'mobile' ? '0.9rem' : '1rem'
      },
      highlightBox: {
        backgroundColor: '#dbeafe',
        border: '1px solid #93c5fd',
        borderRadius: '0.5rem',
        padding: screenSize === 'mobile' ? '0.75rem' : '1rem',
        marginBottom: '1rem'
      },
      highlightTitle: {
        fontWeight: '600',
        color: '#1e3a8a',
        marginBottom: '0.5rem',
        fontSize: screenSize === 'mobile' ? '0.95rem' : '1rem'
      },
      highlightText: {
        color: '#1e40af',
        fontSize: screenSize === 'mobile' ? '0.9rem' : '1rem'
      },
      accentBox: {
        backgroundColor: '#eff6ff',
        borderLeft: '4px solid #3b82f6',
        borderRadius: '0.5rem',
        padding: screenSize === 'mobile' ? '0.75rem' : '1rem',
        marginBottom: '1rem'
      },
      contactBox: {
        backgroundColor: '#dbeafe',
        border: '1px solid #93c5fd',
        borderRadius: '0.5rem',
        padding: screenSize === 'mobile' ? '1rem' : '1.5rem',
        display: screenSize === 'mobile' ? 'block' : 'inline-block',
        textAlign: 'left',
        width: screenSize === 'mobile' ? '100%' : 'auto'
      },
      link: {
        color: '#2563eb',
        textDecoration: 'none',
        wordBreak: screenSize === 'mobile' ? 'break-all' : 'normal'
      },
      linkHover: {
        textDecoration: 'underline'
      },
      footer: {
        textAlign: 'center',
        paddingTop: screenSize === 'mobile' ? '1.5rem' : '2rem',
        borderTop: '1px solid #bfdbfe',
        marginTop: screenSize === 'mobile' ? '1.5rem' : '2rem'
      },
      footerText: {
        color: '#1e40af',
        fontSize: screenSize === 'mobile' ? '0.9rem' : '1rem'
      },
      footerSmall: {
        fontSize: screenSize === 'mobile' ? '0.8rem' : '0.875rem',
        color: '#2563eb',
        marginTop: '1rem'
      }
    };

    return baseStyles;
  };

  const styles = getResponsiveStyles();

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Terms & Conditions</h1>
          <p style={styles.subtitle}>Last updated: January 2025</p>
        </div>

        {/* Main Content */}
        <div style={styles.content}>
          
          {/* Introduction */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>1. Introduction</h2>
            <p style={styles.text}>
              Welcome to SafeNet. By accessing, downloading, installing, or using our cybersecurity services, 
              software applications, and website (collectively, the "Services"), you agree to be bound by these 
              Terms & Conditions ("Terms"). Please read them carefully before proceeding. If you do not agree 
              with any part of these terms, you must discontinue use of our Services immediately.
            </p>
          </section>

          {/* Acceptance and Eligibility */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>2. Acceptance and Eligibility</h2>
            <p style={styles.text}>By using SafeNet Services, you represent and warrant that:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>You are at least 18 years old or have parental/guardian consent</li>
              <li style={styles.listItem}>You have the legal capacity to enter into binding agreements</li>
              <li style={styles.listItem}>You are not prohibited from using our Services under applicable laws</li>
              <li style={styles.listItem}>All information you provide is accurate and complete</li>
            </ul>
          </section>

          {/* Use of Services */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>3. Permitted Use</h2>
            <p style={styles.text}>
              SafeNet antivirus and cybersecurity tools are provided solely for lawful, personal, or 
              legitimate business use. You agree to use our Services responsibly and in compliance with 
              all applicable laws and regulations.
            </p>
            <div style={styles.accentBox}>
              <h4 style={styles.highlightTitle}>Prohibited Activities:</h4>
              <ul style={styles.list}>
                <li style={styles.listItem}>Using our software to facilitate illegal activities</li>
                <li style={styles.listItem}>Attempting to bypass security measures or access restrictions</li>
                <li style={styles.listItem}>Interfering with other users' access to our Services</li>
                <li style={styles.listItem}>Transmitting malicious code or harmful content</li>
                <li style={styles.listItem}>Violating intellectual property rights</li>
              </ul>
            </div>
          </section>

          {/* License and Restrictions */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>4. License & Restrictions</h2>
            <div style={styles.highlightBox}>
              <h4 style={styles.highlightTitle}>License Grant:</h4>
              <p style={styles.highlightText}>
                Subject to your compliance with these Terms, SafeNet grants you a limited, non-exclusive, 
                non-transferable, revocable license to use our software and Services as intended.
              </p>
            </div>
            <h4 style={styles.highlightTitle}>Restrictions:</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>You may not reverse-engineer, decompile, or disassemble our software</li>
              <li style={styles.listItem}>Distribution, modification, or resale of our software is prohibited without written permission</li>
              <li style={styles.listItem}>Sharing or redistributing license keys is strictly prohibited</li>
              <li style={styles.listItem}>Creating derivative works based on our software is not permitted</li>
              <li style={styles.listItem}>Removing or modifying copyright notices is forbidden</li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>5. User Responsibilities</h2>
            <p style={styles.text}>You are responsible for:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Maintaining the confidentiality and security of your login credentials</li>
              <li style={styles.listItem}>Ensuring your usage complies with these Terms and applicable laws</li>
              <li style={styles.listItem}>Promptly notifying us of any security breaches or unauthorized access</li>
              <li style={styles.listItem}>Keeping your software updated with the latest versions and patches</li>
              <li style={styles.listItem}>Backing up your data before using our Services</li>
              <li style={styles.listItem}>Using our Services only on devices you own or have permission to use</li>
            </ul>
          </section>

          {/* Account Management */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>6. Account Management</h2>
            <div>
              <h4 style={styles.highlightTitle}>Account Suspension/Termination:</h4>
              <p style={styles.text}>
                We reserve the right to suspend, terminate, or restrict access to accounts involved in 
                fraudulent, illegal, abusive, or policy-violating behavior. This action may be taken 
                with or without prior notice at our sole discretion.
              </p>
            </div>
            <div>
              <h4 style={styles.highlightTitle}>Account Closure:</h4>
              <p style={styles.text}>
                You may terminate your account at any time by contacting our support team. Upon termination, 
                your license to use our Services will cease immediately.
              </p>
            </div>
          </section>

          {/* Privacy and Data */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>7. Privacy & Data Protection</h2>
            <p style={styles.text}>
              Your privacy is important to us. Our collection, use, and protection of your personal 
              information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            <div style={styles.highlightBox}>
              <h4 style={styles.highlightTitle}>Data Security:</h4>
              <p style={styles.highlightText}>
                We implement industry-standard security measures to protect your data. However, no method 
                of transmission over the internet is 100% secure.
              </p>
            </div>
          </section>

          {/* Software Updates */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>8. Software Updates</h2>
            <p style={styles.text}>
              SafeNet may release periodic updates, patches, or new versions to improve functionality, 
              security, or performance. These updates may be automatic or require manual installation.
            </p>
            <div style={styles.accentBox}>
              <h4 style={styles.highlightTitle}>Important:</h4>
              <p style={styles.highlightText}>
                It is your responsibility to keep your software version up to date. Using outdated 
                versions may compromise security and functionality.
              </p>
            </div>
          </section>

          {/* Disclaimers and Limitations */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>9. Disclaimers & Limitation of Liability</h2>
            <div style={styles.highlightBox}>
              <h4 style={styles.highlightTitle}>Service Disclaimer:</h4>
              <p style={styles.highlightText}>
                Our Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, 
                either express or implied. We do not guarantee that our Services will be error-free, 
                uninterrupted, or completely secure.
              </p>
            </div>
            <div>
              <h4 style={styles.highlightTitle}>Limitation of Liability:</h4>
              <p style={styles.text}>
                While we strive for optimal protection, SafeNet shall not be liable for any direct, 
                indirect, incidental, special, consequential, or punitive damages resulting from:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>Malware attacks or security breaches</li>
                <li style={styles.listItem}>Data loss or corruption</li>
                <li style={styles.listItem}>Service interruptions or downtime</li>
                <li style={styles.listItem}>Third-party actions or software conflicts</li>
                <li style={styles.listItem}>Use or inability to use our Services</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>10. Intellectual Property</h2>
            <p style={styles.text}>
              All content, software, trademarks, logos, and intellectual property associated with 
              SafeNet are owned by us or our licensors. You may not use, reproduce, or distribute 
              any of our intellectual property without explicit written permission.
            </p>
          </section>

          {/* Indemnification */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>11. Indemnification</h2>
            <p style={styles.text}>
              You agree to indemnify, defend, and hold harmless SafeNet, its affiliates, officers, 
              directors, employees, and agents from any claims, damages, losses, or expenses arising 
              from your use of our Services or violation of these Terms.
            </p>
          </section>

          {/* Modifications */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>12. Modifications to Terms</h2>
            <p style={styles.text}>
              We reserve the right to modify these Terms at any time. Material changes will be 
              communicated through our website or via email. Continued use of our Services after 
              changes constitutes your acceptance of the new terms.
            </p>
            <div style={styles.highlightBox}>
              <p style={styles.highlightText}>
                <strong>Recommendation:</strong> Please review these Terms periodically to stay 
                informed of any updates.
              </p>
            </div>
          </section>

         

          {/* Contact Information */}
          <section style={{ textAlign: 'center' }}>
            <h2 style={styles.sectionTitle}>13. Contact Information</h2>
            <p style={styles.text}>
              For any questions, concerns, or legal inquiries regarding these Terms & Conditions, 
              please contact us:
            </p>
            <div style={styles.contactBox}>
              <p style={styles.highlightTitle}>SafeNet Legal Department</p>
              <p style={styles.text}>Email: <a href="mailto:info@safenetcare.online" style={styles.link}>info@safenetcare.online</a></p>
              <p style={styles.text}>Phone: +1(833)860-0046</p>
              
            </div>
          </section>

          {/* Footer */}
          <div style={styles.footer}>
            <p style={styles.footerText}>
              Thank you for choosing SafeNet. Your compliance with these terms helps us maintain 
              a safe and secure digital environment for all users.
            </p>
            <p style={styles.footerSmall}>
              © 2025 SafeNet. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;