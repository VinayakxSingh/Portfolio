import React from "react";
import "../styles/education.css";

const educationData = [
  {
    degree: "Masai School – Full Stack Web Development",
    institution: "Masai School, Bengaluru (Remote)",
    year: "2024",
    achievements: [
      "Graduated in 2024",
      "Built multiple full-stack projects",
      "Learned MERN, DS-Algo, and Agile development",
    ],
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "The Manthan School, Noida",
    year: "2023",
    achievements: [
      "Completed CBSE curriculum",
      "Badminton – State Player (Gold medalist)",
    ],
  },
  {
    degree: "Middle to Secondary School (6th–11th)",
    institution: "Chinmaya Vidyalaya, Nauni",
    year: "2014 – 2022",
    achievements: [
      "Active in sports and academics",
      "Badminton – State Player (2 times)",
    ],
  },
  {
    degree: "Primary School (1st–5th)",
    institution: "Mahavir Senior Model School, Delhi",
    year: "2009 – 2014",
    achievements: ["Foundation years of education"],
  },
];
const Education = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="education-section">
      <h1 className="edu-title">📘 Education</h1>
      <div className="edu-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="edu-card">
            <h2>{edu.degree}</h2>
            <h3>{edu.institution}</h3>
            <p>{edu.year}</p>
            <ul>
              {edu.achievements.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Education;
