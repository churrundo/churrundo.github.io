import React, { forwardRef } from "react";
import "./styles.css";
import ScrollDownIcon from "../../../components/ScrollDownIcon";

interface SkillsProps {
  scrollTo: () => void;
}

const Skills = forwardRef<HTMLDivElement, SkillsProps>((props, ref) => {
  return (
    <section ref={ref} className="skills-section">
      <h2>My Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* ... add other skills as needed */}
      </ul>
      <ScrollDownIcon scrollTo={props.scrollTo} />
    </section>
  );
});

export default Skills;
