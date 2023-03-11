export const containerAnim = {
  hidden: {
    opacity: 1,
    height: 0,
    transition: {
      duration: 0.7,
      delay: 0.4,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    height: "100%",
    transition: {
      duration: 0.3,
      delayChildren: 0.34,
      staggerChildren: 0.13,
    },
  },
};

export const itemAnim = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
