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
      name: "Cruising350",
      description:
        "Instagram-inspired platform dedicated to Royal Enfield Classic 350 riders. Features photo sharing, rider stories, and community engagement.",
      technologies: ["React", "Firebase", "CSS"],
      githubLink: "https://github.com/VinayakxSingh/Cruising350",
      liveDemoLink: "https://cruising350.netlify.app/",
      imageSrc: "/cruising.png",
    },
    {
      name: "HIX Cosmetics",
      description:
        "A sleek e-commerce platform for cosmetic products with animations and effects. Includes product filtering, cart functionality, and wishlist features.",
      technologies: ["React", "CSS", "Framer Motion"],
      githubLink: "https://github.com/VinayakxSingh/HIX",
      liveDemoLink: "https://hix-cosmetics.netlify.app/",
      imageSrc: "/hix.png",
    },
    {
      name: "NeighbourGov",
      description:
        "A civic engagement portal to submit and vote on local issues. Built to create transparency between citizens and local governments.",
      technologies: ["React", "Firebase", "Node.js"],
      githubLink: "https://github.com/VinayakxSingh/NeighbourGov",
      liveDemoLink: "https://neighbour-gov.vercel.app/",
      imageSrc: "/ng.png",
    },
    {
      name: "MovieHub",
      description:
        "Movie discovery app using OMDb API, allowing users to search for movies, create watchlists, and view detailed information about films.",
      technologies: ["React", "OMDb API", "CSS"],
      githubLink: "https://github.com/VinayakxSingh/MOVIEHUB",
      liveDemoLink: "https://moviehub-delta-seven.vercel.app/",
      imageSrc: "/movies.png",
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
