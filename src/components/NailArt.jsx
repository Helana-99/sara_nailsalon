import React, { useState } from "react";
import "./NailArt.css";
import illustration from "../assets/1.jpg"; // Ensure the file path to your image is correct

function NailArtSection() {
    // State to toggle content expansion
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to handle button click
    const handleReadMore = () => {
        setIsExpanded((prevState) => !prevState);
    };

    return (
        <div className="nail-art-section">
            <div className="image-area">
                <img src={illustration} alt="Nail Art Illustration" className="illustration" />
            </div>
            <div className="text-area">
                <h1>NAIL ART</h1>
                <p>
                    Sara's Nail Studio is one of the most sanitize and cleanness nail salons located in Cairo.
                    We offer you the ultimate in pampering and boosting your natural beauty with our whole-hearted,
                    creative & professional staff.
                </p>
                {/* Conditionally render additional content */}
                {isExpanded && (
                    <div className="extra-content">
                        <p>
                            We always attempt to deliver the services that meet your expectations. Here we provide
                            the best services for our valued customers in the beauty care industry. No matter what
                            services you choose, our nail salon will bring you the most satisfaction.
                        </p>
                        <p>
                            Our nail salon routinely follows a sanitary standard that sets us apart from other places.
                            Buffers and files are used only once then discarded. All pedicure procedures are done with
                            liner protection. And above all, staff are trained to follow a proper sanitization protocol
                            that puts the client's hygiene as the number one priority.
                        </p>
                        <p>
                            Visit us today and experience the combination of luxury and elegance. Our nail salon looks
                            forward to seeing you!
                        </p>
                    </div>
                )}

                {!isExpanded ? <button className="read-more-btn" onClick={handleReadMore}> read more
                </button> : <a href="https://wa.me/+201044861361" className="read-more-btn" onClick={handleReadMore}>
                    book now </a>}


            </div>
        </div>
    );
}

export default NailArtSection;
