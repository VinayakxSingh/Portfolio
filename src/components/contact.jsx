import React, { forwardRef, useState } from "react";
import "../styles/contact.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please fill out all fields.",
      });
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_rchjiqk", // Your EmailJS service ID
        "template_ziqdo6b", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "42oxAFwjI1Xp4-W66" // Your EmailJS public key
      )
      .then((result) => {
        console.log("Email sent successfully!", result.text);
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thanks for your message! I'll get back to you soon.",
        });

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setFormStatus({
          submitted: true,
          success: false,
          message: "Oops! Something went wrong. Please try again later.",
        });
      });
  };

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="section-header">
        <h2>Get in Touch</h2>
        <p className="section-subtitle">
          Let's work together on your next project
        </p>
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Contact Information</h3>
          <p>
            Feel free to reach out if you have any questions or just want to
            connect.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <a href="mailto:vinayaksinghforyou@gmail.com">
                  vinayaksinghforyou@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>New Delhi, India</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div className="contact-text">
                <h4>GitHub</h4>
                <a
                  href="https://github.com/VinayakxSingh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/VinayakxSingh
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div className="contact-text">
                <h4>LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/vinayak-singh-8ab2442ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/vinayak-singh
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            {formStatus.submitted && (
              <div
                className={`form-message ${
                  formStatus.success ? "success" : "error"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Hi Vinayak, I'd like to discuss a project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>

          <div className="direct-mail-container">
            <p className="or-text">or</p>
            <motion.a
              href="mailto:vinayaksinghforyou@gmail.com"
              className="mail-me-btn"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              📧 Mail Me Directly
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Contact;
