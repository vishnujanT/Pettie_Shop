import React from 'react';
import "./homePage.css";

const navBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Pettie</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/contact">Categories</a></li>
            </ul>
        </nav>
    );
};

export default navBar;
