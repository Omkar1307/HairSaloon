import { useState } from "react";
import "./Login.css";
import {Link} from "react-router-dom";

import { MdEmail, MdLock } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Login() {
    const [loginType, setLoginType] = useState("email");
    const [showPassword, setShowPassword] = useState(false);

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
                    <MdEmail />
                    Email
                </button>

                <button
                    className={loginType === "phone" ? "active" : ""}
                    onClick={() => setLoginType("phone")}
                >
                    <FaPhoneAlt />
                    Phone
                </button>
            </div>

            {/* Dynamic Input */}
            {loginType === "email" ? (
                <div className="input-group">
                    <MdEmail className="input-icon" />
                    <input type="email" placeholder="Enter Email" />
                </div>
            ) : (
                <div className="input-group">
                    <FaPhoneAlt className="input-icon" />
                    <input type="tel" placeholder="Enter Phone Number" />
                </div>
            )}

            {/* Password */}
            <div className="input-group">
                <MdLock className="input-icon" />

                <input placeholder="Password" type={showPassword ? "text" : "password"} />
                <span
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>


            </div>
            <div className="forgot-password">
                <Link to="/EmailOtpVerification" className="register-link">Forgot Password</Link>
            </div>
            <button className="login-btn">Login</button>
            <div className="register-text">
                Don’t have an account?
                <Link
    to="/EmailOtpVerification"
    state={{ purpose: "register" }}
    className="register-link"
  >Register
  </Link>
            </div>

        </div>

    );
}

export default Login;
