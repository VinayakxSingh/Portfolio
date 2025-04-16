import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import Education from "./Education";
import Projects from "./projects";
import AboutMe from "./aboutme";
import MySkills from "./myskills";
import Contact from "./contact";
const greetings = ["Hey", "नमस्ते", "Hola", "Bonjour", "Salaam"];
const staticPart = " Welcome to My portfolio";

const Hero = () => {
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 100;

  useEffect(() => {
    const fullText = `${greetings[greetingIndex]}${staticPart}`;

    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [charIndex, greetingIndex]);

  useEffect(() => {
    if (charIndex === 0) {
      setGreetingIndex(0);
    }
  }, [charIndex]);

  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <p className="typed-text">
            {text}
            {isTyping && <span className="cursor" />}
          </p>
          <p className="subheading">
            I’m Vinayak Singh — a MERN Stack Developer crafting sleek,
            user-focused web apps.
          </p>
          <button className="get-in-touch-btn" onClick={handleGetInTouch}>
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
