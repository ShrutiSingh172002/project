import React from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  Smartphone,
  Cloud,
  Brain,
  UserCircle,
  Star,
  Quote,
  TrendingUp,
  Lock,
  Zap,
  Globe
} from 'lucide-react';

const testimonials = [
  {
    name: "Neha Sharma",
    title: "Tech Enthusiast & Blogger",
    feedback: "SafeNet transformed my digital experience completely! Their AI-powered protection caught 15 threats in my first week. The real-time dashboard is incredibly intuitive, and I love how it explains each threat in simple terms. My laptop runs smoother than ever!",
    rating: 5,
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1494790108755-2616b9e0e014?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Rohan Patel",
    title: "Freelance Designer & Developer",
    feedback: "As someone who works with multiple clients and downloads lots of files, SafeNet is my digital guardian angel. It's incredibly lightweight - I can run heavy design software without any slowdown. The malware detection is spot-on, catching things other antiviruses missed.",
    rating: 5,
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Alisha Rodrigues",
    title: "Startup Founder & CEO",
    feedback: "Running a startup means handling sensitive data 24/7. SafeNet's business-grade protection gives me peace of mind. Their customer support is phenomenal - they resolved a complex network issue in under 2 hours. Worth every penny for the security it provides!",
    rating: 5,
    location: "Pune, India",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Vikram Desai",
    title: "Parent & IT Professional",
    feedback: "Perfect solution for my family's digital safety! My kids use it on their phones and tablets - the interface is so user-friendly that my 8-year-old can run scans independently. The parental controls are robust yet non-intrusive. Highly recommend for families!",
    rating: 5,
    location: "Delhi, India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Sneha Kapoor",
    title: "Digital Marketing Manager",
    feedback: "Switched from a premium competitor and SafeNet exceeded all expectations! The price point is unbeatable, and the protection is actually superior. Love the detailed threat reports and the way it optimizes my system performance. This is the future of antivirus!",
    rating: 5,
    location: "Hyderabad, India",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
  }
];

const blogPosts = [
  {
    title: "The Evolution of Cyber Threats in 2025",
    excerpt: "From AI-powered attacks to quantum computing vulnerabilities, discover how the threat landscape is changing and how SafeNet stays ahead.",
    readTime: "5 min read",
    category: "Threat Analysis",
    icon: <TrendingUp size={24} />
  },
  {
    title: "Zero-Trust Security: Why It Matters for Everyone",
    excerpt: "Learn why the 'never trust, always verify' approach is becoming essential for personal and business cybersecurity.",
    readTime: "7 min read",
    category: "Security Strategy",
    icon: <Lock size={24} />
  },
  {
    title: "Mobile Security in the 5G Era",
    excerpt: "As 5G networks expand, new security challenges emerge. Here's how to protect your mobile devices in the high-speed future.",
    readTime: "6 min read",
    category: "Mobile Security",
    icon: <Zap size={24} />
  }
];

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">SafeNet Security Intelligence Hub
              </span>
          </h1>
          <p className="hero-subtitle">
            Your gateway to cutting-edge cybersecurity insights, expert analysis, and real-world protection strategies. 
            Stay informed, stay protected, stay ahead of digital threats.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <ShieldCheck size={32} className="stat-icon" />
              <div>
                <span className="stat-number">50M+</span>
                <span className="stat-label">Threats Blocked</span>
              </div>
            </div>
            <div className="stat-item">
              <Globe size={32} className="stat-icon" />
              <div>
                <span className="stat-number">180+</span>
                <span className="stat-label">Countries Protected</span>
              </div>
            </div>
            <div className="stat-item">
              <Brain size={32} className="stat-icon" />
              <div>
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Detection Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">
          <Quote size={32} className="title-icon" />
          Real Stories from Real Users
        </h2>
        <p className="section-subtitle">
          Join thousands of satisfied customers who trust SafeNet to protect their digital lives
        </p>
        
        <div className="testimonials-container">
          <div className="testimonials-track">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-title">{testimonial.title}</p>
                    <p className="testimonial-location">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-filled" />
                  ))}
                </div>
                
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                
                <div className="testimonial-footer">
                  <span className="verified-badge">✓ Verified Customer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="featured-posts">
        <h2 className="section-title">Latest Security Insights</h2>
        <div className="posts-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="post-card">
              <div className="post-icon">
                {post.icon}
              </div>
              <div className="post-content">
                <span className="post-category">{post.category}</span>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <span className="read-time">{post.readTime}</span>
                  <button className="read-more">Read More →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Categories */}
      <section className="content-categories">
        <h2 className="section-title">Explore Our Content</h2>
        <div className="categories-grid">
          <div className="category-card">
            <ShieldCheck size={48} className="category-icon" />
            <h3>Cyber Hygiene 101</h3>
            <p>Essential practices for safe browsing, secure passwords, and digital wellness in everyday life.</p>
            <ul className="category-topics">
              <li>Password Security Best Practices</li>
              <li>Safe Browsing Techniques</li>
              <li>Email Security Guidelines</li>
              <li>Social Media Privacy Settings</li>
            </ul>
          </div>
          
          <div className="category-card">
            <AlertTriangle size={48} className="category-icon" />
            <h3>Threat Intelligence</h3>
            <p>Stay updated on the latest malware, ransomware, and emerging cyber threats targeting users worldwide.</p>
            <ul className="category-topics">
              <li>Monthly Threat Reports</li>
              <li>Malware Analysis Deep Dives</li>
              <li>Phishing Attack Breakdowns</li>
              <li>Ransomware Prevention</li>
            </ul>
          </div>
          
          <div className="category-card">
            <Smartphone size={48} className="category-icon" />
            <h3>Mobile Security</h3>
            <p>Comprehensive guides for securing your Android and iPhone devices in an increasingly mobile world.</p>
            <ul className="category-topics">
              <li>App Permission Management</li>
              <li>Mobile Banking Security</li>
              <li>Public WiFi Safety</li>
              <li>Device Encryption Setup</li>
            </ul>
          </div>
          
          <div className="category-card">
            <Cloud size={48} className="category-icon" />
            <h3>Cloud & IoT Security</h3>
            <p>Protect your data in cloud services and secure your smart home devices from cyber threats.</p>
            <ul className="category-topics">
              <li>Cloud Storage Security</li>
              <li>Smart Home Device Protection</li>
              <li>IoT Network Segmentation</li>
              <li>Data Privacy in the Cloud</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta">
        <div className="cta-content">
          <h2>Ready to Secure Your Digital Life?</h2>
          <p>Join millions of users who trust SafeNet for comprehensive cybersecurity protection.</p>
          <button className="cta-button">
            Get Protected Now <ShieldCheck size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;