import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";

function Profile() {
  const navigate = useNavigate();
  const [name, setName] = useState("Guest User");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Try to get user email from localStorage after login
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setEmail(userEmail);
      setEditForm((f) => ({ ...f, email: userEmail }));
    }

    // Try localStorage first
    const stored = localStorage.getItem("profile");
    if (stored) {
      try {
        const p = JSON.parse(stored);
        setName(p.name || "Guest User");
        setEmail(p.email || userEmail || "");
        setPhone(p.phone || "");
        setEditForm({ name: p.name || "", email: p.email || userEmail || "", phone: p.phone || "" });
        return;
      } catch (e) {
        // ignore parse error
      }
    }

    // Pre-fill form with current values
    setEditForm({ name, email, phone });
  }, []);

  const handleEdit = () => {
    setEditForm({ name, email, phone });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setError("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((f) => ({ ...f, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!editForm.name || !editForm.email) {
      setError("Name and email are required");
      return;
    }

    try {
      setLoading(true);
      const payload = editForm;
      
      // Save to localStorage
      localStorage.setItem("profile", JSON.stringify(payload));
      
      // Update state
      setName(payload.name);
      setEmail(payload.email);
      setPhone(payload.phone);
      
      setSuccess("Profile updated successfully!");
      setIsEditing(false);
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <FaUser className="avatar-icon" />
          </div>
          <div>
            <h1>{name}</h1>
            <p className="profile-subtitle">{email}</p>
          </div>
          {!isEditing && (
            <button className="btn-edit" onClick={handleEdit}>
              <FaEdit /> Edit Profile
            </button>
          )}
        </div>

        {!isEditing ? (
          <div className="profile-info">
            <div className="info-item">
              <div className="info-icon">
                <FaUser />
              </div>
              <div>
                <p className="info-label">Full Name</p>
                <p className="info-value">{name || "Not set"}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <p className="info-label">Email Address</p>
                <p className="info-value">{email || "Not set"}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div>
                <p className="info-label">Phone Number</p>
                <p className="info-value">{phone || "Not set"}</p>
              </div>
            </div>

            <div className="profile-actions">
              <button className="btn secondary" onClick={() => navigate("/book-appointment")}>
                Book Appointment
              </button>
              <button className="btn secondary" onClick={() => navigate("/")}>
                Back to Home
              </button>
            </div>
          </div>
        ) : (
          <form className="profile-form" onSubmit={handleSave}>
            <label>
              Full Name
              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                value={editForm.email}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                value={editForm.phone}
                onChange={handleInputChange}
              />
            </label>

            {error && <div className="profile-error">{error}</div>}
            {success && <div className="profile-success">{success}</div>}

            <div className="form-actions">
              <button type="button" className="btn secondary" onClick={handleCancel} disabled={loading}>
                Cancel
              </button>
              <button type="submit" className="btn primary" disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Profile;
