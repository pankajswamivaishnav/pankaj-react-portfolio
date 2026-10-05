import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide while on the Hero section (top), reveal smoothly once user scrolls down
      const shouldShow = window.scrollY > 80;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run on initial mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsActive((prev) => !prev);
  const closeMenu = () => setIsActive(false);

  return (
    <header
      className={`headerbar ${isVisible ? "visible" : "hidden"} ${
        isActive ? "active" : ""
      }`}
    >
      <div className="nav-main">
        <div className="logo">
          <a href="#home">
            Pankaj Swami <span className="highlight_accent">Vaishnav</span>
          </a>
        </div>

        <nav className="navbar">
          <ul className="menu">
            <li className="menu-item" onClick={closeMenu}>
              <a href="#home">Home</a>
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

          <div
            className="mobile-nav"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <i className="fa-solid fa-bars" id="open"></i>
            <i className="fa-solid fa-xmark" id="close"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
