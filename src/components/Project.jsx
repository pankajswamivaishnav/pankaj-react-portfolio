import React, { useRef, useState, useEffect } from "react";

const projects = [
  {
    img: "./images/tms.png",
    name: "Transport Management System",
    link: "https://speedupora.com",
    tech: "MONGODB, Express.Js, React.Js, Node.Js, TailwindCss, MUI",
  },
  {
    img: "./images/getrightcover.png",
    name: "Get Right Cover",
    link: "https://getrightcover.com/",
    tech: "MONGODB, Express.Js, React.Js, Node.Js, Gov. API's, Redis, Meta Templates, MUI, Socket, Microservices",
  },
  {
    img: "./images/api-market-palace.png",
    name: "API Market Palace",
    link: "https://developers.getrightcover.com/",
    tech: "MONGODB, Express.Js, React.Js, Node.Js, Gov. API, Payment Gateway",
  },
  {
    img: "./images/sales.png",
    name: "Sales Dashboard",
    link: "https://sales.getrightcover.com/",
    tech: "MONGODB, Express.Js, React.Js, Node.Js, Gov. API, Google API's",
  },
  {
    img: "./images/weather.jpeg",
    name: "Weather Forecast",
    link: "https://weather-project-n8gf.onrender.com",
    tech: "HTML, CSS, JavaScript, Node.js, Express.js, API",
  },
  {
    img: "./images/E-commerce.jpg",
    name: "E-commerce",
    link: "https://newecommerce-tt9h.onrender.com/",
    tech: "HTML, CSS, JavaScript, Node.js, Express.js, API",
  },
  {
    img: "./images/Attandance.jpg",
    name: "Attendance Management System",
    link: "https://attandance-mangement.onrender.com/",
    tech: "HTML, CSS, HBS, JavaScript, Node.js, Express.js",
  },
  {
    img: "./images/Todo_List.jpeg",
    name: "ToDo-List",
    link: "https://addcoursebypankaj.000webhostapp.com/",
    tech: "HTML, CSS, JavaScript",
  },
  {
    img: "./images/Blog-web-app.jpg",
    name: "Blog Web App (GitHub Link)",
    link: "https://github.com/pankajswamivaishnav/Blog_Website",
    tech: "HTML, CSS, JavaScript",
  },
  {
    img: "./images/portfolio.png",
    name: "Portfolio",
    link: "https://portfolio-pankaj1.onrender.com/",
    tech: "HTML, CSS, JavaScript, Node.js, Express.js",
  },
];

const Project = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const { scrollLeft, scrollWidth, clientWidth } = slider;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);

    const cards = slider.querySelectorAll(".project_card");
    if (cards.length > 0) {
      let closestIdx = 0;
      let minDiff = Infinity;
      cards.forEach((card, idx) => {
        const diff = Math.abs(card.offsetLeft - slider.offsetLeft - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      setActiveIndex(closestIdx);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    updateScrollState();
    slider.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      slider.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const handleScroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector(".project_card");
    const cardWidth = card ? card.offsetWidth : 330;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll(".project_card");
    if (cards[index]) {
      const targetLeft = cards[index].offsetLeft - slider.offsetLeft - 16;
      slider.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="project_section" id="project_section">
      <div className="project_head">
        <h2>My Projects</h2>
        <p className="project_subtitle">
          Swipe or use navigation arrows to explore featured projects
        </p>
      </div>

      <div className="project_carousel_wrapper">
        {/* Left Navigation Arrow */}
        <button
          type="button"
          className={`carousel_nav_arrow prev_arrow ${!canScrollLeft ? "disabled" : ""}`}
          onClick={() => handleScroll("left")}
          aria-label="Previous project"
          disabled={!canScrollLeft}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Carousel Scroll Track - Strictly One Row, Never Wrap */}
        <div
          className="project_slider_track"
          ref={sliderRef}
          onScroll={updateScrollState}
          aria-label="Projects Carousel"
        >
          {projects.map((project, index) => (
            <article
              className="box project_card"
              key={index}
            >
              <div className="project_img_container">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project_img_link"
                  title={`View ${project.name}`}
                >
                  <img
                    src={project.img}
                    alt={project.name}
                    loading="lazy"
                  />
                  <div className="project_badge">Live Project</div>
                  <div className="project_zoom_overlay">
                    <span className="project_zoom_text">Visit Project</span>
                  </div>
                </a>
              </div>

              <div className="project_content_container">
                <div className="project_title_box">
                  <h3 className="project_card_title">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                  </h3>
                </div>

                <div className="project_tech_box">
                  <span className="project_tech_label">Technologies Used</span>
                  <div className="project_tech_badges">
                    {project.tech.split(",").map((t, i) => (
                      <span className="tech_pill" key={i}>
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project_action_box">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project_view_btn"
                  >
                    <span>View Project</span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <button
          type="button"
          className={`carousel_nav_arrow next_arrow ${!canScrollRight ? "disabled" : ""}`}
          onClick={() => handleScroll("right")}
          aria-label="Next project"
          disabled={!canScrollRight}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Pagination Dots Indicator */}
      <div className="carousel_pagination_dots">
        {projects.map((proj, index) => (
          <button
            key={index}
            type="button"
            className={`carousel_dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to project ${index + 1}: ${proj.name}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
