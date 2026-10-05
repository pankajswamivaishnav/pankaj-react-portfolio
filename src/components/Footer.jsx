import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site_footer">
      {/* Subtle top ambient glow */}
      <div className="footer_top_glow"></div>

      <div className="footer_container">
        {/* Main Footer Grid */}
        <div className="footer_main_grid">
          {/* Column 1: Brand & Developer Mission */}
          <div className="footer_brand_col">
            <div className="footer_logo_wrapper">
              <a href="#home" className="footer_brand_logo" onClick={scrollToTop}>
                Pankaj Swami <span className="highlight_accent">Vaishnav</span>
              </a>
            </div>
            
            <p className="footer_role_tag">
              Full Stack Software Engineer @ <strong>SpeedupOra</strong>
            </p>

            <p className="footer_bio">
              Architecting scalable web platforms, high-performance APIs, and dynamic user interfaces with clean code and modern design principles.
            </p>

            <div className="footer_status_pill">
              <span className="pulse_dot"></span>
              <span>Available for Full-Stack Opportunities</span>
            </div>

            <div className="footer_tech_stack">
              <span className="footer_tech_pill">React.js</span>
              <span className="footer_tech_pill">Node.js</span>
              <span className="footer_tech_pill">Express.js</span>
              <span className="footer_tech_pill">MongoDB</span>
              <span className="footer_tech_pill">C++</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="footer_nav_col">
            <h4 className="footer_col_title">
              <span className="title_prefix">{"//"}</span> Navigation
            </h4>
            <ul className="footer_links_list">
              <li>
                <a href="#home" className="footer_nav_link">
                  <span className="link_bullet">&rsaquo;</span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#my_services" className="footer_nav_link">
                  <span className="link_bullet">&rsaquo;</span>
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#skill_section" className="footer_nav_link">
                  <span className="link_bullet">&rsaquo;</span>
                  <span>Skills & Stack</span>
                </a>
              </li>
              <li>
                <a href="#project_section" className="footer_nav_link">
                  <span className="link_bullet">&rsaquo;</span>
                  <span>Featured Projects</span>
                </a>
              </li>
              <li>
                <a href="#certificate_section" className="footer_nav_link">
                  <span className="link_bullet">&rsaquo;</span>
                  <span>Certificates & Awards</span>
                </a>
              </li>
              <li>
                <a href="#contact_section" className="footer_nav_link">
                  <span className="link_bullet">&rsaquo;</span>
                  <span>Contact Me</span>
                </a>
              </li>
              <li>
                <a
                  href="/file/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_nav_link resume_link"
                >
                  <span className="link_bullet">&rsaquo;</span>
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Developer Profiles */}
          <div className="footer_social_col">
            <h4 className="footer_col_title">
              <span className="title_prefix">{"//"}</span> Connect & Profiles
            </h4>
            <p className="footer_social_subtitle">
              Reach out through your preferred developer channel or social platform:
            </p>

            <div className="footer_social_cards">
              <a
                href="https://github.com/pankajswamivaishnav"
                target="_blank"
                rel="noopener noreferrer"
                className="footer_social_card"
                aria-label="GitHub Profile"
              >
                <div className="social_card_icon">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="social_card_content">
                  <span className="social_platform">GitHub</span>
                  <span className="social_handle">@pankajswamivaishnav</span>
                </div>
                <svg className="social_arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/pankaj-swami-vaishnav"
                target="_blank"
                rel="noopener noreferrer"
                className="footer_social_card"
                aria-label="LinkedIn Profile"
              >
                <div className="social_card_icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="social_card_content">
                  <span className="social_platform">LinkedIn</span>
                  <span className="social_handle">pankaj-swami-vaishnav</span>
                </div>
                <svg className="social_arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              <a
                href="https://instagram.com/pankajswamivaishnav?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                className="footer_social_card"
                aria-label="Instagram Profile"
              >
                <div className="social_card_icon">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="social_card_content">
                  <span className="social_platform">Instagram</span>
                  <span className="social_handle">@pankajswamivaishnav</span>
                </div>
                <svg className="social_arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              <a
                href="mailto:pankajvaishnav128@gmail.com"
                className="footer_social_card"
                aria-label="Send Email"
              >
                <div className="social_card_icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="social_card_content">
                  <span className="social_platform">Email</span>
                  <span className="social_handle">pankajvaishnav128@gmail.com</span>
                </div>
                <svg className="social_arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer_bottom_bar">
          <div className="footer_copyright">
            <span>&copy; {currentYear} Pankaj Swami Vaishnav.</span>
            <span className="copyright_sub"> All Rights Reserved.</span>
          </div>

          <div className="footer_dev_badge">
            <span className="code_tag">&lt;/&gt;</span>
            <span>Crafted with passion using <strong>React</strong> & modern CSS</span>
          </div>

          <button
            type="button"
            className="footer_back_to_top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
