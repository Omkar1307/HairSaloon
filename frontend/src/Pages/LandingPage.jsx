import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <main className="landing-hero">
      <div className="hero-content">
        <h1 className="hero-title">Transform Your Look Today</h1>
        <p className="hero-sub">Professional stylists · Personalized cuts · Walk-ins & appointments</p>

        <div className="hero-ctas">
          <button className="btn btn-primary" onClick={() => navigate('/book-appointment')}>Book Now</button>
          <button className="btn btn-secondary" onClick={() => navigate('/Service')}>Explore Services</button>
        </div>

        <div className="hero-trust">
          <span className="trust-item">
            <span className="trust-icon">✓</span>
            <span>Trusted by hundreds — <strong>4.8★</strong></span>
          </span>
          <span className="trust-item">
            <span className="trust-icon">⏱</span>
            <span><strong>Quick bookings</strong> in seconds</span>
          </span>
        </div>
      </div>

      <div className="hero-features">
        <div className="feature-card">
          <div className="feature-icon">✂️</div>
          <h3>Expert Stylists</h3>
          <p>Certified professionals with 10+ years experience</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⭐</div>
          <h3>Premium Service</h3>
          <p>Top-rated salon with personalized care</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Fast & Easy</h3>
          <p>Book online anytime, flexible scheduling</p>
        </div>
      </div>
    </main>
  )
}

export default LandingPage
