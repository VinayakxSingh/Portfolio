import React, { forwardRef } from "react";
import "../styles/aboutme.css";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCode, FaUserTie, FaMedal } from "react-icons/fa";

const AboutMe = forwardRef((props, ref) => {
  const aboutItems = [
    {
      icon: <FaReact size={24} />,
      title: "MERN Stack Developer",
      description:
        "Specializing in building modern web applications with the MERN stack (MongoDB, Express, React, Node.js).",
    },
    {
      icon: <FaCode size={24} />,
      title: "Clean Code Advocate",
      description:
        "Passionate about writing maintainable, efficient, and well-documented code following best practices.",
    },
    {
      icon: <FaUserTie size={24} />,
      title: "Problem Solver",
      description:
        "Enjoy tackling complex challenges and finding elegant solutions to technical problems.",
    },
    {
      icon: <FaMedal size={24} />,
      title: "Badminton Champion",
      description:
        "State-level badminton gold medalist with a competitive spirit that carries into my development work.",
    },
  ];

  return (
    <section className="about-me" id="about" ref={ref}>
      <div className="section-header">
        <h2>About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
      </div>

      <div className="about-container">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="profile-image-container">
            <img
              src="/profile.jpg"
              alt="Vinayak Singh"
              className="profile-image"
            />
            <div className="image-border"></div>
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="intro">
            Hi, I'm <span className="highlight">Vinayak Singh</span> — a
            passionate developer crafting meaningful digital experiences.
          </p>

          <p className="about-description">
            I'm a full-stack web developer with a strong foundation in the MERN
            stack, currently enhancing my skills at{" "}
            <span className="highlight">Masai School</span>. I combine technical
            expertise with creative problem-solving to build applications that
            are both functional and user-friendly.
          </p>

          <div className="about-highlights">
            {aboutItems.map((item, index) => (
              <motion.div
                className="highlight-item"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <div className="highlight-content">
                  <h3 className="highlight-title">{item.title}</h3>
                  <p className="highlight-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="about-cta">
            <a href="#projects" className="cta-button">
              View My Work
            </a>
            <a href="#contact" className="cta-button secondary">
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default AboutMe;
