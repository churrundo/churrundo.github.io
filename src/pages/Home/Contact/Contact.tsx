import React from 'react';
import './styles.css';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out via <a href="mailto:your.email@example.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
    </section>
  );
};

export default Contact;