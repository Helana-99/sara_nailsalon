import React from 'react';
import './PricingSection.css';

const PricingSection = () => {
    return (
        <div className="pricing-section" id='Prices'>
            <h2 className="pricing-title">Treatment Menu</h2>
            <div className="pricing-grid">
                {/* Hands Section */}
                <div className="pricing-column">
                    <h3 className="section-title">HANDS</h3>
                    <div className="service-item">
                        <span className="service-name">NAKED MANICURE</span>
                        <span className="service-price">EGP 300</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">SIGNATURE MANICURE</span>
                        <span className="service-price">EGP 220</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">GEL MANICURE</span>
                        <span className="service-price">EGP 350</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">FREE FROM MANICURE</span>
                        <span className="service-price">EGP 260</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">FREE FROM GEL MANICURE</span>
                        <span className="service-price">EGP 280</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">NATURABUILD MANICURE</span>
                        <span className="service-price">EGP 190</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">NATURABUILD HEMA FREE MANICURE</span>
                        <span className="service-price">EGP 210</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">NATURABUILD + GEL MANICURE</span>
                        <span className="service-price">EGP 220</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">NATURABUILD HEMA FREE + FREE FROM GEL MANICURE</span>
                        <span className="service-price">EGP 230</span>
                    </div>
                </div>

                {/* Hands & Feet Section */}
                <div className="pricing-column">
                    <h3 className="section-title">HANDS & FEET</h3>
                    <div className="service-item">
                        <span className="service-name">NAKED MANI + PEDI</span>
                        <span className="service-price">EGP 280</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">MANI + PEDI</span>
                        <span className="service-price">EGP 340</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">GEL MANI + PEDI</span>
                        <span className="service-price">EGP 400</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">FREE FROM MANI + PEDI</span>
                        <span className="service-price">EGP 440</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">FREE FROM GEL MANI + PEDI</span>
                        <span className="service-price">EGP 480</span>
                    </div>
                </div>

                {/* The Soak Off Section */}
                <div className="pricing-column">
                    <h3 className="section-title">THE SOAK OFF</h3>
                    <div className="service-item">
                        <span className="service-name">GEL SOAK OFF</span>
                        <span className="service-price">EGP 50-100</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">NATURABUILD SOAK OFF</span>
                        <span className="service-price">EGP 50-150</span>
                    </div>
                </div>

                {/* Feet Section */}
                <div className="pricing-column">
                    <h3 className="section-title">FEET</h3>
                    <div className="service-item">
                        <span className="service-name">NAKED PEDICURE</span>
                        <span className="service-price">EGP 220</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">SIGNATURE PEDICURE</span>
                        <span className="service-price">EGP 350</span>
                    </div>
                    <div className="service-item">
                        <span className="service-name">GEL PEDICURE</span>
                        <span className="service-price">EGP 380</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PricingSection;
