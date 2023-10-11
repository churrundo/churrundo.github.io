import React, {useRef} from "react";
import "./styles.css";

import Header from "./Header";
import Background from "./Background";
import Skills from "./Skills";
import Contact from "./Contact";

const Home: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      <Header  scrollTo={() => handleScrollToSection(backgroundRef)}/>
      <Background ref={backgroundRef} scrollTo={() => handleScrollToSection(skillsRef)}/>
      <Skills ref={skillsRef} scrollTo={() => handleScrollToSection(contactRef)} />
      <Contact ref={contactRef} scrollTo={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
};

export default Home;
