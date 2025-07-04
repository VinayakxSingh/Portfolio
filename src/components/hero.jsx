import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import { motion } from "framer-motion";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const greetings = ["Hey", "नमस्ते", "Hola", "Bonjour", "Ciao"];
  const staticPart = " Welcome to My Portfolio";

  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBeforeDelete = 1500;
  const pauseBeforeNewGreeting = 500;

  useEffect(() => {
    const fullText = `${greetings[greetingIndex]}${staticPart}`;

    if (isTyping && !isDeleting) {
      if (charIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);

        return () => clearTimeout(timeout);
      }
    } else if (isDeleting) {
      if (charIndex > greetings[greetingIndex].length) {
        const timeout = setTimeout(() => {
          setText(fullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);

        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        const nextGreetingIndex = (greetingIndex + 1) % greetings.length;
        setGreetingIndex(nextGreetingIndex);

        const timeout = setTimeout(() => {
          setIsTyping(true);
        }, pauseBeforeNewGreeting);

        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, greetingIndex, isDeleting, isTyping]);

  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="typed-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {text}
          {(isTyping || isDeleting) && <span className="cursor" />}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="subheading">
            I'm Vinayak Singh — a{" "}
            <span className="highlight">MERN Stack Developer</span> crafting
            sleek, user-focused web apps.
          </p>

          <div className="hero-buttons">
            <motion.button
              className="primary-button"
              onClick={handleGetInTouch}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>

            <motion.button
              className="secondary-button"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </div>

          <div className="social-links">
            <motion.a
              href="https://github.com/VinayakxSingh21"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#00ff99" }}
              transition={{ duration: 0.2 }}
              className="social-link"
            >
              <FaGithub size={22} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vinayak-singh-8ab2442ab/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#00ff99" }}
              transition={{ duration: 0.2 }}
              className="social-link"
            >
              <FaLinkedin size={22} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p>Scroll Down</p>
          <FaArrowDown className="scroll-arrow" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
