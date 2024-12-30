import React from "react";
import "../styles/Research.css";

const Research = () => {
  const researchAreas = [
    {
      title: "디지털 시너지 거버넌스 모델 연구",
      description: "디지털 시대의 새로운 거버넌스 모델 개발 및 검증",
    },
    {
      title: "멀티 에이전트 거버넌스 시스템 설계",
      description: "AI 기반 다중 에이전트 시스템의 협력적 의사결정 구조 연구",
    },
    {
      title: "AI-인간 협력 기반 의사결정 구조 연구",
      description: "인공지능과 인간의 효과적인 협력 체계 구축 방안 연구",
    },
    {
      title: "디지털 전환에 따른 사회 변화 연구",
      description: "디지털화가 가져오는 사회적 변화와 대응 방안 분석",
    },
  ];

  const projects = [
    {
      title: "시너제틱 에이전트(SA) 개발 프로젝트",
      status: "진행중",
      completion: 75,
    },
    {
      title: "다층 다면 커뮤니티 거버넌스 플랫폼",
      status: "계획단계",
      completion: 30,
    },
    {
      title: "Digital Synergy Governance 프레임워크 개발",
      status: "진행중",
      completion: 60,
    },
    {
      title: "실증 연구: 커뮤니티 기반 파일럿 프로젝트",
      status: "준비중",
      completion: 15,
    },
  ];

  return (
    <section className="research">
      <div className="research-content">
        <h2>연구 분야</h2>
        <div className="research-areas">
          {researchAreas.map((area, index) => (
            <div key={index} className="research-area-card">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>

        <h2>주요 프로젝트</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-status">상태: {project.status}</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${project.completion}%` }}
                ></div>
              </div>
              <span className="completion">{project.completion}% 완료</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
