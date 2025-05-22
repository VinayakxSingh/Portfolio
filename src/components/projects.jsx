import "../styles/projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Projects = forwardRef((props, ref) => {
  const projectsData = [
    {
      name: "Todoist",
      description:
        "A productivity app to manage your tasks efficiently. Built with React, featuring task categorization, completion tracking, and responsive design.",
      technologies: ["React", "CSS", "Local Storage"],
      githubLink: "https://github.com/VinayakxSingh/Todoist",
      liveDemoLink: "https://bright-cendol-1e0307.netlify.app/",
      imageSrc: "/todoist.png",
    },
    {
      name: "NeighbourGov",
      description:
        "A React and Firebase platform for community engagement, enabling real-time discussion of local issues with secure authentication.",
      technologies: ["React", "Firebase", "Framer-Motion"],
      githubLink: "https://github.com/VinayakxSingh/NeighbourGov",
      liveDemoLink: "https://neighbour-gov.vercel.app/",
      imageSrc: "/ng.png",
    },
    {
      name: "Investment Tracker",
      description:
        "Track and visualize investment portfolios with real-time data. Built with React and Chart.js for clear financial insights.",
      technologies: [
        "React",
        "Chart.js",
        "CSS",
        "Framer-Motion",
        "Firebase-Authentication",
      ],
      githubLink: "https://github.com/VinayakxSingh/investment-tracker",
      liveDemoLink: "https://investment-tracker-one.vercel.app/",
      imageSrc: "/portvio.png",
    },
    {
      name: "Social-Sect Real Estate",
      description:
        "A high-converting lead generation platform for real estate professionals. This React-based landing page helps agents attract quality leads with smooth animations and a clean, responsive design.",
      technologies: [
        "React",
        "Framer-Motion",
        "React-Icons",
        "Tailwind-CSS",
        "Lenis",
      ],
      githubLink: "https://github.com/VinayakxSingh/Real-estate-landing-page",
      liveDemoLink: "https://real-estate-landing-page-navy.vercel.app/",
      imageSrc: "/socialsect.png",
    },
    {
      name: "MovieHub",
      description:
        "A film discovery app powered by the OMDb API, offering detailed movie information and watchlist features. Built with React and Context API for a seamless browsing experience.",
      technologies: ["React", "OMDb API", "CSS", "Context-API"],
      githubLink: "https://github.com/VinayakxSingh/MOVIEHUB",
      liveDemoLink: "https://moviehub-delta-seven.vercel.app/",
      imageSrc: "/movies.png",
    },
    {
      name: "HIX Cosmetics",
      description:
        "An elegant e-commerce platform for beauty products, featuring a responsive React interface with smooth animations. Includes product filtering, detailed views, and shopping cart functionality. The clean design ensures a seamless shopping experience across all devices.",
      technologies: ["React", "CSS", "Framer Motion"],
      githubLink: "https://github.com/VinayakxSingh/HIX",
      liveDemoLink: "https://hix-psi.vercel.app/",
      imageSrc: "/hix.png",
    },
  ];

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="section-header">
        <h2>Projects</h2>
        <p className="section-subtitle">Explore my recent work</p>
      </div>

      <div className="project-list">
        {projectsData.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              transition: { duration: 0.2 },
            }}
          >
            <div className="project-image-container">
              <img
                src={project.imageSrc}
                alt={`${project.name} Project`}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                    aria-label={`GitHub repository for ${project.name}`}
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo-link"
                    aria-label={`Live demo for ${project.name}`}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
