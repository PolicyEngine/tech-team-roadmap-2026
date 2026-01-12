import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";
import { roadmapData } from "../../data/roadmapData";

export function Q1SlideB() {
  const { q1b } = roadmapData;

  return (
    <div className="slide__content">
      <motion.h1 className="slide-title" variants={childVariants}>
        <span className="slide-title--accent">{q1b.quarter}:</span> {q1b.title}
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        variants={childVariants}
        style={{ marginBottom: "1.5rem" }}
      >
        {q1b.subtitle}
      </motion.p>

      <motion.div
        variants={childVariants}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {q1b.items.map((item, index) => (
          <div
            key={index}
            className="slide-card"
            style={{ padding: "1.25rem" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  minWidth: "8px",
                  height: "8px",
                  marginTop: "0.5rem",
                  borderRadius: "50%",
                  background: "var(--pe-gray-400)",
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "1.125rem",
                    color: "var(--pe-gray-800)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </p>
                {item.description && (
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      color: "var(--pe-gray-500)",
                      margin: "0.375rem 0 0 0",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
