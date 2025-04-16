import React, { useRef, useState, useEffect } from "react";
import "../src/styles/global.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Education from "./components/Education";
import Footer from "./components/footer";
import "./styles/responsive.css";
import AboutMe from "./components/aboutme";
import MySkills from "./components/myskills";
import Contact from "./components/contact";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  console.log(activeSection);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "about", ref: aboutRef },
    { section: "projects", ref: projectsRef },
    { section: "myskills", ref: skillsRef },
    { section: "education", ref: educationRef },
    { section: "contact", ref: contactRef },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = sectionRefs.find(
              (s) => s.ref.current === entry.target
            );
            if (found) setActiveSection(found.section);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div>
      <button
        onClick={() =>
          projectsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Test Scroll to Projects
      </button>
      <Navbar
        scrollToEducation={() =>
          educationRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToProjects={() =>
          projectsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Hero />
      <AboutMe ref={aboutRef} />
      <Projects ref={projectsRef} />
      <MySkills ref={skillsRef} />
      <Education ref={educationRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
