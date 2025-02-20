import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } }
};

function AnimatedRoutes() {
  const location = useLocation(); // Track route changes for animation

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MotionWrapper><Home /></MotionWrapper>} />
        <Route path="/about" element={<MotionWrapper><About /></MotionWrapper>} />
        <Route path="/projects" element={<MotionWrapper><Projects /></MotionWrapper>} />
        <Route path="/contact" element={<MotionWrapper><Contact /></MotionWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function MotionWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}
