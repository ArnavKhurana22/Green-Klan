import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer'; 
import heroImage from '../assets/hero-image.jpg';

export default function Home() {
  const [stats, setStats] = useState([0, 0, 0, 0]);
  const finalStats = [500, 300, 70, 300]; // Your actual numbers

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateNumbers();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector('.stats-section'));
    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    finalStats.forEach((final, index) => {
      let start = 0;
      const duration = 300;
      const stepTime = Math.max(1, Math.floor(duration / final));
      
      const timer = setInterval(() => {
        start += 1;
        setStats(prev => {
          const newStats = [...prev];
          newStats[index] = start;
          return newStats;
        });
        if (start >= final) clearInterval(timer);
      }, stepTime);
    });
  };

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
        <div className="overlay"></div>
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
              <a href="https://chat.whatsapp.com/LE0riQQX0sk4iFW93HC65d" className="cta-button" target="_blank" rel="noopener noreferrer">
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
          transition={{ duration: 0.8 }}
        >
          {finalStats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3>
                {stats[index]}{index === 3 ? '+ kg' : '+'}
              </h3>
              <p>{[
                'Plantations',
                'Volunteers Guided',
                'Street vendors interviewed',
                'Waste Cleared'
              ][index]}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <motion.div
          className="mission-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Commitment</h2>
          {[
            "GreenKlan or shall I say the Klan of Generation Green (Gen G), commits to ignite an ecological revolution that transforms communities and restores nature. ",
            "We empower individuals with the tools, knowledge, and support to become catalysts for change. Through innovation, collaboration, and action, we tackle environmental challenges head-on. Whether it is planting trees, restoring ecosystems, and becoming voice of the voiceless.  ",
            "We believe in creating tangible impact: from reducing carbon footprints to nurturing socio-eco entrepreneurs, we’re building a future where sustainability is second nature. Our mission is to inspire action, foster resilience, and leave a legacy of hope for generations to come.  ",
            "Zero Waste, Infinite Hope. This is GreenKlan. This is our commitment.  ",
            "Become a part of Gen G. Together, we can rewrite the future with one project, one idea, one life at a time.",
           
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </motion.div>
      </section>

      {/* Footer Section */}
      <Footer />
    </motion.main>
  );
}