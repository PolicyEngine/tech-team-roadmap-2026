import { motion } from "framer-motion";
import { childVariants } from "../Slideshow/Slide";
import { roadmapData, sortByStatus } from "../../data/roadmapData";
import { DeliverableCard } from "../DeliverableCard";

export function Q3Slide() {
  const { q3 } = roadmapData;
  const sortedItems = sortByStatus(q3.items);

  return (
    <div className="slide__content">
      <motion.h1 className="slide-title" variants={childVariants}>
        <span className="slide-title--accent">{q3.quarter}:</span> {q3.title}
      </motion.h1>

      <motion.div
        variants={childVariants}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        {sortedItems.map((item, index) => (
          <DeliverableCard key={index} item={item} />
        ))}
      </motion.div>
    </div>
  );
}
