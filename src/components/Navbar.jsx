import React, { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive((prev) => !prev);
  const closeMenu = () => setIsActive(false);

  return (
    <header className={`headerbar ${isActive ? "active" : ""}`}>
      <div className="nav-main">
        <div className="logo">
          <a href="/">Pankaj Swami Vaishnav</a>
        </div>

        <nav className="navbar">
          <ul className="menu">
            <li className="menu-item" onClick={closeMenu}>
              <a href="/">Home</a>
            </li>
            <li className="menu-item" onClick={closeMenu}>
              <a href="#my_services">Services</a>
            </li>
            <li className="menu-item" onClick={closeMenu}>
              <a href="#skill_section">Skills</a>
            </li>
            <li className="menu-item" onClick={closeMenu}>
              <a href="#project_section">Projects</a>
            </li>
            <li className="menu-item" onClick={closeMenu}>
              <a href="#certificate_section">Certificates</a>
            </li>
            <li className="menu-item" onClick={closeMenu}>
              <a href="#contact_section">Contact Me</a>
            </li>
          </ul>
        </nav>

        <div className="nav-icon">
          <a href="/file/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button id="resume">Download Resume</button>
          </a>

          <div className="mobile-nav" onClick={toggleMenu}>
            <i className="fa-solid fa-bars" id="open"></i>
            <i className="fa-solid fa-xmark" id="close"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
