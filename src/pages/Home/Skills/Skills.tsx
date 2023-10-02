import React, { forwardRef } from "react";
import "./styles.css";
import ScrollDownIcon from "../../../components/ScrollDownIcon";
import SkillCard from "./SkillCard";

interface SkillsProps {
  scrollTo: () => void;
}

const Skills = forwardRef<HTMLDivElement, SkillsProps>((props, ref) => {
  const skillsData = [
    {
      name: "React",
      logo: "/icons/MERN/react-svgrepo-com.svg",
      description:
        "Only until my final project did I get a general 'feel' for what React allows. A hierarchy of agents that keep track of and operate on the different parts of my frontend's behavior. Alternatives I'm curious about, Vue and Svelte.",
    },
    {
      name: "Node JS",
      logo: "/icons/MERN/node-js-svgrepo-com.svg",
      description:
        "JavaScript beyond the browser. I still feel somewhat like Danny-San painting fences and waxing cars in what I can do with it, but hey, the server's serving! Curious about Bun, which came out a week after I finished my bootcamp.",
    },
    {
      name: "Express JS",
      logo: "/icons/MERN/express-svgrepo-com.svg",
      description:
        "Part of my unfamiliarity with Node in general comes from the fact that I've only ever used it within the the single framework of Express. It's been reliable for building APIs, but I've got my eye on exploring Next.js for its integration with React by design.",
    },
    {
      name: "Mongo DB",
      logo: "/icons/MERN/mongo-svgrepo-com.svg",
      description:
        "I learned a valuable lesson about databases in general during my final project: the limit to their usefulness is the quality of your data structure. Still, I'm curious about what's the deal with SQL",
    },
  ];

  return (
    <section ref={ref} className="skills-section">
      <div className="skills-header">
        <h2>My Core Skills</h2>
        <p>
          By no means an expert in any of these, but these are the technologies
          I am trained in (Hover or click any for a summary of my understanding
          of it).
        </p>
      </div>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            logo={skill.logo}
            description={skill.description}
          />
        ))}
      </div>
      <ScrollDownIcon scrollTo={props.scrollTo} />
    </section>
  );
});

export default Skills;
