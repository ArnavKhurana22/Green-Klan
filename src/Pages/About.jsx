import { motion } from 'framer-motion';
import {  FaLinkedin } from 'react-icons/fa';
import abhishekImg from '../assets/abhishekImg.jpg';
import gauravImg from '../assets/gaurav.jpg';
import arnavImg from '../assets/arnav.jpg';
import himajaImg from '../assets/himaja.jpg';

const founders = [
  {
    name: "Abhishek Ray",
    role: "Executive Director",
    bio: "Meet Abhishek Ray—an educator, entrepreneur, and advocate for sustainability. With a background in Electrical Engineering and an MBA, he combines business expertise with a commitment to environmental impact. As an IICA-certified Independent Director, he mentors future leaders in sustainable business, green marketing, and ethical leadership, driving lasting change for both businesses and the planet.",
    social: { linkedin: "#" },
    image: abhishekImg
  },
  {
    name: "Gaurav Bhardwaj",
    role: "Program Manager",
    bio: "Community engagement specialist focused on urban sustainability. Founder of Green Cities Initiative.",
    social: { linkedin: "#" },
    image: gauravImg

  },
  {
    name: "Arnav Khurana",
    role: "Technical Director",
    bio: "Renewable energy expert with background in sustainable architecture. Developed award-winning carbon tracking systems.",
    image: arnavImg
  },
  {
    name: "Himaja Mullapudi",
    role: "Outreach Coordinator",
    bio: "Dr. Himaja Mullapudi, a dentist with a passion for sustainability, aims to integrate eco-friendly practices into healthcare. She combines clinical expertise with strategic HR knowledge, advocating for environmental awareness in her field while pursuing a career in sustainability.",
    image: himajaImg
  }
];

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page"
    >
      <section className="founders-section">
        <h1 className="section-title">Meet Our Founders</h1>
        <div className="founders-grid">
          {founders.map((founder, index) => (
            <motion.article
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="founder-card"
            >
              <img 
                src={founder.image} 
                alt={founder.name}
                className="founder-image"
              />
              <h3>{founder.name}</h3>
              <p className="role">{founder.role}</p>
              <p className="bio">{founder.bio}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.main>
  );
}