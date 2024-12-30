import React, { useEffect, useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="header">
      <div
        className="banner-image"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/static/resolution_taedi.jpg')`,
          transform: `translate3d(0, ${offset * 0.4}px, 0)`,
        }}
      />
      <div className="header-content">
        <h1>태재미래전략연구원</h1>
        <h2>디지털 변혁 팀</h2>
        <p className="header-subtitle">
          디지털이 가져올 사회변혁을 연구하고, 건강하고 안전한 미래를 위한
          새로운 거버넌스 체계를 설계
        </p>
      </div>
    </header>
  );
};

export default Header;
