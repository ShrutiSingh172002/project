import React, { useState, useEffect } from 'react';
import { Shield, Users, Target, Zap, Eye, Lightbulb, CheckCircle, UserCheck, TrendingUp, Award, Lock, Globe } from 'lucide-react';

const About = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const values = [
    {
      icon: <Eye size={32} />,
      title: "Transparency",
      description: "We believe users deserve to know how their data is protected and never exploited.",
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)"
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description: "We invest in cutting-edge research to stay ahead of cybercriminals.",
      gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Reliability",
      description: "Our software is rigorously tested to ensure it works when you need it most.",
      gradient: "linear-gradient(135deg, #10b981, #059669)"
    },
    {
      icon: <UserCheck size={32} />,
      title: "User-Centric Design",
      description: "Every feature we build is designed with real users in mind.",
      gradient: "linear-gradient(135deg, #f59e0b, #ef4444)"
    }
  ];

  const stats = [
    { number: "10M+", label: "Protected Devices", icon: <Shield size={24} /> },
    { number: "99.9%", label: "Threat Detection", icon: <Target size={24} /> },
    { number: "24/7", label: "Real-time Protection", icon: <Zap size={24} /> },
    { number: "150+", label: "Security Experts", icon: <Users size={24} /> }
  ];

  const teamHighlights = [
    {
      role: "Cybersecurity Specialists",
      count: "50+",
      description: "Former ethical hackers and security researchers",
      icon: <Lock size={24} />
    },
    {
      role: "AI/ML Engineers",
      count: "30+",
      description: "Building next-gen threat detection systems",
      icon: <TrendingUp size={24} />
    },
    {
      role: "Global Operations",
      count: "20+",
      description: "Round-the-clock monitoring and response",
      icon: <Globe size={24} />
    }
  ];

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#e6f2ff',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const cardStyle = {
    backgroundColor: '#2563eb',
    boxShadow: '0 8px 25px rgba(37, 99, 235, 0.25)',
    borderRadius: '16px',
    padding: '24px',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const responsiveClasses = {
    hero: {
      padding: '40px 16px 32px',
      '@media (min-width: 768px)': {
        padding: '80px 24px 64px'
      }
    },
    heroTitle: {
      fontSize: '2rem',
      '@media (min-width: 768px)': {
        fontSize: '3rem'
      },
      '@media (min-width: 1024px)': {
        fontSize: '4rem'
      }
    },
    heroDescription: {
      fontSize: '1rem',
      '@media (min-width: 768px)': {
        fontSize: '1.125rem'
      },
      '@media (min-width: 1024px)': {
        fontSize: '1.25rem'
      }
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px'
      }
    },
    missionGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '32px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '48px'
      }
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '24px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '32px'
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
      }
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '24px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '32px'
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(3, 1fr)'
      }
    },
    padding: {
      padding: '0 16px',
      '@media (min-width: 768px)': {
        padding: '0 24px'
      }
    },
    sectionSpacing: {
      marginBottom: '40px',
      '@media (min-width: 768px)': {
        marginBottom: '80px'
      }
    }
  };

  

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ 
          position: 'relative', 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '40px 16px 32px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              marginBottom: '32px'
            }}>
              <Shield size={40} color="black" />
            </div>
            <h1 style={{
              fontSize: screenWidth >= 1024 ? '4rem' : screenWidth >= 768 ? '3rem' : '2rem',
              fontWeight: 'bold',
              color: 'black',
              marginBottom: '24px',
              lineHeight: '1.1'
            }}>
              About SafeNet
            </h1>
            <p style={{
              fontSize: screenWidth >= 1024 ? '1.25rem' : screenWidth >= 768 ? '1.125rem' : '1rem',
              color: 'black',
              maxWidth: '768px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Your digital safety is our top priority. In an age where cyber threats are constantly evolving, 
              we're here to provide powerful, real-time protection to keep your devices, data, and privacy secure.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ 
        position: 'relative', 
        marginTop: '-32px', 
        maxWidth: '1280px', 
        margin: '-32px auto 40px', 
        padding: '0 16px'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: screenWidth >= 768 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
          gap: screenWidth >= 768 ? '24px' : '16px'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              ...cardStyle,
              textAlign: 'center',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1d4ed8';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(37, 99, 235, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.25)';
            }}>
              <div style={{ color: '#60a5fa', marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>
                {stat.icon}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000', marginBottom: '4px' }}>
                {stat.number}
              </div>
              <div style={{ color: 'white', fontSize: '0.875rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px 40px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: screenWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
          gap: screenWidth >= 768 ? '48px' : '32px',
          alignItems: 'center' 
        }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'black', marginBottom: '24px' }}>
              Our Mission
            </h2>
            <p style={{ color: 'black', fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '24px' }}>
              We are a dedicated team of cybersecurity experts, developers, and researchers focused on building 
              innovative antivirus solutions that are fast, lightweight, and incredibly effective.
            </p>
            <p style={{ color: 'black', fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '32px' }}>
              Whether you're a home user or a business, our tools are designed to detect and block malware, 
              ransomware, phishing attempts, and other digital threats before they reach you.
            </p>
            <div style={{
              backgroundColor: '#1e40af',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 8px 25px rgba(30, 64, 175, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#000', marginBottom: '12px' }}>
                Our Simple Mission
              </h3>
              <p style={{ color: 'white', fontSize: '1.125rem' }}>
                Protect what matters most — your identity, your data, and your peace of mind.
              </p>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              backgroundColor: '#1e40af',
              borderRadius: '24px',
              padding: '32px',
              boxShadow: '0 12px 40px rgba(30, 64, 175, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#3b82f6',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <Shield size={32} color="white" />
                  </div>
                  <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '8px' }}>Advanced Protection</h4>
                  <p style={{ color: 'white', fontSize: '0.875rem' }}>AI-powered threat detection</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#8b5cf6',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <Zap size={32} color="white" />
                  </div>
                  <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '8px' }}>Lightning Fast</h4>
                  <p style={{ color: 'white', fontSize: '0.875rem' }}>Minimal system impact</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#10b981',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <Users size={32} color="white" />
                  </div>
                  <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '8px' }}>User Friendly</h4>
                  <p style={{ color: 'white', fontSize: '0.875rem' }}>Intuitive interface design</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#f59e0b',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <Target size={32} color="white" />
                  </div>
                  <h4 style={{ color: 'white', fontWeight: '600', marginBottom: '8px' }}>Precision Focus</h4>
                  <p style={{ color: 'white', fontSize: '0.875rem' }}>Targeted threat elimination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why We Exist Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'black', marginBottom: '24px' }}>
            Why We Exist
          </h2>
          <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
            <div style={{
              backgroundColor: '#1e40af',
              borderRadius: '24px',
              padding: '32px',
              boxShadow: '0 12px 40px rgba(30, 64, 175, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p style={{ color: 'white', fontSize: '1.125rem', lineHeight: '1.6' }}>
                SafeNet was born out of a growing concern for the rise in cybercrime targeting individuals and 
                small businesses. We believe that security tools shouldn't be complicated, expensive, or resource-heavy. 
                Our approach focuses on accessibility, ease of use, and intelligent automation that adapts as threats evolve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'black', marginBottom: '24px' }}>
            Our Values
          </h2>
          <p style={{ color: 'black', fontSize: '1.125rem', maxWidth: '512px', margin: '0 auto' }}>
            These principles guide everything we do, from product development to customer support.
          </p>
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: screenWidth >= 1024 ? 'repeat(auto-fit, minmax(300px, 1fr))' : screenWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
          gap: screenWidth >= 768 ? '32px' : '24px'
        }}>
          {values.map((value, index) => (
            <div key={index} style={{ position: 'relative', cursor: 'pointer' }}
            onMouseEnter={(e) => {
              const card = e.currentTarget.querySelector('.value-card');
              if (card) {
                card.style.backgroundColor = '#1d4ed8';
                card.style.transform = 'translateY(-4px)';
                card.style.boxShadow = '0 12px 35px rgba(37, 99, 235, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              const card = e.currentTarget.querySelector('.value-card');
              if (card) {
                card.style.backgroundColor = '#2563eb';
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.25)';
              }
            }}>
              <div className="value-card" style={{
                ...cardStyle,
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: value.gradient,
                  marginBottom: '24px'
                }}>
                  <div style={{ color: 'white' }}>{value.icon}</div>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#000', marginBottom: '16px' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'white', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'black', marginBottom: '24px' }}>
            Our Expert Team
          </h2>
          <p style={{ color: 'black', fontSize: '1.125rem', maxWidth: '512px', margin: '0 auto' }}>
            A diverse group of cybersecurity professionals dedicated to your digital safety.
          </p>
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: screenWidth >= 1024 ? 'repeat(3, 1fr)' : screenWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
          gap: screenWidth >= 768 ? '32px' : '24px'
        }}>
          {teamHighlights.map((team, index) => (
            <div key={index} style={{
              ...cardStyle,
              textAlign: 'center',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1d4ed8';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(37, 99, 235, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.25)';
            }}>
              <div style={{ color: '#60a5fa', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                {team.icon}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>
                {team.count}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#000', marginBottom: '12px' }}>
                {team.role}
              </h3>
              <p style={{ color: 'white' }}>{team.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Looking Ahead Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px 40px' }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'relative',
            backgroundColor: '#1e40af',
            borderRadius: '24px',
            padding: screenWidth >= 768 ? '48px' : '32px',
            boxShadow: '0 12px 40px rgba(30, 64, 175, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                marginBottom: '24px'
              }}>
                <TrendingUp size={32} color="white" />
              </div>
              <h2>Looking Ahead</h2>
            </div>
            <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
              <p style={{ color: 'white', fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '32px', textAlign: 'center' }}>
                As threats become more sophisticated, so do we. We're continuously upgrading our detection engines, 
                introducing AI-based monitoring, and building tools that empower users to take control of their 
                cybersecurity with confidence.
              </p>
              <div style={{
                backgroundColor: '#2563eb',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 8px 25px rgba(37, 99, 235, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#000', marginBottom: '12px' }}>
                  SafeNet is more than just an antivirus — it's your digital defense partner.
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Award size={32} color="#60a5fa" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
