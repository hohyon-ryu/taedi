import React from "react";
import "../styles/Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Hohyon Ryu",
      role: "Team Lead",
      expertise: "AI Technology and Governance Integration Expert",
      email: "hohyon@fcinst.org",
    },
    {
      name: "Gabin Noh",
      role: "Researcher",
      expertise: "Governance Research from Sociological Perspective",
      email: "gabin@fcinst.org",
    },
    {
      name: "Jaeyoun You",
      role: "Researcher",
      expertise: "HCI and Human-AI Interaction Research",
      email: "jane@fcinst.org",
    },
    {
      name: "Hyemin Hwang",
      role: "Intern",
      expertise: "Global Case Studies and Support",
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
        <h2>Research Team Profiles</h2>
        <div className="team-intro">
          <p>
            Meet Taedi, our beloved mascot smart bear, whose name combines
            "Taejae" and "Digital". As our team's symbol of innovation and
            wisdom, Taedi represents our commitment to bridging the gap between
            technology and governance in the digital age.
          </p>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/static/team.jpg"}
          alt="TAEDI Research Team"
          className="team-photo"
        />
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
          <h2>Academic Achievements</h2>
          <div className="publications-list">
            <h3>Publication Plan (2024-2025)</h3>
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
