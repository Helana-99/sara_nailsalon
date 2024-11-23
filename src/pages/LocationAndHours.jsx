import React from "react";
import "./LocationAndHours.css";

const LocationAndHours = () => {
    return (
        <div className="location-section">
            <div className="location-container">
                {/* Map Section */}
                <div className="map-container">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6902.142082243646!2d31.3658382!3d30.1207806!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1732128267922!5m2!1sen!2sus"
                        className="map-iframe"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Location and Hours Section */}
                <div className="hours-container">
                    <h2 className="location-title">Location & Hours</h2>
                    <address className="location-address">
                        <strong>Sara's Nail Studio</strong> <br />
                        160 Ahmed Saleh Street, Unit #3 <br />
                        Cairo City, Sheraton 07302 <br />
                        <a href="tel:01044861361" className="contact-link">
                            (02) 01044861361
                        </a>
                        <br />
                        {/*  */}
                        <a
                            href="mailto:sarah@sarahsnailstudio.com"
                            className="contact-link"
                        >
                            sarah_nailstudio@gmail.com
                        </a>
                        <table className="hours-table">
                            <tbody>
                                {[["Monday", "9:30 am - 7:00 pm"],
                                ["Tuesday", "9:30 am - 7:00 pm"],
                                ["Wednesday", "9:30 am - 7:00 pm"],
                                ["Thursday", "9:30 am - 7:00 pm"],
                                ["Friday", "9:30 am - 7:00 pm"],
                                ["Saturday", "9:30 am - 7:00 pm"],
                                ["Sunday", "11:00 am - 5:00 pm"]].map(([day, hours]) => (
                                    <tr key={day}>
                                        <td>{day}</td>
                                        <td>{hours}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </address>
                </div>
            </div>
        </div>
    );
};

export default LocationAndHours;
