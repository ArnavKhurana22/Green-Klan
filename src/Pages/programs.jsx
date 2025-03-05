import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaLeaf, FaRocket } from 'react-icons/fa'; // ✅ Fix: Use FaRocket instead of FiRocket

export default function Programs() {
  const programs = [
    {
      title: "Volunteer Eco Internship",
      icon: <FaLeaf className="program-icon" />, // ✅ Fix: Replaced FiLeaf with FaLeaf
      duration: "1st Phase - 2 Month Internship (Remote)",
      description: "Changemakers envision and are empowered to build a sustainable future through this initiative. This project serves as a call to action for passionate individuals eager to merge ecological understanding and innovation with social impact. We believe that the most powerful solutions emerge from the ground up—starting with individuals who recognize their unique challenges and opportunities, then expanding to communities working together for meaningful change.",
      offers: [
        "🌱 Training & Mentorship: Problem-solving with community leverage",
        "🛠️ Skill Development: Project management & environmental advocacy",
        "🚀 Effort-based learning driving individual & community change"
      ],
      color: "bg-green-50"
    },
    {
      title: "Volunteer Eco Innovators",
      icon: <FaRocket className="program-icon" />, // ✅ Fix: Replaced FiRocket with FaRocket
      duration: "Advanced Implementation Phase",
      description: "This standalone program is dedicated to developing impactful projects aligned with environmental Sustainable Development Goals (SDGs). Designed for interns with fresh perspectives, bold ideas, and a strong drive for positive change, this program fosters innovation and real-world solutions for a greener future.",
      offers: [
        "🔧 Hands-On Experience: Develop impactful environmental projects",
        "💡 Creative Freedom: Bring your ideas to life with support",
        "👥 Mentor Support: Business use case & scalability guidance",
        "🌐 Community Networks: Connect with like minded individuals and experts"
      ],
      color: "bg-teal-50"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="programs-section"
    >
      <div className="header-container">
        <h2 className="section-title">
          What We Offer!
          <span className="title-underline"></span>
        </h2>
        <p className="section-subtitle">
        Join Us in Shaping the Future
        </p>
        <p>
        Whether you’re a learner, explorer, or someone ready to lead a socio-eco entrepreneurial venture. If you are someone with bold ideas to reshape the world, we invite you to be part of this movement. 
        </p>
      </div>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <motion.div 
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className={`program-card ${program.color}`}
          >
            <div className="card-header">
              <div className="icon-container">
                {program.icon}
              </div>
              <div>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-duration">{program.duration}</p>
              </div>
            </div>
            
            <p className="program-description">{program.description}</p>
            
            <div className="offer-list">
              {program.offers.map((offer, i) => (
                <div key={i} className="offer-item">
                  <FiArrowUpRight className="offer-icon" />
                  <span>{offer}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
