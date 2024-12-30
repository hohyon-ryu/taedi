import React from "react";
import "../styles/Vision.css";

const Vision = () => {
  const changes = [
    {
      title: "Enhancement",
      color: "#C7CEEA",
      description: "Expanding human capabilities through digital technology",
    },
    {
      title: "Hyperconnectivity",
      color: "#FEE1E8",
      description: "New relationships in a hyperconnected society",
    },
    {
      title: "Acceleration",
      color: "#A0E7E5",
      description: "Accelerating technological progress and social change",
    },
  ];

  return (
    <section className="vision">
      <div className="vision-content">
        <h2>Team Vision & Mission</h2>
        <div className="vision-goal">
          <h3>2025 Goal</h3>
          <p>Establishing new governance systems for the digital age</p>
        </div>
        <div className="changes-grid">
          {changes.map((change, index) => (
            <div
              key={index}
              className="change-card"
              style={{ backgroundColor: `${change.color}15` }}
            >
              <h3 style={{ color: change.color }}>{change.title}</h3>
              <p>{change.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
