import React, { useState } from "react";
import "./EmailVerification.css";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

function EmailVerification() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(value);
    setIsValidEmail(regex.test(value));
  };

  // 🔹 Send OTP
  const handleSendMail = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:8081/api/email/send-otp?email=${email}`,
        { method: "POST" }
      );

      if (res.ok) {
        setOtpSent(true);
        setAlert({ message: "OTP sent successfully", type: "success" });
      } else {
        setAlert({ message: "Failed to send OTP", type: "error" });
      }
    } catch {
      setAlert({ message: "Server error", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Verify OTP
  const handleVerifyOtp = async () => {
    if (!otp) {
      setAlert({ message: "Please enter OTP", type: "error" });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:8081/api/email/verify-otp?email=${email}&otp=${otp}`,
        { method: "POST" }
      );

      if (res.ok) {
        setAlert({ message: "Email verified successfully", type: "success" });

        setTimeout(() => {
          navigate("/register", {
            state: { email, verified: true },
          });
        }, 1200);
      } else {
        setAlert({ message: "Invalid OTP", type: "error" });
      }
    } catch {
      setAlert({ message: "Server error", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-page">
      <h2>Verify Your Email</h2>
      <p>Please verify your email to continue</p>

      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}

      {/* EMAIL INPUT */}
      <div className="email-input-group">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          disabled={otpSent}
          onChange={(e) => validateEmail(e.target.value)}
        />
      </div>

      {/* SEND OTP BUTTON */}
      {!otpSent && (
        <button
          className="email-btn"
          disabled={!isValidEmail || loading}
          onClick={handleSendMail}
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>
      )}

      {/* OTP INPUT + VERIFY BUTTON */}
      {otpSent && (
        <>
          <div className="email-input-group">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          <button
            className="email-btn"
            disabled={loading}
            onClick={handleVerifyOtp}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </>
      )}

      <div className="login-text">
        Already have an account?
        <Link to="/login" className="register-link"> Login</Link>
      </div>
    </div>
  );
}

export default EmailVerification;
