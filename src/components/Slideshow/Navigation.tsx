import { motion } from "framer-motion";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

export function Navigation({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onGoTo,
}: NavigationProps) {
  return (
    <nav className="slideshow__nav">
      <button
        className="slideshow__nav-btn slideshow__nav-btn--prev"
        onClick={onPrev}
        disabled={currentSlide === 0}
        aria-label="Previous slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="slideshow__dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.button
            key={index}
            className={`slideshow__dot ${
              index === currentSlide ? "slideshow__dot--active" : ""
            }`}
            onClick={() => onGoTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      <button
        className="slideshow__nav-btn slideshow__nav-btn--next"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        aria-label="Next slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="slideshow__counter">
        <span className="slideshow__counter-current">{currentSlide + 1}</span>
        <span className="slideshow__counter-sep">/</span>
        <span className="slideshow__counter-total">{totalSlides}</span>
      </div>
    </nav>
  );
}
