import Link from "next/link";
import React from "react";
import "../styles/Research.css";

const Research = () => {
  const researchAreas = [
    {
      title: "Digital Synergy Governance Model Research",
      description:
        "Developing and validating new governance models for the digital age",
    },
    {
      title: "Multi-Agent Governance System Design",
      description:
        "Research on collaborative decision-making structures in AI-based multi-agent systems",
    },
    {
      title: "AI-Human Collaboration Research",
      description:
        "Studying effective cooperation frameworks between artificial intelligence and humans",
    },
    {
      title: "Digital Transformation Impact Study",
      description:
        "Analyzing social changes and response strategies in digital transformation",
    },
  ];

  const researchPosters = [
    {
      title: "디지털 시대의 경제 질서 연구 기획안",
      description:
        "디지털 전환이 가속화됨에 따라 사회 구조와 경제 질서의 변화 연구",
      link: "/digital-economy",
    },
  ];

  const publications = [
    {
      title: "인간-AI 결합 에이전트의 시너제틱 인텔리전스 거버넌스 모델 제안",
      conference: "HCI Korea 2025",
      description: "인간과 AI의 협력 거버넌스 모델에 관한 연구",
      fileLink:
        "/static/publications/HCI 2025 인간-AI 결합 에이전트의 시너제틱 인텔리전스 거버넌스 모델 제안.pdf",
    },
  ];

  return (
    <section className="research">
      <div className="research-content">
        <h2>Research Areas</h2>
        <div className="research-areas">
          {researchAreas.map((area, index) => (
            <div key={index} className="research-area-card">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>

        <h2>Publications</h2>
        <div className="publications-grid">
          {publications.map((publication, index) => (
            <div key={index} className="publication-card">
              <h3>{publication.title}</h3>
              <p className="publication-venue">{publication.conference}</p>
              <p>{publication.description}</p>
              <a
                href={publication.fileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>

        <h2>Research Posters</h2>
        <div className="research-posters">
          {researchPosters.map((poster, index) => (
            <div key={index} className="research-poster-card">
              <h3>
                <Link href={poster.link}>{poster.title}</Link>
              </h3>
              <p>{poster.description}</p>
              <Link href={poster.link} className="view-poster-btn">
                View Poster
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
