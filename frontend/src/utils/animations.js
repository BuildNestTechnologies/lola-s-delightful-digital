export const EASINGS = {
  default: [0.25, 0.1, 0.25, 1],
  quick: [0.4, 0, 0.2, 1],
  bounce: [0.34, 1.56, 0.64, 1],
  smooth: [0.43, 0.13, 0.23, 0.96]
};

export const DURATIONS = {
  entrance: 0.8,
  exit: 0.4,
  hover: 0.2,
  scrollReveal: 0.6
};

export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease: EASINGS.quick }
};

export const buttonTap = {
  scale: 0.95
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: EASINGS.default } 
  }
};
