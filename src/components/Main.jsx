import React, { useEffect } from "react";
import Typed from "typed.js";

const Main = () => {
  useEffect(() => {
    const typed = new Typed(".designation", {
      strings: [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Network Engineer",
        "Programmer",
        "Software Engineer",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="header">
      <div className="content">
        <div className="first">
          <span id="hello">Hello,</span>
          <span id="iam">I'm</span>
        </div>

        <div className="name">
          <h2>Pankaj Swami Vaishnav</h2>
        </div>

        <div className="work">
          <span className="sec-text designation"></span>
        </div>

        <div className="desc">
          <p>
            Currently I'm working as a Full Stack Developer at InventColabs Pvt
            Ltd.
          </p>
        </div>

        <div className="letstalk">
          <a href="#contact_section">
            <button id="talk_btn">Let's Talk</button>
          </a>
          <a href="/file/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button id="resume" type="button">
              Download Resume
            </button>
          </a>
        </div>

        <div className="social">
          <div className="info">
            <span>Check Out My</span>
          </div>

          <div className="social_i">
            <div className="git">
              <a
                href="https://github.com/pankajswamivaishnav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" title="GitHub"></i>
              </a>
            </div>

            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/pankaj-swami-vaishnav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in" title="LinkedIn"></i>
              </a>
            </div>

            <div className="insta">
              <a
                href="https://instagram.com/pankajswamivaishnav?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram" title="Instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="image">
        <div className="frame">
          <img src="./images/myself.jpg" alt="Pankaj Swami Vaishnav" />
        </div>
      </div>
    </section>
  );
};

export default Main;
