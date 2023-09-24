import React from "react";
import "./styles.css";

const Background: React.FC = () => {
  return (
    <section className="background-section">
      <div className="background-image-container">
        <img
          src="./IMG_20230705_230300_255.jpg"
          alt="It's me smiling and waving"
          className="background-image"
        />
      </div>

      <div className="background-content">
        <h2>About Me</h2>
        <p>
          A brief introduction about myself. Where I come from, my background in
          web development, and some personal tidbits.
        </p>
      </div>
    </section>
  );
};

export default Background;
