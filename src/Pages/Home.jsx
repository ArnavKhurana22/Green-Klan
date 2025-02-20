import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; 
import heroImage from '../assets/hero-image.jpg';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page"
    >
      {/* Hero Section */}
      <section 
        className="hero-section" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div> {/* Dark overlay for contrast */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hero-content"
        >
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Growing a <span className="highlight">Greener Future</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Join our movement to protect ecosystems and promote sustainable living.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/contact" className="cta-button">Join Now</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <motion.div 
          className="stats-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <h3>100+</h3>
            <p>Trees Planted</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Active Volunteers</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Conservation Projects</p>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <motion.div
          className="mission-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Our Commitment</h2>
          <p>
            At <span className="highlight">Green Klan</span>, we combine scientific research with community action 
            to create lasting environmental change. Our initiatives focus on:
          </p>
          <ul className="mission-list">
            <li>Reforestation programs</li>
            <li>Sustainable agriculture</li>
            <li>Environmental education</li>
            <li>Policy advocacy</li>
          </ul>
        </motion.div>
      </section>

      {/* Footer Section */}
      <Footer />
    </motion.main>
  );
}
