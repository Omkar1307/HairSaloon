import React, { useState } from 'react';
import { MdEmail ,MdLock,MdPassword } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './CreateNewPasswod.css';
function CreateNewPasswod() {
    const [showPassword, setShowPassword]=useState(false);
     const [showCPassword, setShowCPassword]=useState(false);
  return (
    <div className='password-reset-page'>
        <h1>Create new Password</h1>
        <h4>Enter OTP and New Password</h4>
        <div className="input-group">
        <MdEmail className="input-icon" />
        <input type='email' placeholder=''></input>
        </div>
        <div className="input-group">
         <MdLock className="input-icon" />
        <input placeholder='Enter Otp'></input>
        </div>
        <div className="input-group">
        <MdPassword className="input-icon"></MdPassword>
        <input placeholder='Enter Password' type={showPassword ? "text" :"password"}/>
         <span className="eye-icon" onClick={()=>setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash/>:<FaEye/>}

        </span>
        </div>
        <div className="input-group">
        <MdPassword className="input-icon"></MdPassword>
        <input placeholder='Confirm Password'type={showCPassword ? "text" :"password"}/> 
        <span className="eye-icon" onClick={()=>setShowCPassword(!showCPassword)}>
            {showCPassword ? <FaEyeSlash/>:<FaEye/>}

        </span>
        </div>

        <button className='UpdatePasswordBtn'>UpdatePassword</button>
      
    </div>
  )
}

export default CreateNewPasswod
