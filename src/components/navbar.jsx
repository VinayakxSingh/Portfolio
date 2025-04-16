import React from "react";
import { MdWorkOutline } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import "../styles/navbar.css";

const Navbar = ({ scrollToEducation, scrollToProjects }) => {
  const handleGithubClick = () => {
    window.open("https://github.com/VinayakxSingh", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/vinayak-singh-8ab2442ab/",
      "_blank"
    );
  };

  return (
    <div className="button-container">
      <button className="button" title="Projects" onClick={scrollToProjects}>
        <MdWorkOutline className="icon" />
      </button>

      <button
        title="Education"
        className="button link-button"
        onClick={scrollToEducation}
      >
        <PiStudentBold className="icon" />
      </button>

      <button className="button" title="GitHub" onClick={handleGithubClick}>
        <FiGithub className="icon" />
      </button>

      <button className="button" title="LinkedIn" onClick={handleLinkedInClick}>
        <SlSocialLinkedin className="icon" />
      </button>
    </div>
  );
};

export default Navbar;
