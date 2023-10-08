import React, { forwardRef } from "react";
import "./styles.css";
import BackToTopIcon from "../../../components/BackToTopIcon";
import ContactForm from "./ContactForm";

interface ContactProps {
  scrollTo: () => void;
}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  return (
    <section ref={ref} className="contact-section">
      <div className="contact-section-content">
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/juan-pablo-maurer-developer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/churrundo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="https://drive.google.com/file/d/1MqNI8ulqGVrhAxKVLgEP8tBmIZMRth5C/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
        <ContactForm />
      </div>

      <BackToTopIcon scrollTo={props.scrollTo} />
    </section>
  );
});

export default Contact;
