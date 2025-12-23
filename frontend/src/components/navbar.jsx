import React from "react";
import "./Navbar.css"; // if you have CSS file
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">Logo here</div>
                <div className="alink">
                    <Link  to="/">Home</Link>
                    <Link  to="/About">About</Link>
                    <Link to="/Service">Service</Link>
                    <Link  to="/Contacts">Contacts</Link>
                   <Link to="/login" className="loginbutton">
  Login
</Link>
                    
                </div>
        </nav>
    );
}
export default Navbar