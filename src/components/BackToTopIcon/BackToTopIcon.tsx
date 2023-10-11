import React from "react";
import "./styles.css"

interface BackToTopIconProps {
    scrollTo: () => void;
}

const BackToTopIcon: React.FC<BackToTopIconProps> = ({scrollTo}) => {
return (<button className="chevron-button" onClick={scrollTo}>
  <img
    src="/icons/chevrons-square-up-f.svg"
    alt="Back to top"
    className="chevron-icon"
  />
</button>)
};

export default BackToTopIcon