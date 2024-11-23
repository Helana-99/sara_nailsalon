import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">SARA nails studio</div>
                <div
                    className={`burger ${isOpen ? "toggle" : ""}`}
                    onClick={toggleMenu}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    <li>
                        <Link
                            to="About"
                            spy={true}
                            smooth={true}
                            duration={100}
                            onClick={toggleMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={100}
                            onClick={toggleMenu}
                        >
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="Gallery"
                            spy={true}
                            smooth={true}
                            duration={100}
                            onClick={toggleMenu}
                        >
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="Prices"
                            spy={true}
                            smooth={true}
                            duration={100}
                            onClick={toggleMenu}
                        >
                            Prices
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
