import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        {/* Contact Us Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="footer-contact-info">
            <p>+91 97703 77316</p>
            <p>agahenv@gmail.com</p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/about">Our Team</Link>
            
            <Link to="/programs">Get Involved</Link>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://x.com/greeen_Klan" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/_greenklan_?igsh=MW4zbnZleXBmZThmaA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/greenklan/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Green Klan. All rights reserved</p>
      </div>
    </footer>
  );
}