"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

const AnimateOnScroll = ({
  children,
  className = "",
  threshold = 0.2,
  triggerOnce = true,
  animation = "fade-in",
  delay = 0,
  duration = 0.5,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const animationStyles = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(30px)",
    transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
    transitionDelay: `${delay}s`,
    willChange: "opacity, transform",
  };

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${className} ${
        inView ? animation + " visible" : ""
      }`}
      style={animationStyles}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
