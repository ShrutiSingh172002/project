import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Refund = () => {
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://safenetcare.online/refund" />
      </Helmet>
      <div className="info-section">
        <h1>Refund Policy - SafeNet</h1>
        <h2>Refund Policy</h2>
        <p>
          If you are not satisfied with our services, you can request a refund within 7 days of purchase. We ensure a hassle-free refund process for valid claims.
        </p>
        <p>
          Refunds are applicable only if there is a technical failure or if the product does not function as promised.
        </p>
        <p>
          To request a refund, please contact support@safenet.com with your order ID and reason for the refund.
        </p>
      </div>
      <div style={{marginTop:'2rem', textAlign:'center'}}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/privacy">Privacy</Link>
      </div>
    </div>
  );
};

export default Refund;
