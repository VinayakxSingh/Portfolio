import React, { useRef } from "react";
import "../src/styles/global.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Education from "./components/Education";
import Projects from "./components/projects";
import Footer from "./components/footer";
import "./styles/responsive.css";
import AboutMe from "./components/aboutme";
import MySkills from "./components/myskills";
import Contact from "./components/contact";
function App() {
  const educationRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div style={{ background: "" }}>
      <Navbar
        scrollToEducation={() =>
          educationRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToProjects={() =>
          projectsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Hero />
      <AboutMe />
      <Projects ref={projectsRef} />
      <MySkills />
      <Contact />
      <Education ref={educationRef} />

      <Footer />
    </div>
  );
}

export default App;
