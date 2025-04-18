import React from "react";
import styles from "../styles/Team.module.css";

const Team = () => {
  return (
    <section className={styles.team}>
      <div className={styles.teamContent}>
        <div className={styles.teamIntro}>
          <p>
            Meet Taedi, our beloved mascot smart bear, whose name combines
            "Taejae" and "Digital". As our team's symbol of innovation and
            wisdom, Taedi represents our commitment to bridging the gap between
            technology and governance in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
