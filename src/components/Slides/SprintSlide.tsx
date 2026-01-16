import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";
import type { Sprint } from "../../lib/supabase";

interface SprintSlideProps {
  sprint: Sprint;
}

export function SprintSlide({ sprint }: SprintSlideProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Parse goals if it's a string (JSONB sometimes comes as string)
  const goals = typeof sprint.goals === "string"
    ? JSON.parse(sprint.goals)
    : sprint.goals || [];

  return (
    <div className="slide__content">
      {/* Header - formatted like quarterly slides */}
      <motion.h1 className="slide-title" variants={childVariants}>
        {sprint.name}
      </motion.h1>

      {/* Dates in light gray */}
      <motion.p
        variants={childVariants}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1.125rem",
          color: "var(--pe-gray-400)",
          margin: "0.5rem 0 2rem 0",
        }}
      >
        {formatDate(sprint.start_date)} — {formatDate(sprint.end_date)}
      </motion.p>

      {/* Goals */}
      {goals && goals.length > 0 && (
        <motion.div
          variants={childVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {goals.map((goal: { id: string; text: string; completed?: boolean }) => (
            <div
              key={goal.id}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                padding: "0.5rem 0",
              }}
            >
              {/* Checkbox indicator */}
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "3px",
                  background: goal.completed
                    ? "var(--pe-teal-500)"
                    : "var(--pe-gray-200)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                {goal.completed && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>

              {/* Goal text */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "0.9375rem",
                  color: goal.completed
                    ? "var(--pe-gray-400)"
                    : "var(--pe-gray-700)",
                  margin: 0,
                  lineHeight: 1.4,
                  textDecoration: goal.completed ? "line-through" : "none",
                }}
              >
                {goal.text}
              </p>
            </div>
          ))}
        </motion.div>
      )}

      {/* No goals message */}
      {(!goals || goals.length === 0) && (
        <motion.p
          variants={childVariants}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            color: "var(--pe-gray-500)",
            fontStyle: "italic",
          }}
        >
          No goals defined for this sprint.
        </motion.p>
      )}
    </div>
  );
}
