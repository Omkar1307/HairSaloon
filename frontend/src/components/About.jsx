import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Hair Salon Booking Platform</h1>
        <p>
          Connecting Customers with Trusted Salons 💇‍♀️✨
        </p>
      </div>

      <div className="about-content">

        <section className="about-section">
          <h2>What We Do</h2>
          <p>
            Our Hair Salon Booking Platform is a modern solution designed to
            connect customers with nearby salons and professional stylists.
            We make salon discovery, appointment booking, and service management
            simple, fast, and reliable.
          </p>
        </section>

        <section className="about-section">
          <h2>For Customers</h2>
          <ul>
            <li>🔍 Discover nearby salons</li>
            <li>📅 Book appointments anytime, anywhere</li>
            <li>💳 Easy and secure booking experience</li>
            <li>⭐ View ratings, reviews, and services</li>
            <li>⏰ Real-time availability</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>For Salon Owners</h2>
          <ul>
            <li>🏪 Register and manage your salon</li>
            <li>📆 Manage appointments and schedules</li>
            <li>👥 Grow your customer base</li>
            <li>📊 Track bookings and performance</li>
            <li>📢 Promote your services online</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to simplify the salon booking experience by creating
            a trusted platform that benefits both customers and salon owners.
            We aim to bring convenience, transparency, and growth to the beauty
            and wellness industry.
          </p>
        </section>

        <section className="about-section about-footer">
          <h2>Join the Platform</h2>
          <p>
            Whether you are a customer looking for the perfect salon or a salon
            owner wanting to expand your reach, our platform is built for you.
            Book smart. Grow faster. Shine brighter.
          </p>
        </section>

      </div>
    </div>
  );
}

export default About;
