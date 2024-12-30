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
        <h1>태재미래전략연구</h1>
        <h2>Taejae Future Consensus Institute</h2>
        <h3>Digital Transformation Team</h3>
        <p className="header-subtitle">
          Pioneering the future through digital transformation research and
          innovative governance solutions for a sustainable tomorrow
        </p>
      </div>
    </header>
  );
};

export default Header;
