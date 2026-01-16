import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./LandingPage.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <motion.div
        className="landing-page__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="landing-page__eyebrow" variants={itemVariants}>
          PolicyEngine
        </motion.p>

        <motion.h1 className="landing-page__title" variants={itemVariants}>
          Tech Team
          <br />
          <span className="landing-page__title--accent">Roadmap 2026</span>
        </motion.h1>

        <motion.p className="landing-page__subtitle" variants={itemVariants}>
          A quarterly overview of priorities and initiatives
        </motion.p>

        <motion.p className="landing-page__modified" variants={itemVariants}>
          Last modified: January 16, 2026
        </motion.p>

        <motion.div className="landing-page__buttons" variants={itemVariants}>
          <button
            className="landing-page__btn landing-page__btn--primary"
            onClick={() => navigate("/roadmap")}
          >
            <span className="landing-page__btn-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            Quarterly Roadmap
          </button>

          <button
            className="landing-page__btn landing-page__btn--secondary"
            onClick={() => navigate("/sprints")}
          >
            <span className="landing-page__btn-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </span>
            Sprints
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
