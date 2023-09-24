import React from "react";
import "./styles.css";

import Header from "./Header";
import Background from "./Background";
import Skills from "./Skills";
import Contact from "./Contact";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header />
      <Background />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
