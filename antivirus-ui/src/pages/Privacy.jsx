import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://safenetcare.online/privacy" />
      </Helmet>
      <div className="info-section">
        <h1>SafeNet Privacy Policy</h1>
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important to us. SafeNet collects only the necessary information to deliver secure services. We do not share or sell any personal data with third parties without your consent.
        </p>
        <p>
          All information is stored securely, and you may request data deletion or access at any time by contacting our support team.
        </p>
      </div>
      <div style={{marginTop:'2rem', textAlign:'center'}}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/terms">Terms</Link>
      </div>
    </div>
  );
};

export default Privacy;
