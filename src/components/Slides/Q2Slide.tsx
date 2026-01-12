import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";
import { roadmapData } from "../../data/roadmapData";

export function Q2Slide() {
  const { q2 } = roadmapData;

  return (
    <div className="slide__content">
      <motion.h1 className="slide-title" variants={childVariants}>
        <span className="slide-title--accent">{q2.quarter}:</span> {q2.title}
      </motion.h1>

      <motion.div
        variants={childVariants}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        {q2.items.map((item, index) => (
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
                  flexShrink: 0,
                  background: "var(--pe-gray-400)",
                }}
              />
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "1rem",
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
                      fontSize: "0.875rem",
                      color: "var(--pe-gray-500)",
                      margin: "0.25rem 0 0 0",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </p>
                )}
                {item.subItems && (
                  <div
                    style={{
                      marginTop: "0.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.25rem",
                    }}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.8125rem",
                          color: "var(--pe-gray-600)",
                          paddingLeft: "0.75rem",
                          position: "relative",
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "0.5rem",
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: "var(--pe-gray-400)",
                          }}
                        />
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
