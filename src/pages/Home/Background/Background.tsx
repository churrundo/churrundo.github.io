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
    <div className="background-greeting">
        <h2>Hi There!</h2>
        <p>
            I'm Juan Pablo, a 30-year-old from Mexico with a background in
            MERN-stack Web Development and Psychology.
        </p>
    </div>
    <div className="background-journey">
        <h3>My Journey</h3>
        <p>
            After several years of struggling with addiction, I decided to reboot
            my life in 2017 by getting into rehab. Right after that, I studied
            Psychology, which allowed me to consolidate my recovery, develop my
            emotional intelligence, and most importantly discover I had
            undiagnosed ADHD. Finally, with some good hard work and some more
            vocational recalibration, I decided to do a Web Development bootcamp
            and move to Berlin.
        </p>
    </div>
    <div className="background-blend">
        <h3>The Blend</h3>
        <p>
            Having experienced life's lows and the transformative power of
            self-awareness and determination, I bring empathy and a user-centric
            approach to my projects. I understand the importance of accessibility,
            intuitive design, and the overall human experience in digital spaces.
            All of this, with a dash of methylphenidate, gets you a driven,
            curious, gentle, handsome, and witty addition to your team.
        </p>
    </div>
    <div className="background-life">
        <h3>Life Beyond Code</h3>
        <p>
            When I'm not optimizing my LinkedIn with ChatGPT or looking at YouTube
            tutorials for obscure technologies I don't even know the use cases of,
            I am usually reading one of my preferred bloggers, eating with my gf
            at the next restaurant on our to-try list, scratching my dog's belly,
            or curating memes and tiktoks.
        </p>
    </div>
</div>

    </section>
  );
};

export default Background;
