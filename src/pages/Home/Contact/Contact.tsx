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
      <h3>Interested in collaborating? Let's get in touch!</h3>
      <div className="contact-section-content">
        <div className="contact-links">
          <button
            className="contact-button"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/juan-pablo-maurer-developer/",
                "_blank"
              )
            }
          >
            <img
              src="/icons/linkedin-square.svg"
              alt="LinkedIn"
              className="link-icon"
            />
            <span>Connect with me on LinkedIn</span>
          </button>
          <button
            className="contact-button"
            onClick={() =>
              window.open("https://github.com/churrundo", "_blank")
            }
          >
            <img
              src="/icons/github-square.svg"
              alt="GitHub"
              className="link-icon"
            />
            <span>Check out my GitHub</span>
          </button>
          <button
            className="contact-button"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1MqNI8ulqGVrhAxKVLgEP8tBmIZMRth5C/view?usp=sharing",
                "_blank"
              )
            }
          >
            <img
              src="/icons/document.svg"
              alt="Download CV"
              className="link-icon"
            />
            <span>Download my CV</span>
          </button>
        </div>        
        <ContactForm />
      </div>

      <BackToTopIcon scrollTo={props.scrollTo} />
    </section>
  );
});

export default Contact;
