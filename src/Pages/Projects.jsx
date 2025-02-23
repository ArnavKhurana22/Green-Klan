import { motion } from 'framer-motion';
import { FiActivity, FiUsers, FiBriefcase, FiBarChart, FiPackage } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: "AI Product Sustainability Identifier",
      icon: <FiActivity className="project-icon" />,
      status: "Active",
      description: "Leveraging AI technology to analyze and rate product sustainability through image recognition",
      features: [
        "🖼️ Image-based sustainability assessment",
        "📊 Real-time eco-impact scoring",
        "📱 User-friendly mobile integration"
      ],
      color: "bg-blue-50"
    },
    {
      title: "Generation G Klan",
      icon: <FiUsers className="project-icon" />,
      status: "Growing",
      description: "Cultivating a global network of environmentally conscious change-makers",
      features: [
        "🌍 100+ members worldwide",
        "📚 Monthly sustainability workshops",
        "🤝 Collaborative eco-projects platform"
      ],
      color: "bg-purple-50"
    },
    {
      title: "Sustainable Organization Consulting",
      icon: <FiBriefcase className="project-icon" />,
      status: "Active",
      description: "Guiding businesses through green transformation strategies",
      features: [
        "🏭 Carbon footprint analysis",
        "📈 Sustainable ROI modeling",
        "♻️ Circular economy integration"
      ],
      color: "bg-green-50"
    },
    {
      title: "ESG Rating Framework",
      icon: <FiBarChart className="project-icon" />,
      status: "Developing",
      description: "Comprehensive ESG evaluation system for corporate sustainability",
      features: [
        "📋 50+ evaluation metrics",
        "🔍 Third-party audit integration",
        "🌱 Dynamic impact forecasting"
      ],
      color: "bg-orange-50"
    },
    {
      title: "Sustainable Product Collaboration",
      icon: <FiPackage className="project-icon" />,
      status: "Expanding",
      description: "Bridging eco-manufacturers with conscious consumers",
      features: [
        "🛍️ Verified green marketplace",
        "📦 Carbon-neutral logistics",
        "🌳 Profit-for-planet model"
      ],
      color: "bg-teal-50"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="projects-section"
    >
      <div className="header-container">
        <h2 className="section-title">
          Impact Initiatives
          <span className="title-underline"></span>
        </h2>
        <p className="section-subtitle">
          Driving systemic change through innovative sustainability solutions
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.15 }}
            className={`project-card ${project.color}`}
          >
            <div className="card-header">
              <div className="icon-container">
                {project.icon}
                <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
            
            <div className="feature-list">
              {project.features.map((feature, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-icon">➤</div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}