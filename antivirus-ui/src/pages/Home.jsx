import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Monitor,
  Smartphone,
  Apple,
  Building,
  Globe,
  Lock,
  Mail
} from 'lucide-react';
import './Home.css';

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

  const handleServiceClick = (id) => {
    navigate(`/services/${id}`);
  };

  return (
    <div className="home-page">
      {/* Main H1 for SEO */}
      <h1 style={{display:'none'}}>Comprehensive Antivirus Protection for All Devices</h1>
      {/* Hero Section */}
      <section className="hero">
        {/* Visible H1 for users */}
        <h1 className="heading-blue">Total Protection for Every Device</h1>
        <p className="text-black">Explore a wide range of antivirus solutions to secure your digital life. Our antivirus software provides real-time protection, fast and lightweight scanning, and 24/7 customer support. Whether you use Windows, Mac, Android, or iOS, we have a solution tailored for you. Stay safe from malware, ransomware, phishing, and other online threats with our trusted security products. Join thousands of satisfied customers who rely on us for their digital safety. Your security is our priority, and we are committed to keeping your data and devices safe at all times.</p>
        {/* Internal links for SEO */}
        <div style={{marginTop:'1rem'}}>
          <Link to="/about">About Us</Link> | <Link to="/services/1">Windows Antivirus</Link> | <Link to="/contact">Contact</Link>
        </div>
      </section>

      {/* Antivirus Categories */}
      <section className="categories">
        <h2 className="heading-blue">Our Antivirus Solutions</h2>
        <p className="text-black">We offer protection for all your needs.</p>
        <div className="grid">
          {services.map((service) => (
            <div key={service.id} className="card" onClick={() => handleServiceClick(service.id)}>
              <div className="icon">{service.icon}</div>
              <div className="text">{service.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <h2 className="heading-blue">Why Choose SafeNet?</h2>

        <div className="why-choose-content">
          {/* Left Image */}
          <div className="antivirus-images">
            <img src="/images/antivirus_image4.jpg" alt="Left Antivirus" />
            
                  
          </div>

          {/* Center Text */}
          <ul>
            <li>✔ Real-time protection</li>
            <li>✔ Fast and lightweight scanning</li>
            <li>✔ 24/7 customer support</li>
            <li>✔ Easy to use and install</li>
          </ul>

          {/* Right Image */}
          <div className="antivirus-images">
            <img src="/images/antivirus_image5.jpg" alt="Right Antivirus" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2 className="heading-blue">Ready to protect your device?</h2>
        <p className="text-black">Get in touch with us and choose the best antivirus plan for you.</p>
        <a href="/contact" className="highlight-button no-border">Contact Us</a>
      </section>

    </div>
  );
};

export default Home;
