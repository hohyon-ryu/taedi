"use client";

import React, { useEffect, useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    // Using passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div
        className="banner-image"
        style={{
          backgroundImage: `url('/static/resolution_taedi.jpg')`,
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
      </div>
    </header>
  );
};

export default Header;
