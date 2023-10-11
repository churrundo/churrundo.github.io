import React, { useState } from "react";
import "./styles.css";

interface SkillCardProps {
  name: string;
  logo: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, logo, description }) => {
    const [isClicked, setIsClicked] = useState(false);
    
    const toggleClicked = ()=> {
        setIsClicked(!isClicked)
    }

  return (
    <div className={`skill-card ${isClicked ? 'clicked' : ''}`} onClick={toggleClicked}>
      <div className="front">
        <h3>{name}</h3>
        <img src={logo} alt={`${name} logo`} />
      </div>
      <div className="back">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
