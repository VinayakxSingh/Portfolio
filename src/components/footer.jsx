import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Vinayak Singh</h3>
        <p className="footer-tagline">
          MERN Stack Developer | Coding with Impact
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/VinayakxSingh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vinayak-singh-8ab2442ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:vinayaksinghforyou@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <ul className="footer-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <p className="footer-note">
          Designed & Built by <span> Vinayak Singh</span>
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Vinayak Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
