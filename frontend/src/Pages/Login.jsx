import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { MdEmail, MdLock } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("email");
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔐 LOGIN API
  const handleLogin = async () => {
    setError("");

    if (
      !password ||
      (loginType === "email" && !email) ||
      (loginType === "phone" && !mobile)
    ) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      // For now, just mock the login without token dependency
      // TODO: Replace with actual backend call when API is ready
      await new Promise((r) => setTimeout(r, 800)); // Simulate API delay

      // Store a dummy token/flag to mark user as logged in
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", loginType === "email" ? email : mobile);

      // Notify navbar that user is logged in
      window.dispatchEvent(new Event("authChanged"));

      setTimeout(() => {
        navigate("/landing");
      }, 150);
    } catch (err) {
      console.error("Login Error:", err);
      setError("Login failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <h4>Please enter your details</h4>

      {/* Toggle */}
      <div className="login-toggle">
        <button
          className={loginType === "email" ? "active" : ""}
          onClick={() => setLoginType("email")}
        >
          <MdEmail /> Email
        </button>

        <button
          className={loginType === "phone" ? "active" : ""}
          onClick={() => setLoginType("phone")}
        >
          <FaPhoneAlt /> Phone
        </button>
      </div>

      {/* Email / Phone Input */}
      {loginType === "email" ? (
        <div className="input-group">
          <MdEmail className="input-icon" />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      ) : (
        <div className="input-group">
          <FaPhoneAlt className="input-icon" />
          <input
            type="tel"
            placeholder="Enter Phone Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
      )}

      {/* Password */}
      <div className="input-group">
        <MdLock className="input-icon" />
        <input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      {error && <p className="error-text">{error}</p>}

      <button className="login-btn" onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}

export default Login;
