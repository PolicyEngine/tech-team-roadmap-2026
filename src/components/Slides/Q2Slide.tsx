'use client';

import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";
import { roadmapData, sortByStatus } from "../../data/roadmapData";
import { DeliverableCard } from "../DeliverableCard";

export function Q2Slide() {
  const { q2 } = roadmapData;

  // Sort items by status, then split into two columns
  const sortedItems = sortByStatus(q2.items);
  const midpoint = Math.ceil(sortedItems.length / 2);
  const leftColumn = sortedItems.slice(0, midpoint);
  const rightColumn = sortedItems.slice(midpoint);

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
        {/* Left Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {leftColumn.map((item, index) => (
            <DeliverableCard key={index} item={item} />
          ))}
        </div>

        {/* Right Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {rightColumn.map((item, index) => (
            <DeliverableCard key={index} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
