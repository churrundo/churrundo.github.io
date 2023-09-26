import React from "react";
import "./styles.css"

interface ScrollDownIconProps {
    scrollTo: () => void;
}

const ScrollDownIcon: React.FC<ScrollDownIconProps> = ({scrollTo}) => {
return (<button className="arrow-button" onClick={scrollTo}>
  <img
    src="/icons/arrow-square-down-f.svg"
    alt="Scroll down"
    className="arrow-icon"
  />
</button>)
};

export default ScrollDownIcon