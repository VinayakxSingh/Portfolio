import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Please Enter Your Full Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Please enter your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Please enter your message"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>

      <div className="direct-mail-container">
        <p className="or-text">or</p>
        <a
          href="mailto:vinayaksinghforyou@gmail.com"
          className="mail-me-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          📧 Mail Me Directly
        </a>
      </div>
    </section>
  );
};

export default Contact;
