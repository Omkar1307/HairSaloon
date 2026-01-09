import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()
  const phone = '+1234567890' // update to your business number

  return (
    <main className="landing-hero">
      <div className="hero-content">
        <h1 className="hero-title">Transform Your Look Today</h1>
        <p className="hero-sub">Professional stylists · Personalized cuts · Walk-ins & appointments</p>

        <div className="hero-ctas">
          <button className="btn btn-primary" onClick={() => navigate('/book-appointment')}>Book Now</button>
        </div>

        <div className="hero-trust">Trusted by hundreds — <strong>4.8★</strong></div>
      </div>

      <div className="hero-image" aria-hidden="true" />
    </main>
  )
}

export default LandingPage
