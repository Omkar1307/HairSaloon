import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Try localStorage first
    const stored = localStorage.getItem("profile");
    if (stored) {
      try {
        const p = JSON.parse(stored);
        setName(p.name || "");
        setEmail(p.email || "");
        setPhone(p.phone || "");
        return;
      } catch (e) {
        // ignore parse error
      }
    }

    // If token exists, try fetching from API (best-effort)
    const token = localStorage.getItem("token");
    if (!token) return;

    (async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8081/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const d = res.data || {};
        setName(d.name || d.fullName || "");
        setEmail(d.email || "");
        setPhone(d.mobile || d.phone || "");
      } catch (err) {
        // ignore — this is optional
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email) {
      setError("Name and email are required");
      return;
    }

    const payload = { name, email, phone };

    const token = localStorage.getItem("token");
    if (token) {
      try {
        setLoading(true);
        // Try to update on server if endpoint exists — best-effort
        await axios.put("http://localhost:8081/api/auth/update", payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSuccess("Profile updated");
      } catch (err) {
        // If server fails, fallback to localStorage
        localStorage.setItem("profile", JSON.stringify(payload));
        setSuccess("Saved locally (server update failed)");
      } finally {
        setLoading(false);
      }
    } else {
      // No token — save to localStorage for demo purposes
      localStorage.setItem("profile", JSON.stringify(payload));
      setSuccess("Profile saved locally");
    }
  };

  const handleBack = () => navigate("/");

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>My Profile</h2>
        <form onSubmit={handleSave} className="profile-form">
          <label>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </label>

          <label>
            Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label>
            Phone
            <input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>

          {error && <div className="profile-error">{error}</div>}
          {success && <div className="profile-success">{success}</div>}

          <div className="profile-actions">
            <button type="button" className="btn secondary" onClick={handleBack}>
              Back
            </button>
            <button type="submit" className="btn primary" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
