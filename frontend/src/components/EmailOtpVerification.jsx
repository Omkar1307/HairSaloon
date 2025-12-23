import React, { useState } from "react";
import "./EmailOtpVerification.css";
import { useNavigate, useLocation } from "react-router-dom";
import Alert from "./Alert";

function EmailOtpVerification({ purpose = "forgot" }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  
  // Get purpose from router state if available, otherwise use prop
  const actualPurpose = location.state?.purpose || purpose;

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
        `http://localhost:8081/api/email/send-otp?email=${email}&purpose=${actualPurpose}`,
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
      setAlert({ message: "Email verified", type: "success" });

      setTimeout(() => {
        if (actualPurpose === "register") {
          navigate("/register", {
            state: { email, verified: true },
          });
        }
        else if (actualPurpose === "forgot") {
          navigate("/reset-password", {
            state: { email },
          });
        }
      }, 1000);
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
      <p>
        {actualPurpose === "register"
          ? "Verify your email to continue registration"
          : "Verify your email to reset password"}
      </p>

      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}

      <div className="email-input-group">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          disabled={otpSent}
          onChange={(e) => validateEmail(e.target.value)}
        />
      </div>

      {!otpSent && (
        <button
          className="email-btn"
          disabled={!isValidEmail || loading}
          onClick={handleSendMail}
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>
      )}

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
    </div>
  );
}

export default EmailOtpVerification;
