import React, { useRef, useState, useEffect } from "react";

const Certificate = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const certificates = [
    {
      title: "ISIM Hackathon 2.0 Winner",
      imageUrl: "./images/hackathon-winner.jpg",
      description: `Our team developed a project called <b>“Alum Connect”</b> in
    this hackathon, which allows alumni to connect with students
    from their college and enables students to track their alumni in
    real-time.`,
    },
    {
      title: "Ethical Hacking",
      imageUrl: "./images/ethical-hacking.jpg",
      description: `I have acquired in-depth knowledge in networking and hacking
    tools through an ethical hacking course. My expertise includes
    understanding networking intricacies, proficiency in various
    hacking tools, and familiarity with OWASP principles — enabling
    me to implement robust cybersecurity measures.`,
    },
    {
      title: "MERN Stack Development",
      imageUrl: "./images/mern-stack-tutedude.jpg",
      description: `In addition to mastering the MERN (MongoDB, Express.js,
    React.js, Node.js) stack, I have also gained proficiency in
    MySQL database management and advanced JavaScript practices.`,
    },
    {
      title: "C++",
      imageUrl: "./images/cpp.jpeg",
      description: `I have built a strong foundation in programming through C++,
    gaining deep knowledge in Object-Oriented Programming (OOP)
    principles — enabling me to write efficient and structured code.`,
    },
    {
      title: "Full Stack Internship",
      imageUrl: "./images/bharatIntern.jpg",
      description: `During this internship, I gained hands-on experience in
    full-stack development, building practical projects like an
    e-commerce platform and a weather app. I also mastered backend
    tools like Nodemailer for email communication and learned
    extensive API integration techniques.`,
    },
    {
      title: "Digital Marketing",
      imageUrl: "./images/Google.jpg",
      description: `I gained a solid understanding of digital marketing fundamentals
    and developed expertise in SEO (Search Engine Optimization),
    enhancing my ability to optimize online content for better
    visibility and reach.`,
    },
  ];

  const updateScrollState = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const { scrollLeft, scrollWidth, clientWidth } = slider;
    
    // Check if we can scroll left (5px tolerance for precision)
    setCanScrollLeft(scrollLeft > 5);
    // Check if we can scroll right
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);

    // Calculate currently visible card index for pagination dots
    const cards = slider.querySelectorAll(".certificate_card");
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

    const card = slider.querySelector(".certificate_card");
    const cardWidth = card ? card.offsetWidth : 340;
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

    const cards = slider.querySelectorAll(".certificate_card");
    if (cards[index]) {
      const targetLeft = cards[index].offsetLeft - slider.offsetLeft - 24;
      slider.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="project_section certificate_section" id="certificate_section">
      <div className="project_head">
        <h2>My Achievement & Certificates</h2>
        <p className="certificate_subtitle">
          Swipe or use navigation arrows to explore credentials and achievements
        </p>
      </div>

      <div className="certificate_carousel_wrapper">
        {/* Left Navigation Arrow */}
        <button
          type="button"
          className={`carousel_nav_arrow prev_arrow ${!canScrollLeft ? "disabled" : ""}`}
          onClick={() => handleScroll("left")}
          aria-label="Previous certificate"
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

        {/* Carousel Scroll Track - Single Horizontal Row */}
        <div
          className="certificate_slider_track"
          ref={sliderRef}
          onScroll={updateScrollState}
          aria-label="Certificates Carousel"
        >
          {certificates.map((certificate, index) => (
            <article
              className="box certificate_card certificate-box"
              key={index}
            >
              <div className="cert_img_container">
                <a
                  href={certificate.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert_img_link"
                  title={`View full ${certificate.title} credential`}
                >
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    loading="lazy"
                  />
                  <div className="cert_badge">Verified</div>
                  <div className="cert_zoom_overlay">
                    <span className="cert_zoom_text">View Full Image</span>
                  </div>
                </a>
              </div>

              <div className="cert_content_container">
                <div className="cert_title_box">
                  <h3 className="cert_title">
                    <a
                      href={certificate.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {certificate.title}
                    </a>
                  </h3>
                </div>

                <div className="cert_info_box">
                  <span className="cert_label">Description</span>
                  <p
                    className="used certificate-para cert_desc_text"
                    dangerouslySetInnerHTML={{ __html: certificate.description }}
                  />
                </div>

                <div className="cert_action_box">
                  <a
                    href={certificate.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert_view_btn"
                  >
                    <span>View Certificate</span>
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
          aria-label="Next certificate"
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
        {certificates.map((cert, index) => (
          <button
            key={index}
            type="button"
            className={`carousel_dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to certificate ${index + 1}: ${cert.title}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificate;
