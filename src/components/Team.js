import Image from "next/image";
import React from "react";
import styles from "../styles/Team.module.css";

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
      name: "Minho Kim",
      role: "Researcher",
      expertise: "Research Focus Area",
      email: "minho@fcinst.org",
    },
    {
      name: "Joonyoung Yoon",
      role: "Researcher",
      expertise: "Research Focus Area",
      email: "joonyoung@fcinst.org",
    },
    {
      name: "Suyeon Son",
      role: "Researcher",
      expertise: "Research Focus Area",
      email: "suyeon@fcinst.org",
    },
  ];

  const publications = [
    "HCI Korea 2025",
    "Journal of Future Studies",
    "AI & Society",
  ];

  return (
    <section className={styles.team}>
      <div className={styles.teamContent}>
        <h2>Research Team Profiles</h2>
        <div className={styles.teamIntro}>
          <p>
            Meet Taedi, our beloved mascot smart bear, whose name combines
            "Taejae" and "Digital". As our team's symbol of innovation and
            wisdom, Taedi represents our commitment to bridging the gap between
            technology and governance in the digital age.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/static/team.jpg"
            alt="TAEDI Research Team"
            className={styles.teamPhoto}
            width={800}
            height={500}
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamMemberCard}>
              <div className={styles.memberAvatar}>{member.name.charAt(0)}</div>
              <h3>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <p className={styles.memberExpertise}>{member.expertise}</p>
              <a href={`mailto:${member.email}`} className={styles.memberEmail}>
                {member.email}
              </a>
            </div>
          ))}
        </div>

        <div className={styles.publications}>
          <h2>Academic Achievements</h2>
          <div className={styles.publicationsList}>
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
