import { useState, useEffect } from "react";
import "./Register.css";
import { Link, useLocation } from "react-router-dom";
import {
  MdEmail,
  MdLock,
  MdPerson,
  MdPhone,
  MdOutlineManageAccounts,
  MdVerified
} from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

function Register() {
  const location = useLocation();
  const verifiedEmail = location.state?.email || "";

  const [showOtp, setShowOtp] = useState(false);
   const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: verifiedEmail,
    mobile: "",
    userType: "customer",
    password: "",
    confirmPassword: "",
    otp: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:8081/api/register", formData);
      alert("Registration successful");
      window.location.href = "/login";
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <p>Create your account</p>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="input-group">
          <MdPerson className="input-icon" />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email (Disabled) */}
        <div className="input-group">
          <MdEmail className="input-icon" />
          <input
            type="email"
            name="email"
            value={formData.email}
            disabled
          />
        </div>

        {/* Mobile */}
        <div className="input-group">
          <MdPhone className="input-icon" />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        {/* User Type */}
        <div className="user-type-row">
          <div className="user-type-left">
            <MdOutlineManageAccounts className="user-type-icon" />
            <label>User Type</label>
          </div>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="customer">Customer</option>
            <option value="shopOwner">Shop Owner</option>
          </select>
        </div>

        {/* Password */}
        <div className="input-group">
          <MdLock className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="input-group">
          <MdLock className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <span
            className="eye-icon"
            onClick={() => setShowCPassword(!showCPassword)}
          >
            {showCPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* OTP */}
        <div className="input-group">
          <MdVerified className="input-icon" />
          <input
            type={showOtp ? "text" : "password"}
            name="otp"
            placeholder="Enter OTP"
            value={formData.otp}
            onChange={handleChange}
            required
          />
          <span
            className="eye-icon"
            onClick={() => setShowOtp(!showOtp)}
          >
            {showOtp ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button className="register-btn">Register</button>
      </form>

      <div className="login-text">
        Already have an account?
        <Link to="/login" className="login-link"> Login</Link>
      </div>
    </div>
  );
}

export default Register;
