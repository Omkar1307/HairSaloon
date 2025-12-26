import React from "react";
import "./Service.css";

function Service() {
  return (
    <div className="service-container">
      <h1 className="service-title">Our Services</h1>
      <p className="service-subtitle">
        A smart platform connecting customers with trusted salon professionals
      </p>

      <div className="service-sections">
        {/* Customer Services */}
        <div className="service-card">
          <h2>For Customers</h2>
          <ul>
            <li>Browse nearby salons & professionals</li>
            <li>Book appointments instantly</li>
            <li>Choose services, time slots & stylists</li>
            <li>Secure online payments</li>
            <li>Track booking status in real-time</li>
            <li>Rate & review salons</li>
          </ul>
        </div>

        {/* Salon Owner Services */}
        <div className="service-card">
          <h2>For Salon Owners</h2>
          <ul>
            <li>Register your salon easily</li>
            <li>Manage services, prices & availability</li>
            <li>Accept & manage bookings</li>
            <li>Customer management dashboard</li>
            <li>Increase visibility & reach new customers</li>
            <li>Track earnings & booking history</li>
          </ul>
        </div>
      </div>

      {/* Common Features */}
      <div className="service-common">
        <h2>Platform Features</h2>
        <div className="common-features">
          <div className="feature-box">24/7 Booking</div>
          <div className="feature-box">Verified Salons</div>
          <div className="feature-box">Secure Payments</div>
          <div className="feature-box">Easy Cancellations</div>
          <div className="feature-box">Mobile Friendly</div>
          <div className="feature-box">User-Friendly Dashboard</div>
        </div>
      </div>
    </div>
  );
}

export default Service;
