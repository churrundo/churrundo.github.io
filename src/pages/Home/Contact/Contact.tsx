import React, { forwardRef, useState } from "react";
import "./styles.css";
import BackToTopIcon from "../../../components/BackToTopIcon";
import ContactForm from "./ContactForm";

interface ContactProps {
  scrollTo: () => void;
}

const Contact = forwardRef<HTMLDivElement, ContactProps>((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section ref={ref} className="contact-section">
      <h3>Interested in collaborating? Let's get in touch!</h3>
      <div className="contact-section-content">
        <div className="contact-links">
          <button
            className="btn"
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
            Connect with me on LinkedIn
          </button>
          <button
            className="btn"
            onClick={() =>
              window.open("https://github.com/churrundo", "_blank")
            }
          >
            <img
              src="/icons/github-square.svg"
              alt="GitHub"
              className="link-icon"
            />
            Check out my GitHub
          </button>
          <button
            className="btn"
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
            Download my CV
          </button>
          {isModalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button onClick={handleCloseModal} className="close-modal-button">
                X
              </button>
              <ContactForm />
            </div>
          </div>
        )}
        <button className="btn" onClick={handleOpenModal}>
          <img
            src="/icons/envelope.svg"
            alt="Contact Me"
            className="link-icon"
          />
          Contact Me
        </button>
        </div>
      </div>

      <BackToTopIcon scrollTo={props.scrollTo} />
    </section>
  );
});

export default Contact;
