import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './LandingPage.css';
import Ban2 from './Ban2.jpg';

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <img src={Ban2} alt="Nursery" className="hero-image" />
        <div className="hero-text">
          <h1>PARADISE NURSERY</h1>
          <p>Your one-stop destination for aromatic and medicinal plants.</p>
          <Link to="/products">
            <button className="start-button">GET STARTED</button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>ABOUT THE COMPANY</h2>
        <p>
          Paradise Nursery is dedicated to providing high-quality, organic, and sustainable
          plants to enhance your home and garden. We specialize in aromatic and medicinal 
          plants, ensuring that you receive nature’s best gifts for your health and well-being.
          Our mission is to promote green living and make gardening accessible to everyone.
        </p>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h3>CONTACT INFORMATION:</h3>
        <p><FaPhone /> +1 234 567 890</p>
        <p><FaEnvelope /> info@paradisenursery.com</p>
        <p><FaMapMarkerAlt /> 123 Greenway Street, Plant City, USA</p>
      </div>
    </div>
  );
};

export default LandingPage;
