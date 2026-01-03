import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import BookingForm from './BookingForm'

function Home(){
  const [showBooking, setShowBooking] = useState(false)

  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Luxe Hair Salon</h1>
          <p className="lead">Professional styling, modern cuts, and personalized care — because your hair deserves the best.</p>
          <div className="hero-cta">
            <Link to="/Service" className="btn primary">Explore Services</Link>
            <button className="btn outline" onClick={() => setShowBooking(true)}>Book Appointment</button>
          </div>
        </div>
        <div className="hero-image" aria-hidden="true" />
      </header>

      <section className="features">
        <h2>Why choose us</h2>
        <div className="cards">
          <article className="card">
            <h3>Expert Stylists</h3>
            <p>Our certified stylists stay on top of trends to create looks that fit your lifestyle.</p>
          </article>
          <article className="card">
            <h3>Premium Products</h3>
            <p>We use salon-grade products that protect and nourish your hair.</p>
          </article>
          <article className="card">
            <h3>Relaxing Experience</h3>
            <p>Enjoy a calm, welcoming environment with attention to every detail.</p>
          </article>
        </div>
      </section>

      <section className="how-to-book">
        <h2>How to Book Salon Online</h2>
        <div className="steps-grid">
          <div className="step-box">
            <div className="step-number">1</div>
            <h3>Search Salons</h3>
            <p>Find beauty salons near you offering hair, skin, and beauty services you need.</p>
          </div>
          <div className="step-box">
            <div className="step-number">2</div>
            <h3>Choose Service</h3>
            <p>Choose your preferred salon, services like haircut, facial, or massage, and convenient time slot.</p>
          </div>
          <div className="step-box">
            <div className="step-number">3</div>
            <h3>Select Time Slot</h3>
            <p>Select your preferred time slot, arrive at the salon, and enjoy your beauty treatment with ease.</p>
          </div>
          <div className="step-box">
            <div className="step-number">4</div>
            <h3>Confirm Booking</h3>
            <p>Book your appointment and get instant confirmation with all details.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What clients say</h2>
        <div className="test-cards">
          <blockquote className="test">
            "Fantastic cut and color — I always leave feeling refreshed." <cite>— Priya</cite>
          </blockquote>
          <blockquote className="test">
            "Friendly team and relaxing atmosphere. Highly recommend." <cite>— Daniel</cite>
          </blockquote>
        </div>
      </section>

      <section className="specials">
        <h2>Popular Services</h2>
        <ul>
          <li>Precision Haircut & Styling</li>
          <li>Color & Highlights</li>
          <li>Treatments & Scalp Care</li>
        </ul>
        <Link to="/Service" className="btn secondary">See All Services</Link>
      </section>

      {showBooking && <BookingForm onClose={() => setShowBooking(false)} />}
    </div>
  )
}

export default Home
