import React, { useEffect, useMemo, useState } from 'react'
import './BookAppointment.css'

const SERVICES = [
  { id: 'haircut', label: 'Haircut', durationMin: 30, price: 15 },
  { id: 'color', label: 'Hair Color', durationMin: 90, price: 60 },
  { id: 'styling', label: 'Styling', durationMin: 45, price: 30 },
  { id: 'beard', label: 'Beard Trim', durationMin: 20, price: 10 },
]

function generateTimeSlots(dateStr) {
  if (!dateStr) return []
  const slots = []
  const startHour = 9
  const endHour = 18
  for (let h = startHour; h < endHour; h++) {
    slots.push(`${String(h).padStart(2, '0')}:00`)
    slots.push(`${String(h).padStart(2, '0')}:30`)
  }

  // if date is today, filter out past times
  const today = new Date()
  const selected = new Date(dateStr + 'T00:00')
  if (
    selected.getFullYear() === today.getFullYear() &&
    selected.getMonth() === today.getMonth() &&
    selected.getDate() === today.getDate()
  ) {
    const nowH = today.getHours()
    const nowM = today.getMinutes()
    return slots.filter((t) => {
      const [hh, mm] = t.split(':').map(Number)
      if (hh < nowH) return false
      if (hh === nowH && mm <= nowM) return false
      return true
    })
  }

  return slots
}

function BookAppointment() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICES[0].id,
    date: '',
    time: '',
    notes: '',
  })
  const [slots, setSlots] = useState([])
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    setSlots(generateTimeSlots(form.date))
    // clear time if not available
    if (form.time && !generateTimeSlots(form.date).includes(form.time)) {
      setForm((f) => ({ ...f, time: '' }))
    }
  }, [form.date])

  const selectedService = useMemo(() => SERVICES.find((s) => s.id === form.service), [form.service])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return 'Please enter a valid email.'
    if (!form.date) return 'Please select a date.'
    if (!form.time) return 'Please select a time slot.'
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validate()
    if (err) return alert(err)
    setShowConfirm(true)
  }

  const confirmBooking = async () => {
    setLoading(true)
    // MOCK: simulate API call
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setShowConfirm(false)
    setSuccess({ ...form, serviceLabel: selectedService.label })
    setForm({ name: '', email: '', phone: '', service: SERVICES[0].id, date: '', time: '', notes: '' })
  }

  return (
    <div className="book-appointment-page">
      <div className="container two-col">
        <div className="left">
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
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>{s.label} — {s.durationMin}min</option>
                ))}
              </select>
            </label>

            <div className="row">
              <label>
                Date
                <input name="date" type="date" value={form.date} onChange={handleChange} required />
              </label>

              <label>
                Time
                <select name="time" value={form.time} onChange={handleChange} required>
                  <option value="">Select a time</option>
                  {slots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </label>
            </div>

            <label>
              Notes
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} />
            </label>

            <button className="submit-btn" type="submit">Request Appointment</button>
          </form>
        </div>

        <aside className="right">
          <div className="panel">
            <h3>Selected Service</h3>
            <p className="service-name">{selectedService.label}</p>
            <p className="service-meta">Duration: {selectedService.durationMin} min • From ${selectedService.price}</p>
            <hr />
            <h4>How booking works</h4>
            <ol>
              <li>Choose service, date and time.</li>
              <li>We confirm availability and send a confirmation email.</li>
              <li>Arrive 5-10 minutes early.</li>
            </ol>
            <hr />
            <h4>Need help?</h4>
            <p>Email support@salon.example or call +1 234 567 890</p>
          </div>
        </aside>
      </div>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirm Appointment</h3>
            <p><strong>{form.name}</strong> — {SERVICES.find(s => s.id === form.service).label}</p>
            <p>{form.date} at {form.time}</p>
            <div className="modal-actions">
              <button className="btn cancel" onClick={() => setShowConfirm(false)} disabled={loading}>Cancel</button>
              <button className="btn confirm" onClick={confirmBooking} disabled={loading}>{loading ? 'Booking...' : 'Confirm'}</button>
            </div>
          </div>
        </div>
      )}

      {success && (
        <div className="toast success">
          Appointment confirmed for {success.name} — {success.serviceLabel} on {success.date} at {success.time}
        </div>
      )}
    </div>
  )
}

export default BookAppointment
