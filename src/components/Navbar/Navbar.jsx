import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){
    return(
        <>
            <div className="navbar">
                <div className="container">
                    <div className="logo">
                        <img src="/images/logo.jpg" alt="logo-image" />
                    </div>
                    <div className="nav-tab">
                        <ul className="nav-items">
                            <li> <Link to="/" className="nav-link">Home</Link> </li>
                            <li> <Link to="/about" className="nav-link">About</Link> </li>
                            <li> <Link to="/services" className="nav-link">Services</Link> </li>
                            <li> <Link to="/reseller" className="nav-link">Reseller</Link> </li>
                            <li> <Link to="/support" className="nav-link">Support</Link> </li>
                            <li> <Link to="/contact" className="nav-link">Contact</Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;