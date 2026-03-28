import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function useScrollAnimation({
  delay = 0,
  duration = 0.7,
  y = 35,
  once = true,
  amount = 0.25,
  ...viewOptions
} = {}) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once,
    amount,
    margin: '-50px',
    ...viewOptions,
  });

  return {
    ref,
    inView,
    initial: { opacity: 0, y },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y },
    transition: { duration, delay, ease: 'easeOut' },
  };
}