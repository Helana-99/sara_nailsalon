import React from "react";
import "./Home.css";
import bannerImage from "../assets/banner.png"; // Path to your banner image
import sectionImage from "../assets/discover.png"; // Path to the section image

const Home = () => {
    return (
        <div className="home">
            {/* Banner Section */}
            <div
                className="banner"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#274584",
                    textAlign: "center",
                }}
            >

            </div>

            {/* Section Below the Banner */}
            <div className="section">
                <div className="section-content">
                    <div className="section-text">
                        <h2 className="section-title">Discover Netfork</h2>
                        <p className="section-subtitle">Your Vision, Our Craft</p>
                        <p className="section-description">
                            Unlike other frameworks which try to cover everything, it has been built specifically for WordPress.
                            Aliquam sapien est, scelerisque sed dolor. Proin accumsan erat sem, id porta risus dignissim ac.
                        </p>
                        <button className="read-more-btn">Read More →</button>
                    </div>
                    <div className="section-image">
                        <img src={sectionImage} alt="Discover Netfork" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

