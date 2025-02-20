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
            <p>123 Green Street</p>
            <p>Eco City, Earth 12345</p>
            <p>agahenv@gmail.com</p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/about">Our Team</Link>
            <Link to="/projects">Initiatives</Link>
            <Link to="/contact">Get Involved</Link>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Green Kian. All rights reserved</p>
      </div>
    </footer>
  );
}