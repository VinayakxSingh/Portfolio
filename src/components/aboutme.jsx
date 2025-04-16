import React from "react";
import "../styles/aboutme.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-me about-me-v2">
      <div className="about-container">
        <div className="about-image">
          <img src="/profile.jpg" alt="Vinayak Singh" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p className="intro">
            Hi, I'm <span className="spanned">Vinayak Singh</span> — a
            passionate developer crafting meaningful digital experiences.
          </p>
          <p>
            I love building web apps that combine functionality with great UX.
            Currently learning at <span className="spanned">Masai School</span>.
          </p>
          <ul className="highlights">
            <li>
              🚀{" "}
              <span className="spanned">Full-Stack Web Developer (MERN)</span>
            </li>
            <li>
              🎯 <span className="spanned">Built 5+ real-world projects</span>
            </li>
            <li>
              🏸{" "}
              <span className="spanned">
                State-level Badminton Gold Medalist
              </span>
            </li>
            <li>📍 Based in India</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
