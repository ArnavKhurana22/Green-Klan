import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/tryLogo2.png";

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
      if (menuOpen && !event.target.closest(".nav-container, .nav-dropdown")) {
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
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 1 }}
          animate={{ opacity: visible ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="navbar"
        >
          <div className="nav-container">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>

            <span className="brand-name">GreenKlan</span>

            {/* Desktop Links */}
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <button className="contact-link" onClick={handleContactClick}>
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile Dropdown */}
            <div className={`nav-dropdown ${menuOpen ? "active" : ""}`}>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
              <button className="contact-link" onClick={handleContactClick}>
                Contact
              </button>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
