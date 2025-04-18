import React from "react";
import "../styles/Vision.css";

const Vision = () => {
  return (
    <section
      className="vision"
      id="vision-section"
      itemScope
      itemType="https://schema.org/Thing"
    >
      <div className="vision-content">
        <h2>Team Vision & Mission</h2>
        <div className="vision-goal">
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
        <div className="vision-goal">
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
