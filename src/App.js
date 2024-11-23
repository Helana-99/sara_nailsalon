import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import NailArtSection from "./components/NailArt";
import ServicesSection from "./pages/ServicesSection";
import GallerySection from "./pages/GallerySection";
import LocationAndHours from "./pages/LocationAndHours";
import PricingSection from "./pages/PricingSection";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NailArtSection />
      <ServicesSection />
      <GallerySection />
      <PricingSection />
      <LocationAndHours />
      <Footer />
    </div>
  );
}

export default App;
