import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdEmail ,MdLock,MdPassword } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './CreateNewPasswod.css';
function CreateNewPasswod() {
    const location = useLocation();
    const [showPassword, setShowPassword]=useState(false);
     const [showCPassword, setShowCPassword]=useState(false);
     const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
     const email = location.state?.email;
      if (!email) {
    return <p>Unauthorized access</p>;
  }
  
  const handleSubmit = () => {
    // 🔴 Frontend validation
    if (!password || !confirmPassword) {
      setError("Both fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }

    setError("");

    // ✅ Call backend API here
    console.log("Email:", email);
    console.log("New Password:", password);

    // Example:
    // fetch("/api/reset-password", { ... })
  };

  return (
    <div className='password-reset-page'>
        <h1>Create new Password</h1>
        <h4>Enter New Password</h4>
        <div className="input-group">
        <MdEmail className="input-icon" />
        <input type='email' value={email} disabled ></input>
        </div>
        <div className="input-group">
        <MdPassword className="input-icon"></MdPassword>
        <input placeholder='Enter Password' type={showPassword ? "text" :"password"} onChange={(e) => setPassword(e.target.value)}/>
         <span className="eye-icon" onClick={()=>setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash/>:<FaEye/>}

        </span>
        </div>
        <div className="input-group">
        <MdPassword className="input-icon"></MdPassword>
        <input placeholder='Confirm Password'type={showCPassword ? "text" :"password"}onChange={(e) => setConfirmPassword(e.target.value)}/> 
        <span className="eye-icon" onClick={()=>setShowCPassword(!showCPassword)}>
            {showCPassword ? <FaEyeSlash/>:<FaEye/>}

        </span>
        </div>
         {/* Error Message */}
      {error && <p className="error-text">{error}</p>}

      <button className="UpdatePasswordBtn" onClick={handleSubmit}>
        Update Password
      </button>
    </div>
  )
}

export default CreateNewPasswod
