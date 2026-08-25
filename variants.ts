export type FadeDirection = "up" | "down" | "left" | "right";

export const fadeIn = (direction: FadeDirection, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween" as const,
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8] as const,
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween" as const,
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75] as const,
      },
    },
  };
};
