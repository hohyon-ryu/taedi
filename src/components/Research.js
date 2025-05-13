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
      title: "Digital Economy & New Economic Order",
      description:
        "Analyzing changes in ownership concepts, regulatory frameworks, taxation systems, and distribution principles in the digital economy",
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
      title: "경제학 기초 (Economy 101)",
      description: "디지털 시대의 경제 원리를 이해하기 위한 기초 개념 소개",
      link: "/economy-101",
    },
    {
      title: "디지털 시대 경제 질서의 제도화 - 경제 제도 (김민호)",
      description:
        "디지털 혁명으로 인한 글로벌 경제 질서 변화와 국가 간 경제 제도, 규범의 재구성 연구",
      link: "/digital-economy/economic-institutions",
      onePagerLink: "/digital-economy/economic-institutions/one-pager",
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

  const audioContent = [
    {
      title: "개인 강화, 공동체, 국가의 변화",
      description:
        "개인의 강화로 사회와 경제질서가 어떻게 변하는지에 대한 이야기",
      link: "/individual-empowerment",
      type: "audio",
    },
    {
      title: "유발 하라리 - 넥서스 한국어 대담",
      description:
        "유발 하라리의 새 책 '넥서스'를 통한 AI 시대의 정보 네트워크와 인류의 미래에 대한 통찰",
      link: "/yuval-harari-nexus",
      type: "audio",
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

  // Audio content animation using intersection observer
  const { ref: audioRef, inView: audioInView } = useInView({
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
              <div className="button-container">
                <Link href={poster.link} className="view-poster-btn">
                  View Poster
                </Link>
                {poster.onePagerLink && (
                  <Link
                    href={poster.onePagerLink}
                    className="view-poster-btn ml-2"
                    style={{ marginLeft: "8px" }}
                  >
                    View One-Pager
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2
          ref={audioRef}
          className={audioInView ? "animate-scale visible" : "animate-scale"}
        >
          Audio Content
        </h2>

        <div className="audio-content">
          {audioContent.map((content, index) => (
            <div
              key={index}
              className={`audio-content-card ${
                audioInView ? "animate-fade-up visible" : "animate-fade-up"
              }`}
              style={{
                transitionDelay: `${0.1 * index}s`,
              }}
            >
              <h3>
                <Link href={content.link}>{content.title}</Link>
              </h3>
              <p>{content.description}</p>
              <Link href={content.link} className="listen-audio-btn">
                Listen Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
