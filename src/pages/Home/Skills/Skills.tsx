import React from 'react';
import './styles.css';

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* ... add other skills as needed */}
      </ul>
    </section>
  );
};

export default Skills;
