import React from "react";
import "../styles/Team.css";

const Team = () => {
  return (
    <section
      className="team"
      id="team-section"
      itemScope
      itemType="https://schema.org/ResearchOrganization"
    >
      <div className="team-content">
        <h2>Our Team</h2>
        <div className="team-introduction">
          <p itemProp="description">
            The Digital Transformation and Social Changes Team researches the
            impact of rapidly evolving digital technologies on social structures
            and human relationships, providing solutions for a healthy and safe
            future. Through synergy between AI and humans, we design governance
            models for future society and present visions for bridging the
            digital divide and democratizing technology use.
          </p>

          <div className="team-members" itemProp="members">
            <div
              className="team-member"
              itemScope
              itemType="https://schema.org/Person"
            >
              <h4>
                <span itemProp="name">Hohyon Ryu</span>{" "}
                <span className="member-role" itemProp="jobTitle">
                  Team Leader
                </span>
              </h4>
              <div className="member-info">
                <ul>
                  <li itemProp="description">
                    Digital transformation expert with leadership experience at
                    oxopolitics and Tobl.ai Inc.
                  </li>
                  <li>
                    Studied humanities at{" "}
                    <span itemProp="alumniOf">Yonsei University</span> and
                    completed Ph.D. coursework in Information Science at the{" "}
                    <span itemProp="alumniOf">University of Texas</span>
                  </li>
                  <li>
                    Engineering experience at{" "}
                    <span itemProp="worksFor">Twitter</span> and{" "}
                    <span itemProp="worksFor">Airbnb</span>
                  </li>
                  <li>
                    Author of multiple publications including "Drawing Silicon
                    Valley," "The Best Companies Created by Selfish Employees,"
                    "The OXO Playbook," and "AI, War of the Gods"
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="team-member"
              itemScope
              itemType="https://schema.org/Person"
            >
              <h4>
                <span itemProp="name">Gabin Noh</span>{" "}
                <span className="member-role" itemProp="jobTitle">
                  Researcher
                </span>
              </h4>
              <div className="member-info">
                <ul>
                  <li itemProp="description">
                    Completed Ph.D. coursework in Sociology at{" "}
                    <span itemProp="alumniOf">Seoul National University</span>
                  </li>
                  <li>
                    Focus on changes in work environments due to technology
                    adoption
                  </li>
                  <li>
                    Expertise in labor relations, industrial development paths,
                    and policy analysis
                  </li>
                  <li>
                    Contributing to digital governance models using collective
                    intelligence
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="team-member"
              itemScope
              itemType="https://schema.org/Person"
            >
              <h4>
                <span itemProp="name">Jaeyoun You</span>{" "}
                <span className="member-role" itemProp="jobTitle">
                  Researcher
                </span>
              </h4>
              <div className="member-info">
                <ul>
                  <li itemProp="description">
                    Venture capital partner specializing in Human-Computer
                    Interaction (HCI)
                  </li>
                  <li>
                    Completed Ph.D. coursework in Intelligence and Information
                    at{" "}
                    <span itemProp="alumniOf">Seoul National University</span>
                  </li>
                  <li>
                    Currently invests in AI, media, and platform startups at
                    Yellow Dog
                  </li>
                  <li>
                    Former journalist with deep understanding of
                    technology-society intersection
                  </li>
                  <li>Author of "Learning Professions" (2024)</li>
                  <li>
                    Researches methods for harmonious synergy between AI and
                    humans
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="team-member"
              itemScope
              itemType="https://schema.org/Person"
            >
              <h4>
                <span itemProp="name">Minho Kim</span>{" "}
                <span className="member-role" itemProp="jobTitle">
                  Researcher
                </span>
              </h4>
              <div className="member-info">
                <ul>
                  <li itemProp="description">
                    Ph.D. coursework in Science and Technology Studies at{" "}
                    <span itemProp="alumniOf">Korea University</span>
                  </li>
                  <li>
                    Master's in Policy Studies from{" "}
                    <span itemProp="alumniOf">
                      Seoul National University's Graduate School of Public
                      Administration
                    </span>
                  </li>
                  <li>
                    Research experience at Korea Medium Enterprise Research
                    Institute and Small and Medium Enterprise Research Institute
                  </li>
                  <li>
                    Expert in science and technology policy, regulations, and
                    data analysis
                  </li>
                  <li>
                    Specializes in providing data-based policy direction for the
                    digital era
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="team-member"
              itemScope
              itemType="https://schema.org/Person"
            >
              <h4>
                <span itemProp="name">Junyoung Yoon</span>{" "}
                <span className="member-role" itemProp="jobTitle">
                  Researcher
                </span>
              </h4>
              <div className="member-info">
                <ul>
                  <li itemProp="description">
                    Master's degree in Political Science and International
                    Relations from{" "}
                    <span itemProp="alumniOf">Korea University</span>
                  </li>
                  <li>
                    Thesis on "Research on the Domestic Implementation of the
                    Trade-Related Aspects of Intellectual Property Rights
                    (TRIPs) Agreement"
                  </li>
                  <li>
                    Experience planning and facilitating seminars and forums at
                    Future Design Lab/Policy Innovation Lab at Yeosijae
                  </li>
                  <li>
                    Strong communication skills for conveying complex digital
                    governance issues to the public
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="team-member"
              itemScope
              itemType="https://schema.org/Person"
            >
              <h4>
                <span itemProp="name">Suyeon Son</span>{" "}
                <span className="member-role" itemProp="jobTitle">
                  Intern
                </span>
              </h4>
              <div className="member-info">
                <ul>
                  <li itemProp="description">
                    Currently studying International Relations at the{" "}
                    <span itemProp="alumniOf">University of Seoul</span>
                  </li>
                  <li>
                    Responsible for global case studies and data collection
                  </li>
                  <li>
                    Supports research result organization and visualization
                  </li>
                  <li>Promotes research findings through social media</li>
                  <li>
                    Interest in international cooperation and governance models
                    in the digital environment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
