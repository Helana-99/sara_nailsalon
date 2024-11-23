import React from "react";
import Slider from "react-slick";
import "./GallerySection.css";

// Example images for the gallery
import img1 from "../assets/8.jpg";
import img2 from "../assets/9.jpg";
import img3 from "../assets/10.jpg";
import img4 from "../assets/11.jpg";
import img5 from "../assets/12.jpg";
import img6 from "../assets/13.jpg";
import img7 from "../assets/14.jpg";
import img8 from "../assets/15.jpg";
import img9 from "../assets/16.jpg";
import img10 from "../assets/17.jpg";
import img11 from "../assets/18.jpg";


function GallerySection() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
// 
    return (
        <div className="gallery-section" id="Gallery">
            <h2 className="gallery-title">
                Explore our Gallery
            </h2>
            <Slider {...sliderSettings} className="gallery-slider">
                {images.map((img, index) => (
                    <div key={index} className="gallery-item">
                        <img src={img} alt={`Gallery ${index + 1}`} className="gallery-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default GallerySection;
