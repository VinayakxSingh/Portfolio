import React, { useRef, useState, useEffect } from "react";
import "../src/styles/global.css";
import Hero from "./components/hero";
// import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Education from "./components/Education";
import Footer from "./components/footer";
import "./styles/responsive.css";
import AboutMe from "./components/aboutme";
import MySkills from "./components/myskills";
import Contact from "./components/contact";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [activeSection, setActiveSection] = useState("about");

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
      { threshold: 0.3 }
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
    <AnimatePresence>
      <div className="app-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AboutMe ref={aboutRef} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Projects ref={projectsRef} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MySkills ref={skillsRef} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Education ref={educationRef} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Contact ref={contactRef} />
          </motion.div>
          <Footer />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default App;
