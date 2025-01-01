import React from "react";
import logo from "../images/logo.png"; // Correct path to logo file
import '../styles/PreLoader.css';  // Correct path to PreLoader.css

const Preloader = () => {
  return (
    <div className="Preloader">
      {/* Logo */}
      <img
        src={logo}
        alt="Little England Farm Logo"
        className="Preloader-logo"
      />

      {/* Bouncing dots */}
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Preloader;
