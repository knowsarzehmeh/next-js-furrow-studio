export const headingOneVariants = {
  initial: {
    opacity: 0,
    scale: 0.2,
    y: -100,
  },

  animate: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      delay: 1,
    },
  },
};

export const subheadingVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
    },
  },
};

export const headerButtonVariant = {
  initial: {
    opacity: 0,
    x: -1000,
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2,
    },
  },
};

export const serviceSectionVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delayChilden: 0.2, staggerChildren: 0.1 },
  },
};

export const childCardVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};
