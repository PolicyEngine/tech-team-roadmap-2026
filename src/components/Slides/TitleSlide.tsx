import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";

export function TitleSlide() {
  return (
    <div className="slide__content" style={{ textAlign: "center" }}>
      <motion.p className="slide-eyebrow" variants={childVariants}>
        PolicyEngine
      </motion.p>

      <motion.h1
        className="slide-title"
        variants={childVariants}
        style={{ marginBottom: "0.5rem" }}
      >
        Tech Team
        <br />
        <span className="slide-title--accent">Roadmap 2026</span>
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        variants={childVariants}
        style={{ margin: "1.5rem auto", maxWidth: "600px" }}
      >
        A quarterly overview of priorities and initiatives
      </motion.p>

      <motion.div
        variants={childVariants}
        style={{
          marginTop: "4rem",
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          alignItems: "center",
          color: "var(--pe-gray-400)",
          fontSize: "0.875rem",
          fontFamily: "var(--font-body)",
        }}
      >
        <span>Press</span>
        <kbd
          style={{
            background: "var(--pe-gray-100)",
            padding: "0.25rem 0.5rem",
            borderRadius: "4px",
            fontSize: "0.75rem",
            border: "1px solid var(--pe-gray-200)",
          }}
        >
          {"\u2192"}
        </kbd>
        <span>or</span>
        <kbd
          style={{
            background: "var(--pe-gray-100)",
            padding: "0.25rem 0.5rem",
            borderRadius: "4px",
            fontSize: "0.75rem",
            border: "1px solid var(--pe-gray-200)",
          }}
        >
          Space
        </kbd>
        <span>to continue</span>
      </motion.div>
    </div>
  );
}
