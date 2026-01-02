import React, { useState } from 'react'
import './BookingForm.css'

function BookingForm({ onClose }){
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'Haircut', date:'', time:'' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e){
    e.preventDefault()
    setSubmitted(true)
    // Simulate success and close after a moment
    setTimeout(()=>{
      onClose()
    },1300)
  }

  return (
    <div className="booking-modal-overlay" role="dialog" aria-modal="true">
      <div className="booking-modal">
        {!submitted ? (
          <>
            <header className="modal-head">
              <h3>Book an Appointment</h3>
              <button className="close" onClick={onClose} aria-label="Close">×</button>
            </header>
            <form className="booking-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                Email
                <input name="email" type="email" value={form.email} onChange={handleChange} required />
              </label>
              <label>
                Phone
                <input name="phone" value={form.phone} onChange={handleChange} />
              </label>
              <label>
                Service
                <select name="service" value={form.service} onChange={handleChange}>
                  <option>Precision Haircut</option>
                  <option>Color & Highlights</option>
                  <option>Treatment & Scalp Care</option>
                </select>
              </label>
              <div className="row">
                <label>
                  Date
                  <input name="date" type="date" value={form.date} onChange={handleChange} />
                </label>
                <label>
                  Time
                  <input name="time" type="time" value={form.time} onChange={handleChange} />
                </label>
              </div>
              <div className="actions">
                <button type="submit" className="btn primary">Request Booking</button>
                <button type="button" className="btn outline" onClick={onClose}>Cancel</button>
              </div>
            </form>
          </>
        ) : (
          <div className="submitted">
            <h4>Thanks — request sent</h4>
            <p>We'll contact you shortly to confirm your booking.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingForm
