import React, { useEffect } from "react";
import Typed from "typed.js";

const Main = () => {
  useEffect(() => {
    const typed = new Typed(".designation", {
      strings: [
        "Full Stack Web Applications",
        "MERN Stack Architectures",
        "Scalable Backend APIs",
        "High-Performance UIs",
        "Robust C++ Solutions",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero_section" id="home">
      <div className="hero_container">
        {/* Left Column: Bio & CTAs */}
        <div className="hero_content">
          <div className="hero_status_pill">
            <span className="pulse_dot"></span>
            <span>Available for Full Stack Opportunities</span>
          </div>

          <div className="hero_greeting_row">
            <span className="hero_greeting">Hello, I'm</span>
          </div>

          <h1 className="hero_name">
            Pankaj Swami <span className="highlight_accent">Vaishnav</span>
          </h1>

          <div className="hero_role_wrapper">
            <span className="role_prefix">Specializing in </span>
            <span className="designation typing_text"></span>
          </div>

          <p className="hero_description">
            Full Stack Software Engineer at <strong>SpeedupOra</strong>. I architect and build
            scalable web platforms, dynamic React interfaces, resilient RESTful microservices,
            and high-performance backend systems.
          </p>

          {/* Quick Tech Highlights */}
          <div className="hero_tech_stack">
            <span className="tech_stack_label">Core Stack:</span>
            <div className="tech_tags_row">
              <span className="hero_tech_pill">React.js</span>
              <span className="hero_tech_pill">Node.js</span>
              <span className="hero_tech_pill">Express.js</span>
              <span className="hero_tech_pill">MongoDB</span>
              <span className="hero_tech_pill">C++</span>
              <span className="hero_tech_pill">JavaScript</span>
            </div>
          </div>

          {/* Primary & Secondary CTA Buttons */}
          <div className="hero_cta_group">
            <a href="#project_section" className="hero_btn primary_btn">
              <span>View My Projects</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a href="#contact_section" className="hero_btn secondary_btn">
              <span>Contact Me</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </a>

            <a
              href="/file/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero_btn outline_btn"
            >
              <span>Resume</span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="hero_social_row">
            <span className="social_label">Connect with me:</span>
            <div className="social_links_group">
              <a
                href="https://github.com/pankajswamivaishnav"
                target="_blank"
                rel="noopener noreferrer"
                className="social_icon_btn"
                aria-label="GitHub Profile"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/pankaj-swami-vaishnav"
                target="_blank"
                rel="noopener noreferrer"
                className="social_icon_btn"
                aria-label="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href="https://instagram.com/pankajswamivaishnav?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                className="social_icon_btn"
                aria-label="Instagram Profile"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Developer Showcase */}
        <div className="hero_visual">
          <div className="hero_visual_ambient_glow"></div>

          <div className="hero_avatar_wrapper">
            <div className="hero_image_card_wrap">
              <div className="avatar_border_ring"></div>
              <div className="hero_image_frame">
                <img
                  src="./images/myself.jpg"
                  alt="Pankaj Swami Vaishnav"
                  className="hero_profile_img"
                />
              </div>

              {/* Floating Developer Badge 1 - Top Left */}
              <div className="floating_card top_left_card">
                <div className="floating_card_icon badge_invent">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div className="floating_card_text">
                  <span className="card_sub">Current Role</span>
                  <strong className="card_title">Full Stack Engineer</strong>
                  <span className="card_meta">@ SpeedupOra</span>
                </div>
              </div>

              {/* Floating Developer Badge 2 - Bottom Right */}
              <div className="floating_card bottom_right_card">
                <div className="floating_card_icon badge_trophy">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.45 1-1 1H7"></path>
                    <path d="M14 14.66V17c0 .55.45 1 1 1h2"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
                <div className="floating_card_text">
                  <span className="card_sub">Achievement</span>
                  <strong className="card_title">Hackathon Winner</strong>
                  <span className="card_meta">ISIM Hackathon 2.0</span>
                </div>
              </div>

              {/* Floating Developer Badge 3 - Code Tag Pill */}
              <div className="floating_card code_snippet_pill">
                <span className="code_symbol">&lt;/&gt;</span>
                <span className="code_text">MERN Stack • C++ • MySQL</span>
              </div>
            </div>

            {/* Mobile Badges Row (clean presentation under photo on mobile devices) */}
            <div className="hero_mobile_badges">
              <div className="mobile_badge_item">
                <div className="floating_card_icon badge_invent">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div className="floating_card_text">
                  <strong className="card_title">Full Stack Engineer</strong>
                  <span className="card_meta">@ SpeedupOra</span>
                </div>
              </div>

              <div className="mobile_badge_item">
                <div className="floating_card_icon badge_trophy">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.45 1-1 1H7"></path>
                    <path d="M14 14.66V17c0 .55.45 1 1 1h2"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
                <div className="floating_card_text">
                  <strong className="card_title">Hackathon Winner</strong>
                  <span className="card_meta">ISIM Hackathon 2.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
