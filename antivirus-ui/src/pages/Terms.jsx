import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Terms = () => {
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://safenetcare.online/terms" />
      </Helmet>
      <div className="info-section">
        <h1>SafeNet Terms & Conditions</h1>
        <h2>Terms & Conditions</h2>
        <p>
          By using SafeNet services, you agree to comply with our terms. You are responsible for using our antivirus tools in a lawful and non-abusive manner.
        </p>
        <p>
          All software licenses are non-transferable and must not be tampered with or distributed illegally. We reserve the right to suspend accounts that violate these terms.
        </p>
      </div>
      <div style={{marginTop:'2rem', textAlign:'center'}}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/privacy">Privacy</Link>
      </div>
    </div>
  );
};

export default Terms;
