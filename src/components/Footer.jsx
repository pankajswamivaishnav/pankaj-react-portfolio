import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="footer">
        <div class="myname">
          <h2>Pankaj Swami Vaishnav</h2>
        </div>
        <div class="socialmedia">
          <div class="back">
            <a
              href="https://github.com/pankajswamivaishnav"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-github" title="Git"></i>
            </a>
          </div>
          <div class="back">
            <a
              href="https://instagram.com/pankajvaishnav?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-instagram" title="Instagram"></i>
            </a>
          </div>
          <div class="back">
            <a
              href="https://www.linkedin.com/in/pankaj-swami-vaishnav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-linkedin-in" title="Linked-In"></i>
            </a>
          </div>
          <div class="back">
            <a
              href="mailto:pankajvaishnav128@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-envelope" title="Email"></i>
            </a>
          </div>
        </div>
        <div class="copyright">
          <span>Copyright &copy;2025 Pankaj Swami Vaishnav. &nbsp;</span>
          <span>All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
