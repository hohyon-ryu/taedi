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

  const projects = [
    {
      title: "Synergetic Agent (SA) Development Project",
      status: "In Progress",
      completion: 75,
    },
    {
      title: "Multi-layer Community Governance Platform",
      status: "Planning",
      completion: 30,
    },
    {
      title: "Digital Synergy Governance Framework Development",
      status: "In Progress",
      completion: 60,
    },
    {
      title: "Empirical Study: Community-based Pilot Project",
      status: "Preparing",
      completion: 15,
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

        <h2>Major Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-status">Status: {project.status}</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${project.completion}%` }}
                ></div>
              </div>
              <span className="completion">{project.completion}% Complete</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
