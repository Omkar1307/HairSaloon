import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setIsLogged(!!localStorage.getItem("token"));
    }, [location]);

    useEffect(() => {
        const onStorage = () => setIsLogged(!!localStorage.getItem("token"));
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    useEffect(() => {
        const onAuthChanged = () => setIsLogged(!!localStorage.getItem("token"));
        window.addEventListener("authChanged", onAuthChanged);
        return () => window.removeEventListener("authChanged", onAuthChanged);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setShowMenu(false);
        setIsLogged(false);
        navigate("/login");
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo">Logo here</div>
                <div className="alink">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Service">Service</Link>
                    <Link to="/Contacts">Contacts</Link>

                    {!isLogged ? (
                        <Link to="/login" className="loginbutton">
                            Login
                        </Link>
                    ) : (
                        <div className="profile-area">
                            <button
                                className="profile-btn"
                                onClick={() => setShowMenu((s) => !s)}
                                aria-label="Open profile menu"
                            >
                                <FaUserCircle className="profile-icon" />
                            </button>
                        </div>
                    )}
                </div>
            </nav>

            
            <div className={`menu-overlay ${showMenu ? "open" : ""}`} onClick={() => setShowMenu(false)} />

            <aside className={`side-menu ${showMenu ? "open" : ""}`} role="dialog" aria-hidden={!showMenu}>
                <div className="side-menu-inner">
                    <div className="profile-top">
                        <FaUserCircle className="avatar-large" />
                        <div className="profile-name">My Profile</div>
                    </div>

                    <ul className="menu-list">
                        <li onClick={() => { setShowMenu(false); navigate('/profile'); }}>Profile</li>
                        <li onClick={() => { setShowMenu(false); navigate('/book-appointment'); }}>Book Appointment</li>
                        <li onClick={handleLogout}>Logout</li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Navbar;