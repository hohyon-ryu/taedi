"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Vision.css";

const Vision = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: missionRef, inView: missionInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      className="vision"
      id="vision-section"
      itemScope
      itemType="https://schema.org/Thing"
    >
      <div className="vision-content">
        <h2
          ref={titleRef}
          className={titleInView ? "animate-scale visible" : "animate-scale"}
        >
          Team Vision & Mission
        </h2>

        <div
          className={`vision-goal ${
            visionInView ? "animate-fade-up visible" : "animate-fade-up"
          }`}
          ref={visionRef}
        >
          <h3>Vision</h3>
          <p itemProp="description">
            Creating a future where technology empowers positive social
            transformation through equitable digital solutions, inclusive
            governance frameworks, and sustainable innovation practices. We
            envision a society where technological advancements harmoniously
            integrate with human needs, enhancing quality of life while
            preserving core social values and promoting collective well-being.
          </p>
        </div>

        <div
          className={`vision-goal ${
            missionInView ? "animate-fade-up visible" : "animate-fade-up"
          }`}
          ref={missionRef}
          style={{
            transitionDelay: "0.2s",
          }}
        >
          <h3>Mission</h3>
          <p itemProp="slogan">
            Understanding and shaping comprehensive social transformations in
            the digital age
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
