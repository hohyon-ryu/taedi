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
        <h1>Taejae Future Consensus Institute</h1>
        <h2>Digital Transformation Team</h2>
        <p className="header-subtitle">
          Researching social transformation through digital technology and
          designing new governance systems for a healthy and secure future
        </p>
      </div>
    </header>
  );
};

export default Header;
