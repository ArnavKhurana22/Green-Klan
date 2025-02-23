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
            Transforming Communities <span className="highlight">Restoring Nature</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Let’s rewrite the code of human existence - one rescued river, one zero-waste community, one resurrected life at a time.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
          >
              <a href="https://chat.whatsapp.com/LE0riQQX0sk4iFW93HC65d" className="cta-button"    target="_blank" 
    rel="noopener noreferrer" >
    Join Now
  </a>
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
            <h3>500+</h3>
            <p>Plantations</p>
          </div>
          <div className="stat-item">
            <h3>300+</h3>
            <p>Volunteers Guided</p>
          </div>
          <div className="stat-item">
            <h3>70+</h3>
            <p>Street vendors interviewed</p>
          </div>
          <div className="stat-item">
            <h3>300+ kg</h3>
            <p>Waste Cleared</p>
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
            At <span className="highlight">Green Klan</span>, We exist to ignite an ecological revolution that pulses through hands, hearts, and neighborhoods. Our purpose is to arm communities with the tools to resurrect the planet not just in boardrooms, but in backyards, riverbanks, and the silent spaces where nature’s voiceless cry out. We fuel ideas that solve through innovation, yes, but we also plant warriors: everyday visionaries who build communities where clean spaces and thriving environments are non-negotiable standards, not distant dreams.

          </p>
          <p>
          We don’t just plant trees—we write the destiny of the next generation. We don’t just ‘help’ animals - we give voice to the voiceless, turning empty skies back into symphonies of wings, transforming concrete sprawls into wild corridors where life claws its way home. Our communities don’t just adopt practices - they forge rituals of rebellion, where carrying cloth bags becomes a badge of honor and fixing broken ecosystems becomes a shared addiction.
          </p>

          <p>
          This is our call for survival: youngsters planting forests that outlive them, engineers building homes for birds and animals, neighborhoods competing to erase their carbon footprints like it’s the World Cup. We’re here to make ‘sustainability’ obsolete—replaced by societies so fiercely connected to Earth that polluting it feels truly like cutting off their own limbs.
          </p>
          <p>
          Join us. This is not a charity. This is a war for mother earth, and every blade of grass you plant is a bullet against apathy. 
          </p>
        </motion.div>
      </section>

      {/* Footer Section */}
      <Footer />
    </motion.main>
  );
}
