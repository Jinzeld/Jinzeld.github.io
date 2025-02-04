import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Jinhui Zhen | All Rights Reserved</p>
      <div className="social-links">
        <a
          href="https://github.com/Jinzeld"
          target="_blank"
          rel="noopener noreferrer"
          className="icon github"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/jinhui-zhen"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
