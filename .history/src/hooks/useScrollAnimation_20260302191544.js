// src/hooks/useScrollAnimation.js
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function useScrollAnimation({
  delay = 0,
  duration = 0.7,
  y = 35,                    // how far it slides from (higher = more dramatic)
  once = true,
  amount = 0.25,             // % of element visible before trigger (0.1–0.4 is natural)
  ...viewOptions
} = {}) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once,
    amount,
    margin: "-50px",         // start a bit earlier for smoother feel
    ...viewOptions,
  });

  return {
    ref,
    initial: { opacity: 0, y },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y },
    transition: {
      duration,
      delay,
      ease: 'easeOut',
    },
  };
}