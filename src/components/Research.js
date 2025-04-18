import Link from "next/link";
import React from "react";
import "../styles/Research.css";

const Research = () => {
  const researchAreas = [
    {
      title: "Digital Transformation & Social Changes",
      description:
        "Researching how rapidly evolving digital technologies impact social structures and human relationships across individual, family, community, city, and national levels",
    },
    {
      title: "AI-Human Collaborative Governance",
      description:
        "Developing new governance models leveraging synergy between AI and humans while ensuring ethical frameworks for a sustainable digital future",
    },
    {
      title: "Digital Economy & New Economic Order",
      description:
        "Analyzing changes in ownership concepts, regulatory frameworks, taxation systems, and distribution principles in the digital economy",
    },
    {
      title: "Urban-Centered Governance Networks",
      description:
        "Studying the redistribution of traditional state functions to cities and individuals, and how this reshapes power structures and decision-making mechanisms",
    },
    {
      title: "Digital Asset Ownership & Distribution",
      description:
        "Exploring new principles for digital asset ownership, intellectual property rights, and equitable distribution systems in the age of AI",
    },
    {
      title: "Superhuman Capabilities & Community Impact",
      description:
        "Examining how AI enhances human capabilities and transforms communities, with focus on bridging digital divides and promoting democratic use of technology",
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
      title:
        "Governance in the Age of AI: Towards a New Paradigm of Human-AI Collaborative Governance",
      conference:
        "Dg.o2025 - 26th Annual International Conference on Digital Government Research",
      description:
        "AI 거버넌스 패러다임의 변화와 인간-AI 협력적 거버넌스 모델에 관한 연구",
      fileLink:
        "/static/publications/DGO2025_camera-ready-paper-templatePH_final_resubmint.pdf",
      venue:
        "09 – 12 June, Pontifical Catholic University of Rio Grande do Sul, Porto Alegre City, Brazil",
    },
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
              {publication.venue && (
                <p className="publication-venue-details">{publication.venue}</p>
              )}
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
