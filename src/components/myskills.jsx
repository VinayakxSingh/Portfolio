import React, { forwardRef } from "react";
import "../styles/skills.css";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaGithub,
  FaNpm,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const MySkills = forwardRef((props, ref) => {
  const skillsCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact size={22} />, level: 90 },
        { name: "JavaScript (ES6+)", icon: <FaJs size={22} />, level: 85 },
        { name: "HTML5", icon: <FaHtml5 size={22} />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt size={22} />, level: 90 },
        { name: "Redux", icon: <SiRedux size={22} />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={22} />, level: 80 },
        { name: "TypeScript", icon: <SiTypescript size={22} />, level: 75 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs size={22} />, level: 85 },
        { name: "Express.js", icon: <SiExpress size={22} />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb size={22} />, level: 80 },
        { name: "RESTful APIs", icon: <FaDatabase size={22} />, level: 85 },
        { name: "Firebase", icon: <SiFirebase size={22} />, level: 75 },
      ],
    },
    {
      category: "Tools & Utilities",
      skills: [
        { name: "Git & GitHub", icon: <FaGithub size={22} />, level: 85 },
        { name: "NPM", icon: <FaNpm size={22} />, level: 80 },
        { name: "Vite", icon: <SiVite size={22} />, level: 80 },
        { name: "Figma", icon: <FaFigma size={22} />, level: 70 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="section-header">
        <h2>My Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
      </div>

      <div className="skills-container">
        {skillsCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="skills-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="category-title">{category.category}</h3>

            <motion.div
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skill-card"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <div className="skill-level-container">
                      <div
                        className="skill-level-bar"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="skills-note">
        <p>
          I'm continuously learning and expanding my skillset to stay up-to-date
          with the latest technologies and best practices in web development.
        </p>
      </div>
    </section>
  );
});

export default MySkills;
