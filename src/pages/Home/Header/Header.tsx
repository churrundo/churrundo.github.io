import React from "react";
import "./styles.css";

interface HeaderProps {
  scrollTo: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollTo }) => {
  return (
    <header className="header-container">
      <div className="hero">
        <img src="/profile-pic.jpg" alt="Profile" className="profile-image" />
        <h1 className="header-name">Juan Pablo Maurer</h1>
        <p className="header-tagline">
          Full-Stack Web Developer | Intuition Driver | Perpetually Curious
        </p>
      </div>
      <button className="arrow-button" onClick={scrollTo}>
        <img
          src="/icons/arrow-square-down-f.svg"
          alt="Scroll down"
          className="arrow-icon"
        />
      </button>
    </header>
  );
};

export default Header;
