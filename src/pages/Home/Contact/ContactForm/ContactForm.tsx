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
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
