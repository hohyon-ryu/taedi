import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <h1>Taejae Future Consensus Institute</h1>
        <h2>Digital Transformation Team</h2>
        <p className="header-subtitle">
          Pioneering the future through digital transformation research and
          innovative governance solutions for a sustainable tomorrow
        </p>
        <Link to="/okr" className="header-link">
          2025 Goals
        </Link>
      </div>
    </header>
  );
};

export default Header;
