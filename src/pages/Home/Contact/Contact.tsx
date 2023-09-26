import React, { forwardRef } from "react";
import "./styles.css";
import ScrollDownIcon from "../ScrollDownIcon";

interface ContactProps {
  scrollTo: () => void;
}

const Contact = forwardRef<HTMLDivElement, ContactProps> (( props, ref ) => {
  return (
    <section ref={ref} className="contact-section">
      <h2>Contact Me</h2>
      <p>
        If you'd like to get in touch, feel free to reach out via{" "}
        <a href="mailto:your.email@example.com">email</a> or connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/your-profile/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
      <ScrollDownIcon scrollTo ={props.scrollTo} />
    </section>
  );
});

export default Contact;
