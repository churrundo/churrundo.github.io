import React, { useRef } from "react";
import "./styles.css";

const Header: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header-container">
      <div className="hero">
        <img src="/profile-pic.jpg" alt="Profile" className="profile-image" />
        <h1 className="header-name">Juan Pablo Maurer</h1>
        <p className="header-tagline">
          Full-Stack Web Developer | Intuition Driver | Perpetually Curious
        </p>
        <button className="header-cta" onClick={handleScrollToAbout}>
          Learn More
        </button>
      </div>
    </header>
  );
};

export default Header;
