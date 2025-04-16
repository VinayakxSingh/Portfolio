import "../styles/projects.css";
import { FaGithub } from "react-icons/fa6";
import React from "react";

const Projects = () => {
  const projectsData = [
    {
      name: "Todoist",
      description: "A productivity app to manage your tasks efficiently.",
      githubLink: "https://github.com/VinayakxSingh/Todoist",
      liveDemoLink: "https://bright-cendol-1e0307.netlify.app/",
      imageSrc: "/todoist.png",
    },
    {
      name: "Cruising350",
      description:
        "Instagram-inspired site dedicated to Royal Enfield Classic 350 riders.",
      githubLink: "https://github.com/VinayakxSingh/Cruising350",
      liveDemoLink: "https://cruising350.netlify.app/",
      imageSrc: "/cruising.png",
    },
    {
      name: "HIX Cosmetics",
      description:
        "A sleek e-commerce platform for cosmetic products with animations and effects.",
      githubLink: "https://github.com/VinayakxSingh/HIX",
      liveDemoLink: "https://hix-cosmetics.netlify.app/",
      imageSrc: "/hix.png",
    },
    {
      name: "NeighbourGov",
      description:
        "A civic engagement portal to submit and vote on local issues.",
      githubLink: "https://github.com/VinayakxSingh/NeighbourGov",
      liveDemoLink: "https://neighbour-gov.vercel.app/",
      imageSrc: "/ng.png",
    },
    {
      name: "MovieHub",
      description:
        "Movie Hub app using OMDb API, allowing discovery, search, and watchlist features.",
      githubLink: "https://github.com/VinayakxSingh/MOVIEHUB",
      liveDemoLink: "https://moviehub-delta-seven.vercel.app/",
      imageSrc: "/movies.png",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageSrc} alt={`${project.name} Project`} />
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size="50" color="white" id="github0" />
                </a>

                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-demo-link"
                >
                  View Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
