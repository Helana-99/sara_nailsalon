import React from "react";
import "./ServicesSection.css";
import manicureImg from "../assets/2.jpg";
import structureGelImg from "../assets/3.jpg";
import dippingPowderImg from "../assets/4.jpg";
import extensionNailsImg from "../assets/5.jpg";
import pedicureImg from "../assets/6.jpg";
import extraImg from "../assets/7.jpg";

function ServicesSection() {
    const services = [
        {
            title: "Manicure",
            description: `Long Lasting
                          Extra Protection
                          Dry Quicker
                          Look and Feel Like Natural Nails
                          Take Off or Change Faster
                          Easier To Add Designs`,
            img: manicureImg,
        },
        {
            title: "Structure Gel",
            description: `Suitable For Short and Medium Real Nails
                          Better Protection For Nail Base
                          Stronger than Regular Gel Polish
                          Thinner and Lighter than UV Gel
                          Last Longer Than Gel Polish
                          Have a Look of Natural Nails
                          Easy and Faster Apply`,
            img: structureGelImg,
        },
        {
            title: "Dipping Powder",
            description: `Unlimited of Color Selection
                          Fancy & Elegant
                          Healthier Undamaged Nail Beds
                          Odors-Free
                          Non-Toxic
                          No Harmful Primers
                          Look and Feel Like Natural Nails`,
            img: dippingPowderImg,
        },
        {
            title: "Extension Nails",
            description: `Choice of UV Gel, Acrylic or GEL X
                          One of our most popular items
                          Perfect for everyday use
                          Long and Strong Nails
                          Durable
                          Multiple Shapes
                          Elegant and Shiny
                          More Option for Designs
                          Exceptional quality and choice.`,
            img: extensionNailsImg,
        },
        {
            title: "Pedicure",
            description: `Multiple Option Pedicure Levels
                          Experience Luxury Environment
                          Enjoy Multiple Steps of Services
                          Stress Relief
                          Relax, Rejuvenate, and Refresh
                          Remove Dead Skin
                          Smoother Your Skin
                          Healthy Blood Circulation`,
            img: pedicureImg,
        },
        {
            title: "Extra",
            description: `From Manicure to Pedicure
                          Nail Arts
                          Soak Off
                          Nail Shape
                          Callus Remove
                          Moisture Sock & Glove
                          Hot Stone
                          And Many More`,
            img: extraImg,
        },
    ];
    return (
        <div className="services-section " id="services">

            <h2 className="gallery-title">
                Our services
            </h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.img} alt={service.title} className="service-image" />
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        <a href="https://wa.me/+201044861361" className="read-more-btn">
                            book now </a>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default ServicesSection;
