import React from "react";
import "./Footer.css"; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>
            MUSCLE MALL <img className="lo" src="logoo.png"></img>
          </h3>
          <p>Where Fitness Dreams Become Reality</p>
        </div>
        <div className="footer-socials">
          <a href="#" className="social-link">
            Facebook
          </a>
          <a href="#" className="social-link">
            Twitter
          </a>
          <a href="#" className="social-link">
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MUSCLE MALL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
