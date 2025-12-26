import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About */}
        <div className="footer-section">
          <h2 className="footer-logo">HairSalon Hub</h2>
          <p className="footer-text">
            HairSalon Hub is a modern booking platform that connects customers
            with verified salons and professionals for hassle-free grooming
            services.
          </p>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Haircut & Styling</li>
            <li>Beard & Grooming</li>
            <li>Hair Coloring</li>
            <li>Spa & Massage</li>
            <li>Bridal & Party Makeup</li>
          </ul>
        </div>

        {/* Cities */}
        <div className="footer-section">
          <h3>Service Cities</h3>
          <ul>
            <li>Mumbai</li>
            <li>Bangalore</li>
            <li>Delhi</li>
            <li>Pune</li>
            <li>Hyderabad</li>
          </ul>
        </div>

        {/* Contact & Support */}
        <div className="footer-section">
          <h3>Contact & Support</h3>
          <ul>
            <li>Email: support@hairsalonhub.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Customer Support: 24/7</li>
            <li>Salon Partner Support</li>
          </ul>
        </div>

        {/* Follow */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter (X)</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} HairSalon Hub. All rights reserved.
        </p>
        <p className="footer-policy">
          Privacy Policy • Terms & Conditions
        </p>
      </div>
    </footer>
  );
}

export default Footer;
