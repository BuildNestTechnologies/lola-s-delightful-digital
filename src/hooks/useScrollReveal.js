import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const useScrollReveal = (options = { threshold: 0.1, triggerOnce: true }) => {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!options.triggerOnce) {
          setInView(false);
        }
      },
      { threshold: options.threshold }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options.threshold, options.triggerOnce]);

  return [setRef, inView];
};
