import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p>&copy; 2024 Sara's Nail Studio. All rights reserved.</p>
                </div>

                <div className="footer-right">
                    <div className="social-icons">
                        <a
                            href="https://www.instagram.com/sara_acrylic_nails/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="https://www.facebook.com/groups/2710895169223785"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a
                            href="https://wa.me/+201044861361" // Replace with the WhatsApp number
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
