import { useForm, ValidationError } from "@formspree/react";
import "./styles.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xayglgon");
  if (state.succeeded) {
    return <p>We'll be in touch!</p>;
  }
  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Or send me an e-mail...</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@domain.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
