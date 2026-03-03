// src/hooks/useScrollAnimation.js
import { useInView } from 'motion/react'; // ← very important import
import { useEffect, useRef } from 'react';

export default function useScrollAnimation(options = {}) {
  const ref = useRef(null);

  // Detect when element is in view
  const isInView = useInView(ref, {
    once: true,           // animate only once
    margin: "-100px",     // start animation slightly before visible (smooth feel)
    amount: 0.3,          // 30% of element visible → trigger
    ...options.viewOptions, // allow override
  });

  // Animation variants (you can customize these)
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Default transition (smooth & elegant)
  const transition = {
    duration: 0.7,
    ease: "easeOut",
    delay: options.delay || 0,
    ...options.transition,
  };

  return {
    ref,                  // attach this to your motion element
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    variants,
    transition,
  };
}