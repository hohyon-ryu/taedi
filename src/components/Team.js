import React from "react";
import "../styles/Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "유호현",
      role: "팀장",
      expertise: "AI 기술과 거버넌스 융합 연구 전문가",
      email: "hohyon@fcinst.org",
    },
    {
      name: "노가빈",
      role: "연구원",
      expertise: "사회학 관점의 거버넌스 연구",
      email: "gabin@fcinst.org",
    },
    {
      name: "유재연",
      role: "연구원",
      expertise: "HCI 및 인간-AI 상호작용 연구",
      email: "jaeyeon@fcinst.org",
    },
    {
      name: "황혜민",
      role: "인턴",
      expertise: "글로벌 사례 연구 및 지원",
      email: "hyemin@fcinst.org",
    },
  ];

  const publications = [
    "HCI Korea 2025",
    "Journal of Future Studies",
    "AI & Society",
  ];

  return (
    <section className="team">
      <div className="team-content">
        <h2>연구진 프로필</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <div className="member-avatar">{member.name.charAt(0)}</div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-expertise">{member.expertise}</p>
              <a href={`mailto:${member.email}`} className="member-email">
                {member.email}
              </a>
            </div>
          ))}
        </div>

        <div className="publications">
          <h2>학술 성과</h2>
          <div className="publications-list">
            <h3>논문 출판 계획 (2024-2025)</h3>
            <ul>
              {publications.map((pub, index) => (
                <li key={index}>{pub}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
