import React from "react";
import "../styles/skills.css";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiRedux,
  SiVite,
} from "react-icons/si";
import { MdApi, MdSecurity } from "react-icons/md";
import { FiLayout } from "react-icons/fi";

const MySkills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <p className="skills-intro">
        Tools and technologies I confidently work with:
      </p>
      <div className="skills-list">
        <div className="skill-item">
          <FaPython className="skill-icon" />
          <span>Python</span>
          <span className="skill-category">Language</span>
        </div>
        <div className="skill-item">
          <SiMongodb className="skill-icon" />
          <span>MongoDB</span>
          <span className="skill-category">Database</span>
        </div>
        <div className="skill-item">
          <SiExpress className="skill-icon" />
          <span>Express.js</span>
          <span className="skill-category">Backend</span>
        </div>
        <div className="skill-item">
          <FaReact className="skill-icon" />
          <span>React.js</span>
          <span className="skill-category">Frontend</span>
        </div>
        <div className="skill-item">
          <FaNodeJs className="skill-icon" />
          <span>Node.js</span>
          <span className="skill-category">Backend</span>
        </div>
        <div className="skill-item">
          <SiJavascript className="skill-icon" />
          <span>JavaScript (ES6+)</span>
          <span className="skill-category">Language</span>
        </div>
        <div className="skill-item">
          <FaHtml5 className="skill-icon" />
          <span>HTML & CSS</span>
          <span className="skill-category">Frontend</span>
        </div>
        <div className="skill-item">
          <MdApi className="skill-icon" />
          <span>RESTful APIs</span>
          <span className="skill-category">Backend</span>
        </div>
        <div className="skill-item">
          <SiRedux className="skill-icon" />
          <span>Redux</span>
          <span className="skill-category">Frontend</span>
        </div>
        <div className="skill-item">
          <FaGitAlt className="skill-icon" />
          <span>Git & GitHub</span>
          <span className="skill-category">Tools</span>
        </div>
        <div className="skill-item">
          <FiLayout className="skill-icon" />
          <span>Responsive Design</span>
          <span className="skill-category">Frontend</span>
        </div>
        <div className="skill-item">
          <SiVite className="skill-icon" />
          <span>Vite</span>
          <span className="skill-category">Build Tool</span>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
