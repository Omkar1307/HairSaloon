import React from "react";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <h1>Contact SalonHub - Customer Support & Salon Booking Help</h1>
        <p>
          <b>SalonHub</b>- India’s leading online salon booking platform.  
          We’re here to help customers and salon partners 24/7.
        </p>
      </div>

      {/* Info Section */}
    
        <div className="info-box">
          <h3>Customer Support</h3>
          <p>
            Need help with bookings, payments, or services?  
            Our support team is always available.
          </p>
          <p className="highlight">support@salonhub.com</p>
        </div>
    

      {/* Contact Form */}
      <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1>Get in Touch with SalonHub</h1>
        <p>
          We're here to help with all your salon booking needs and beauty service
          inquiries across India.
        </p>
      </div>

      {/* Joined Card */}
      <div className="contact-card">
        
        {/* Left Section */}
        <div className="contact-left">
          <h3>Email Support</h3>
          <p className="bold">salonhub.business@gmail.com</p>
          <p>For salon bookings, customer support, and general inquiries</p>

          <h3>Phone Support</h3>
          <p className="bold">+91-8810269376</p>
          <p>Available for urgent salon booking assistance</p>

          <h3>Support Hours</h3>
          <p>Monday – Sunday: 24/7 Online Support</p>
          <p>Email Response: Within 2–4 hours</p>
        </div>

        {/* Right Section */}
        <div className="contact-right">
          <h2>Send us a Message</h2>
          <p className="form-subtitle">
            Have questions about salon bookings, beauty services, or need
            technical support? Fill out the form below and our team will get back
            to you promptly.
          </p>

          <form>
            <label>Your Full Name *</label>
            <input type="text" placeholder="Enter your full name" />

            <label>Email Address *</label>
            <input type="email" placeholder="your.email@example.com" />

            <label>How Can We Help You? *</label>
            <textarea
              rows="4"
              placeholder="Please describe your inquiry about salon bookings, beauty services, technical issues, or partnership opportunities..."
            ></textarea>

            <p className="response-time">
              Typical response time: 2–4 hours for salon booking inquiries
            </p>

            <button type="submit">Send Message to SalonHub Support</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contacts;
