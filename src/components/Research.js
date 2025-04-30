"use client";

import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
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
    {
      title: "디지털 시대의 경제 질서 워크숍",
      description:
        "디지털 경제 질서 연구에 대한 워크숍 결과물과 주요 연구 과제",
      link: "/digital-economy-workshop",
    },
  ];

  const publications = [
    {
      title:
        "Governance in the Age of AI: Towards a New Paradigm of Human-AI Collaborative Governance",
      authors: [
        {
          name: "유호현",
          englishName: "Hohyon Ryu",
          affiliation: "태재미래전략연구원",
          englishAffiliation: "Taejae Future Consensus Institute",
        },
        {
          name: "노가빈",
          englishName: "Gabin Noh",
          affiliation: "서울대학교, 태재미래전략연구원",
          englishAffiliation: "Seoul National University",
        },
        {
          name: "유재연",
          englishName: "Jaeyoun You",
          affiliation: "서울대학교, 태재미래전략연구원",
          englishAffiliation: "Seoul National University",
        },
      ],
      conference:
        "Dg.o2025 - 26th Annual International Conference on Digital Government Research",
      description:
        "This paper proposes a new governance paradigm that leverages the synergistic intelligence between humans and AI systems. It addresses the challenges in digital governance while suggesting practical frameworks for implementation.",
      fileLink:
        "/static/publications/DGO2025_camera-ready-paper-templatePH_final_resubmint.pdf",
    },
    {
      title: "인간-AI 결합 에이전트의 시너제틱 인텔리전스 거버넌스 모델 제안",
      englishTitle:
        "Proposing a Synergetic Intelligence Governance Model for 'Human-AI' Agents",
      authors: [
        {
          name: "유호현",
          englishName: "Hohyon Ryu",
          affiliation: "태재미래전략연구원",
          englishAffiliation: "Taejae Future Consensus Institute",
          email: "hohyon@fcinst.org",
        },
        {
          name: "유재연",
          englishName: "Jaeyoun You",
          affiliation: "서울대학교, 태재미래전략연구원",
          englishAffiliation: "Seoul National University",
          email: "you.jae@snu.ac.kr",
        },
        {
          name: "노가빈",
          englishName: "Gabin Noh",
          affiliation: "서울대학교, 태재미래전략연구원",
          englishAffiliation: "Seoul National University",
          email: "lvlcs5124@gmail.com",
        },
        {
          name: "황혜민",
          englishName: "Hyemin Hwang",
          affiliation: "태재미래전략연구원",
          englishAffiliation: "Taejae Future Consensus Institute",
          email: "elly25727766@gmail.com",
        },
      ],
      conference: "2025 한국HCI학회 학술대회",
      venue: "소노벨 비발디파크 (홍천), February 10-12, 2025",
      description:
        "본 연구는 인간과 AI의 협력적 의사결정 모델을 제안하며, 디지털 거버넌스 환경에서 시너지 효과를 극대화하는 방법론을 탐색합니다.",
      fileLink:
        "/static/publications/HCI 2025 인간-AI 결합 에이전트의 시너제틱 인텔리전스 거버넌스 모델 제안.pdf",
    },
  ];

  // Simple title animation using intersection observer
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Research areas animation using intersection observer
  const { ref: areasRef, inView: areasInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Publications animation using intersection observer
  const { ref: pubRef, inView: pubInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Posters animation using intersection observer
  const { ref: postersRef, inView: postersInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="research">
      <div className="research-content">
        <h2
          ref={titleRef}
          className={titleInView ? "animate-scale visible" : "animate-scale"}
        >
          Research Areas
        </h2>

        <div ref={areasRef} className="research-areas">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className={`research-area-card ${
                areasInView ? "animate-fade-up visible" : "animate-fade-up"
              }`}
              style={{
                transitionDelay: `${0.1 * index}s`,
              }}
            >
              <h3>
                {index === 2 || index === 3 ? (
                  <span className="highlight">{area.title}</span>
                ) : (
                  area.title
                )}
              </h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>

        <h2
          ref={pubRef}
          className={pubInView ? "animate-scale visible" : "animate-scale"}
        >
          Publications
        </h2>

        <div className="publications-grid">
          {publications.map((publication, index) => (
            <div
              key={index}
              className={`publication-card ${
                pubInView ? "animate-fade-left visible" : "animate-fade-left"
              }`}
              style={{
                transitionDelay: `${0.2 * index}s`,
              }}
            >
              <h3>{publication.title}</h3>
              {publication.englishTitle && (
                <p className="publication-english-title">
                  {publication.englishTitle}
                </p>
              )}

              {publication.authors && (
                <div className="publication-authors">
                  {publication.authors.map((author, authorIndex) => (
                    <div key={authorIndex} className="author-info">
                      {author.name} ({author.englishName}), {author.affiliation}
                    </div>
                  ))}
                </div>
              )}

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

        <h2
          ref={postersRef}
          className={postersInView ? "animate-scale visible" : "animate-scale"}
        >
          Research Posters
        </h2>

        <div className="research-posters">
          {researchPosters.map((poster, index) => (
            <div
              key={index}
              className={`research-poster-card ${
                postersInView
                  ? "animate-fade-right visible"
                  : "animate-fade-right"
              }`}
              style={{
                transitionDelay: `${0.1 * index}s`,
              }}
            >
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
