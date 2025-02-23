import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../assets/MainLogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(prevScrollY > currentScrollY || currentScrollY < 10);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navContainer = event.target.closest(".nav-container");
      const mobileButton = event.target.closest(".mobile-menu-btn");
      
      if (menuOpen && !navContainer && !mobileButton) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  const handleContactClick = async (event) => {
    event.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    setTimeout(() => {
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    }, 300);

    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="navbar"
    >
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="brand-name">GreenKlan</span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Us</Link>
          <button className="contact-link" onClick={handleContactClick}>
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Dropdown */}
        <motion.div
          className={`nav-dropdown ${menuOpen ? "active" : ""}`}
          initial={false}
          animate={{
            height: menuOpen ? "auto" : 0,
            opacity: menuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="dropdown-content">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/programs" onClick={() => setMenuOpen(false)}>Programs</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <button className="dropdown-contact" onClick={handleContactClick}>
              Contact
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}