import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLinkedin, FaInstagram, FaRegComments } from 'react-icons/fa';
import abhishekImg from '../assets/AbhishekImg.jpg';
import gauravImg from '../assets/gaurav.jpg';
import arnavImg from '../assets/arnav.jpg';
import himajaImg from '../assets/himaja.jpg';

const teamMembers = [
  {
    name: "Abhishek Ray",
    role: "Co Founder",
    bio: "Meet Abhishek Ray—an educator, entrepreneur, and advocate for sustainability. With a background in Electrical Engineering and an MBA, he combines business expertise with a commitment to environmental impact. As an IICA-certified Independent Director, he mentors future leaders in sustainable business, green marketing, and ethical leadership, driving lasting change for both businesses and the planet.",
    social: { linkedin: "https://www.linkedin.com/in/abhishek-ray-theoptimist/", instagram: "https://www.instagram.com/itsabhishekray?igsh=NWtzY2Y4MmE3cW41" },
    image: abhishekImg,
    message: "Nature's guardian with a green thumb 🌿"
  },
  {
    name: "Gaurav Bhardwaj",
    role: "Co Founder",
    bio: "Gaurav, an AI-ML researcher, integrates climate solutions into machine learning. He has prevented nearly a ton of plastic waste, led tree plantations, and actively engages with environmentalists. His mission: build a 10M-strong 'Gen G' community by 2028 for pro-environment choices. Social Media: Climate strategist | Built AI tool for lung disease detection | Vegan | Mountain trekker | Advocates awareness & empathy for 21st-century issues.",
    social: { linkedin: "https://www.linkedin.com/in/gvbj/", instagram: "https://www.instagram.com/gaurav11bhardwaj?igsh=MjV3YzJtc2hveWo4" },
    image: gauravImg,
    message: "Building sustainable communities 🏙️"
  },
  {
    name: "Arnav Khurana",
    role: "Co Founder",
    bio: "Arnav Khurana, a third-year B.Tech Computer Science student, is passionate about leveraging technology for sustainability. With a strong foundation in software development and data science, he explores innovative solutions to environmental challenges. From optimizing resource management to developing eco-friendly applications, they aim to bridge the gap between technology and sustainability, driving positive change for a greener future.",
    social: { linkedin: "https://www.linkedin.com/in/arnav-khurana-75109927b/", instagram: "https://www.instagram.com/_arnavkhurana?igsh=YnNpeGZsb2k3aTFu&utm_source=qr" },
    image: arnavImg,
    message: "Tech meets sustainability here 💡"
  },
  {
    name: "Himaja Mullapudi",
    role: "Co Founder",
    bio: "Dr. Himaja Mullapudi, a dedicated dentist and sustainability advocate, is committed to integrating eco-friendly practices into healthcare. With a strong foundation in clinical expertise and strategic HR management, she actively promotes environmental awareness in her field. Passionate about creating a greener future, she continues to explore innovative ways to merge her professional skills with sustainability efforts.",
    social: { linkedin: "https://www.linkedin.com/in/dr-himaja-mullapudi-675501249/", instagram: "https://www.instagram.com/h_mullapudi?igsh=Zms5bmdkN3kxcmNy" },
    image: himajaImg,
    message: "Empowering youth for climate action ✊"
  }
];

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="about-section"
    >
      <div className="header-container">
        <h2 className="section-title">
          Meet Our Team
          <span className="title-underline"></span>
        </h2>
        <p className="section-subtitle">
          Passionate members driving sustainable transformation
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.15 }}
            className="member-card"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <motion.div 
                className="speech-bubble"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <FaRegComments className="bubble-icon" />
                {member.message}
              </motion.div>
            )}

            <div className="image-container">
              <img 
                src={member.image} 
                alt={member.name}
                className="member-image"
              />
              <div className="social-links">
                {Object.entries(member.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {platform === 'linkedin' && <FaLinkedin />}
                    {platform === 'instagram' && <FaInstagram />}
                  </a>
                ))}
              </div>
            </div>

            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}