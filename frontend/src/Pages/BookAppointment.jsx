import React, { useState } from 'react'
import './BookAppointment.css'

function BookAppointment() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Haircut',
    date: '',
    time: '',
    notes: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now just show a confirmation. Integrate API call here later.
    alert(`Appointment requested for ${form.name} on ${form.date} at ${form.time}`)
    setForm({ name: '', email: '', phone: '', service: 'Haircut', date: '', time: '', notes: '' })
  }

  return (
    <div className="book-appointment-page">
      <div className="container">
        <h2>Book Appointment</h2>
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
              <option>Haircut</option>
              <option>Hair Color</option>
              <option>Styling</option>
              <option>Beard Trim</option>
            </select>
          </label>

          <div className="row">
            <label>
              Date
              <input name="date" type="date" value={form.date} onChange={handleChange} required />
            </label>

            <label>
              Time
              <input name="time" type="time" value={form.time} onChange={handleChange} required />
            </label>
          </div>

          <label>
            Notes
            <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} />
          </label>

          <button className="submit-btn" type="submit">Request Appointment</button>
        </form>
      </div>
    </div>
  )
}

export default BookAppointment
