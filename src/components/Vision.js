import React from "react";
import "../styles/Vision.css";

const Vision = () => {
  const changes = [
    {
      title: "강화",
      color: "#C7CEEA",
      description: "Enhancement - 디지털 기술을 통한 인간 능력의 확장",
    },
    {
      title: "연결",
      color: "#FEE1E8",
      description: "Hyperconnectivity - 초연결 사회에서의 새로운 관계",
    },
    {
      title: "가속",
      color: "#A0E7E5",
      description: "Acceleration - 기술 발전과 사회 변화의 가속화",
    },
  ];

  return (
    <section className="vision">
      <div className="vision-content">
        <h2>팀 비전 & 미션</h2>
        <div className="vision-goal">
          <h3>2025년 목표</h3>
          <p>디지털 시대의 새로운 거버넌스 체계 정립</p>
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
