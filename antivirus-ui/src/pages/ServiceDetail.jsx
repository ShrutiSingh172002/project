import React from 'react';
import { useParams } from 'react-router-dom';
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
    description:
      "Safeguard your Windows PCs from viruses, malware, ransomware, and spyware with real-time scanning, intelligent firewall defense, and secure web browsing. Optimized to provide complete protection without compromising performance.",
    price: "$12/year",
    image: windowsImg,
  },
  2: {
    title: "Mac Antivirus",
    description:
      "Advanced protection tailored for macOS. Defend against the latest threats including malware, phishing, and spyware with cutting-edge threat detection designed specifically for Mac users.",
    price: "$14/year",
    image: macImg,
  },
  3: {
    title: "Android Security",
    description:
      "Protect your Android devices from mobile-specific threats like malicious apps, adware, and unsafe downloads. Includes real-time scanning and privacy protection to keep your data safe on the go.",
    price: "$8/year",
    image: androidImg,
  },
  4: {
    title: "iOS Protection",
    description:
      "Enjoy secure browsing and online privacy for your iPhone or iPad. Block phishing sites, safeguard sensitive information, and browse with confidence using dedicated iOS security tools.",
    price: "$10/year",
    image: iosImg,
  },
  5: {
    title: "Enterprise Security",
    description:
      "Enterprise-grade cybersecurity designed for businesses of all sizes. Get multi-layered threat defense, endpoint protection, and centralized security management for complete control over your digital infrastructure.",
    price: "$60/year",
    image: enterpriseImg,
  },
  6: {
    title: "Web Protection",
    description:
      "Browse the internet with confidence by blocking malicious websites, phishing links, and deceptive downloads. Our web protection keeps your online experience safe without interrupting your workflow.",
    price: "$6/year",
    image: webImg,
  },
  7: {
    title: "Firewall & VPN",
    description:
      "Enjoy complete online privacy and anonymity with our powerful firewall combined with secure VPN access. Encrypt your internet traffic and safely access geo-restricted content anywhere in the world.",
    price: "$18/year",
    image: vpnImg,
  },
  8: {
    title: "Email Protection",
    description:
      "Defend your inbox from phishing attacks, malware-laden attachments, and spam. Our intelligent email security system scans incoming emails in real-time to keep your communication secure.",
    price: "$7/year",
    image: emailImg,
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) return <div>Service not found.</div>;

  return (
    <div className="service-detail">
      <h2 className="heading-blue">{service.title}</h2>
      <img src={service.image} alt={service.title} className="service-image" />
      <p className="text-black">{service.description}</p>
      <p className="highlight-yellow">Pricing: {service.price}</p>
    </div>
  );
};

export default ServiceDetail;
