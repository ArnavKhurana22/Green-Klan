import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Urban Reforestation",
    description: "Planting 1 million trees in urban areas by 2025",
  },
  {
    title: "Ocean Cleanup",
    description: "Removing plastic waste from coastal regions",
  }
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="projects-page"
    >
      <h1>Our Projects</h1>
      <div className="projects-grid">
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="project-card"
            >
              <div className="project-image">
                <img src={`/src/assets/${project.image}`} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="learn-more">Learn More</button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}