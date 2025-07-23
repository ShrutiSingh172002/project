import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetail.css';

import windowsImg from '../assets/windows_antivirus.jpeg';
import macImg from '../assets/mac_antivirus.jpg';
import androidImg from '../assets/android_security.jpeg';
import iosImg from '../assets/ios_protection.jpg';
import enterpriseImg from '../assets/enterprise_security.jpeg';
import webImg from '../assets/web_protection.png';
import vpnImg from '../assets/vpn_firewall.jpg';
import emailImg from '../assets/email_protection.jpg';

const serviceDetails = {
  1: {
    title: "Windows Antivirus",
    description: "Secure your enterprise with industry-leading protection...",
    extraContent: [
      "Our Windows Antivirus delivers unmatched security for individuals and businesses.",
      "It proactively monitors file behavior and quarantines threats before they can do harm.",
      "With automatic updates, you're always protected against the latest threats without lifting a finger.",
      "It includes heuristic scanning, ransomware rollback technology, firewall management, and cloud-based threat detection.",
      "Designed to consume minimal system resources, it operates silently while guarding against malware, spyware, trojans, and rootkits.",
      "Ideal for gamers, developers, and general users alike, it's the ultimate shield for Windows PCs."
    ],
    features: [
      "AI-powered threat detection",
      "Zero-day attack protection",
      "Seamless integration with enterprise systems",
      "Centralized control with detailed threat reports",
      "24/7 Priority Support with SLA Guarantee"
    ],
    pricing: "$9/year",
    contact: { phone: "+1(833)860-0046", email: "info@safenetcare.online" },
    image: windowsImg,
  },
  2: {
    title: "Mac Antivirus",
    description: "Advanced protection tailored for macOS...",
    extraContent: [
      "Built exclusively for macOS, our antivirus goes beyond traditional scanning.",
      "It detects emerging threats, protects sensitive data, and ensures a smooth performance that feels invisible.",
      "Whether you're a creative professional or casual user, enjoy peace of mind every time you power on.",
      "Our Mac Antivirus combines smart threat detection with performance optimization to ensure your macOS stays fast and safe.",
      "It includes browser security, adware removal, email phishing protection, and disk clean-up tools.",
      "It also keeps you informed with real-time notifications while automatically handling threats.",
      "Designed for professionals, students, and families who depend on the reliability and safety of their Apple devices."
    ],
    features: [
      "Advanced macOS threat detection",
      "Privacy and phishing protection",
      "Lightweight, seamless performance",
      "Real-time scanning for zero interruptions",
      "Expert macOS security support"
    ],
    pricing: "$14/year",
    contact: { phone: "+1(833)860-0046", email: "info@safenetcare.online" },
    image: macImg,
  },
  3: {
    title: "Android Security",
    description: "Protect your Android devices from mobile threats...",
    extraContent: [
      "With more mobile threats than ever, our Android Security offers full-spectrum defense.",
      "From banking malware to spy apps, it identifies and neutralizes threats instantly.",
      "Parental controls and privacy scanning give families an extra layer of comfort.",
      "Your phone holds more personal data than ever.",
      "Our Android Security suite features SMS filtering, app risk ratings, anti-theft tools (remote lock and locate), and performance boosters.",
      "From blocking fake banking apps to scanning public Wi-Fi connections, it's built to defend against every kind of mobile threat.",
      "Receive weekly reports, security suggestions, and privacy insights tailored to your app usage and online habits."
    ],
    features: [
      "Real-time malicious app detection",
      "Adware and unsafe link blocking",
      "App permissions monitoring",
      "Mobile anti-phishing for safe browsing",
      "Privacy guard to secure sensitive data"
    ],
    pricing: "$8/year",
    contact: { phone: "+1(833)860-0046", email: "info@safenetcare.online" },
    image: androidImg,
  },
  4: {
    title: "iOS Protection",
    description: "Enjoy secure browsing and online privacy for your iPhone or iPad...",
    extraContent: [
      "Our iOS Protection keeps your Apple device safe from phishing scams, identity theft, and malicious trackers.",
      "Designed for minimal battery impact and maximum privacy, it works seamlessly in the background to keep your data safe wherever you go.",
      "Our iOS Protection offers proactive defense, detecting fake websites, suspicious QR codes, and app tracking attempts.",
      "The built-in secure browser ensures encrypted browsing, while VPN-lite features keep your IP anonymous.",
      "The software respects iOS architecture, ensuring low battery usage and fast performance.",
      "Whether you're handling online payments or private emails, it ensures safe communication and browsing on the go."
    ],
    features: [
      "Phishing website blocker",
      "Identity & data protection tools",
      "Lightweight, battery-optimized security",
      "Instant threat alerts",
      "iOS-dedicated customer support"
    ],
    pricing: "$10/year",
    contact: { phone: "+1(833)860-0046", email: "info@safenetcare.online" },
    image: iosImg,
  },
  5: {
    title: "Enterprise Security",
    description: "Enterprise-grade cybersecurity designed for businesses...",
    extraContent: [
      "Empower your organization with scalable security tailored for modern infrastructures.",
      "From startups to large enterprises, our solution adapts to your network and provides real-time threat analytics.",
      "Get compliance-ready and boost your IT team's efficiency with our centralized dashboard.",
      "Security is critical for today's remote-first, cloud-integrated enterprises.",
      "Our platform offers endpoint detection and response (EDR), role-based access control, and patch management tools to protect every device in your infrastructure.",
      "Real-time dashboards allow IT admins to monitor risk levels and apply actions immediately.",
      "With GDPR, HIPAA, and ISO compliance support built-in, our solution helps reduce risk and improve security posture effortlessly."
    ],
    features: [
      "Advanced AI-driven threat intelligence",
      "Endpoint and server protection",
      "Detailed compliance & security reports",
      "Easy deployment across the organization",
      "24/7 Enterprise SLA Support & Dedicated Managers"
    ],
    pricing: "Custom Packages | Dedicated IT Support",
    contact: { phone: "+1(833)860-0046", email: "info@safenetcare.online" },
    image: enterpriseImg,
  },
  6: {
    title: "Web Protection",
    description: "Browse the internet with confidence by blocking malicious websites...",
    extraContent: [
      "Our Web Protection stops threats before they load.",
      "Whether you're shopping, banking, or casually browsing, our filter blocks harmful content and phishing attempts.",
      "Enjoy a faster, cleaner, and safer web experience without annoying pop-ups or slowdowns.",
      "Web threats are often silent and unexpected.",
      "Our Web Protection module prevents drive-by downloads, monitors click behavior, and blocks redirects to fake payment gateways.",
      "It also supports parental controls, website category filtering, and real-time DNS-level protection.",
      "Perfect for homes, schools, and small businesses looking to keep browsing safe for all users.",
      "Includes detailed browsing logs and malicious URL reporting."
    ],
    features: [
      "AI-powered malicious site blocking",
      "Phishing protection in real-time",
      "Protection for online transactions & data",
      "Works silently without slowing down browsing",
      "Compatible with all major browsers"
    ],
    pricing: "$6/year",
    contact: { phone: "+1(833)860-0046", email: "info@safenetcare.online" },
    image: webImg,
  },
  7: {
    title: "Firewall & VPN",
    description: "Enjoy complete online privacy and anonymity...",
    extraContent: [
      "Safeguard your digital identity with our powerful VPN and firewall combo.",
      "Whether you're at home or on public Wi-Fi, your data stays encrypted and out of reach.",
      "Stream securely, bypass geo-blocks, and experience true internet freedom with our global servers.",
      "This hybrid security solution is essential for any privacy-conscious user.",
      "The firewall defends against port scanning, brute force attempts, and suspicious outbound traffic.",
      "The VPN offers smart tunneling (split VPN), kill-switch features, and no-log policies.",
      "Switch to secure locations with a click and access streaming or work platforms from any region.",
      "It's great for frequent travelers, journalists, and anyone handling sensitive data daily."
    ],
    features: [
      "Military-grade encryption",
      "High-speed, unlimited VPN bandwidth",
      "Protection against hackers & surveillance",
      "Secure access to geo-blocked content",
      "VPN Servers in 40+ Countries"
    ],
    pricing: "$18/year",
    contact: { phone: "+1(833)860-0046", email: "info@safenetcare.online" },
    image: vpnImg,
  },
  8: {
    title: "Email Protection",
    description: "Protect your inbox from phishing attacks, malware-laden attachments, and spam.",
    extraContent: [
      "Email is the #1 vector for cyberattacks.",
      "Our solution ensures your inbox is guarded with intelligent filters that catch spam, viruses, and phishing scams before they reach you.",
      "Stay productive and secure with minimal false positives and maximum efficiency.",
      "Emails remain the number one delivery channel for ransomware.",
      "Our advanced protection inspects embedded scripts, detects spoofed senders, and quarantines harmful attachments before they reach your inbox.",
      "Integration with popular services like Gmail, Outlook, and Microsoft 365 ensures seamless protection.",
      "Administrators can access mail flow reports, threat trends, and automatic quarantine release policies to stay ahead of evolving email-based threats."
    ],
    features: [
      "Spam, malware & phishing protection",
      "Real-time attachment scanning",
      "Safeguard personal and business accounts",
      "Intelligent filters for better inbox organization",
      "Protects against Business Email Compromise (BEC)"
    ],
    pricing: "$7/year",
    contact: { phone: "+1(833)860-0046", email: "info@safenetcare.online" },
    image: emailImg,
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[parseInt(id)];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return <div className="service-detail not-found">Service not found.</div>;

  return (
    <div className="service-detail">
      <h2 className="heading-blue">{service.title}</h2>
      <img src={service.image} alt={service.title} className="service-image" style={{display: 'block', margin: '0 auto'}} />
      <p className="description" style={{fontWeight: 'bold'}}>{service.description}</p>
      
      {service.extraContent && (
        <ul className="content-list" style={{textAlign: 'left', listStylePosition: 'inside', margin: '10px 0', paddingLeft: '0'}}>
          {service.extraContent.map((point, index) => (
            <li key={index} style={{marginBottom: '5px'}}>{point}</li>
          ))}
        </ul>
      )}

      <h3 className="features-heading" style={{textAlign: 'left', margin: '15px 0 5px 0'}}>Key Features</h3>
      <ul className="feature-list" style={{textAlign: 'left', listStylePosition: 'inside', margin: '10px 0', paddingLeft: '0'}}>
        {service.features.map((feature, index) => (
          <li key={index} style={{marginBottom: '5px'}}>{feature}</li>
        ))}
      </ul>

      <div className="price-purchase">
        <span className="pricing-tag">{service.pricing}</span>
        <Link to="/contact">
          <button className="purchase-btn">Contact Us</button>
        </Link>
      </div>

      <div className="contact-info" style={{textAlign: 'center'}}>
        <p>{service.contact.phone}</p>
        <p>{service.contact.email}</p>
      </div>

      <div className="other-services" style={{textAlign: 'center'}}>
        <h3>Other Services</h3>
        <ul style={{listStyle: 'none', padding: '0'}}>
          {Object.entries(serviceDetails)
            .filter(([key]) => key !== id)
            .map(([key, s]) => (
              <li key={key} style={{marginBottom: '5px'}}>
                <Link to={`/services/${key}`}>{s.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetail;