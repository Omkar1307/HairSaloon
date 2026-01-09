import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaUserCircle, FaBars, FaSearch, FaTimes } from "react-icons/fa";

function Navbar() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
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

    const pathname = location.pathname || "/";

    return (
        <>
            <nav className="navbar">
                <div className="logo" onClick={() => navigate('/') } role="link" tabIndex={0}>
                    <img src="/logo192.png" alt="Hair Salon logo" className="logo-img" />
                    <span className="logo-text">Hair Salon</span>
                </div>

                <div className="nav-right">
                    <div className={`search-box ${showSearch ? 'open' : ''}`}>
                        <input type="search" placeholder="Search services..." aria-label="Search services" />
                    </div>
                    <button className="icon-btn search-btn" aria-label="Toggle search" onClick={() => setShowSearch(s => !s)}>
                        <FaSearch />
                    </button>

                    <div className="alink">
                        <Link to="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                        <Link to="/About" className={`nav-link ${pathname === '/About' ? 'active' : ''}`}>About</Link>
                        <Link to="/Service" className={`nav-link ${pathname === '/Service' ? 'active' : ''}`}>Service</Link>
                        <Link to="/Contacts" className={`nav-link ${pathname === '/Contacts' ? 'active' : ''}`}>Contacts</Link>

                        {!isLogged ? (
                            <Link to="/login" className="loginbutton">Login</Link>
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

                    <button className="icon-btn hamburger" aria-label="Open menu" onClick={() => setShowMenu(true)}>
                        <FaBars />
                    </button>
                </div>
            </nav>

            <div className={`menu-overlay ${showMenu ? "open" : ""}`} onClick={() => setShowMenu(false)} />

            <aside className={`side-menu ${showMenu ? "open" : ""}`} role="dialog" aria-hidden={!showMenu}>
                <div className="side-menu-inner">
                    <div className="profile-top">
                        <FaUserCircle className="avatar-large" />
                        <div className="profile-name">My Profile</div>
                        <button className="icon-btn close-menu" aria-label="Close menu" onClick={() => setShowMenu(false)}><FaTimes /></button>
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