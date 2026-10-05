import React from "react";

const servicesList = [
  {
    id: "01",
    title: "Full-Stack Web Applications",
    subtitle: "End-to-End Scalable Architectures",
    description:
      "Architecting and delivering complete, high-performance web systems from fluid React frontends to robust Node.js and Express backend microservices.",
    deliverables: [
      "Custom Single Page Applications (SPAs) & Portals",
      "Decoupled MVC & Microservices Architectures",
      "Seamless Client-Server State Management",
      "Production Cloud Deployment & Monitoring",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Frontend Engineering & UI/UX",
    subtitle: "Pixel-Perfect, Reactive & Accessible",
    description:
      "Crafting modern, responsive user interfaces with smooth micro-interactions, component modularity, and lightning-fast Core Web Vitals.",
    deliverables: [
      "Component-Driven Modular Architecture",
      "Cross-Browser & Mobile-First Fluid Layouts",
      "Interactive Animations & Micro-Interactions",
      "WCAG Accessibility & SEO Semantic HTML5",
    ],
    tech: ["React 19", "JavaScript (ES6+)", "CSS3 / Grid", "Material-UI", "Tailwind"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Backend Systems & REST APIs",
    subtitle: "High-Throughput & Fault-Tolerant Engines",
    description:
      "Designing secure, event-driven server engines with clean routing, custom middleware pipelines, rigorous input validation, and JWT authentication.",
    deliverables: [
      "Secure RESTful APIs with Standardized JSON Contracts",
      "JWT Authentication & Role-Based Access Control (RBAC)",
      "Robust Error Handling & Centralized Logging",
      "Automated Email Dispatch & Webhook Handling",
    ],
    tech: ["Node.js", "Express.js", "JWT", "Axios", "Nodemailer"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Database Modeling & Optimization",
    subtitle: "Scalable NoSQL & Relational Foundations",
    description:
      "Structuring resilient data schemas, indexing patterns, and aggregation queries for high-volume transactions and relational integrity.",
    deliverables: [
      "Document Schema Design with Mongoose / MongoDB",
      "Relational Database Normalization with MySQL",
      "Complex Aggregations & Query Index Tuning",
      "Data Integrity, Validation & Migration Routines",
    ],
    tech: ["MongoDB", "Mongoose", "MySQL", "Database Indexing"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
  },
  {
    id: "05",
    title: "System Integration & Performance",
    subtitle: "Speed, Low Latency & High Efficiency",
    description:
      "Diagnosing bottlenecks, minimizing bundle payloads, integrating third-party APIs, and writing efficient algorithms in C++ and JavaScript.",
    deliverables: [
      "Third-Party API & Payment Gateway Integrations",
      "Frontend Code Splitting & Asset Optimization",
      "Memory & CPU Profiling for Critical Pathways",
      "Algorithm Efficiency & C++ Computation Modules",
    ],
    tech: ["Performance Profiling", "C++", "Vite / Webpack", "API Gateways"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    ),
  },
  {
    id: "06",
    title: "Security & Clean Code Audits",
    subtitle: "Defensive Engineering & Best Practices",
    description:
      "Auditing web applications against common vulnerabilities, enforcing sanitization, rate-limiting, and structuring maintainable code standards.",
    deliverables: [
      "OWASP Awareness & Defense against XSS / Injection",
      "Secure CORS Configuration & Rate Limiting",
      "Code Refactoring for Long-Term Maintainability",
      "Environment Variables & Secrets Management",
    ],
    tech: ["OWASP Guidelines", "Data Sanitization", "Code Quality", "Security"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover & Architect",
    desc: "Understanding domain goals, scoping technical requirements, and planning scalable system architecture.",
  },
  {
    step: "02",
    title: "Clean Engineering",
    desc: "Writing modular, self-documenting code with modern React components and decoupled API services.",
  },
  {
    step: "03",
    title: "Performance & Security",
    desc: "Benchmarking response times, applying OWASP best practices, and stress-testing edge cases.",
  },
  {
    step: "04",
    title: "Seamless Delivery",
    desc: "Deploying production-ready builds, configuring environment pipelines, and continuous iteration.",
  },
];

const Services = () => {
  return (
    <section className="service_section" id="my_services">
      {/* Background ambient lighting */}
      <div className="services_ambient_glow top_glow"></div>
      <div className="services_ambient_glow bottom_glow"></div>

      <div className="services_container">
        {/* Section Header */}
        <div className="services_header">
          <div className="services_tag_pill">
            <span className="pulse_dot"></span>
            <span>CAPABILITIES & SOLUTIONS</span>
          </div>

          <h2 className="services_title">
            Services I <span className="highlight_accent">Provide</span>
          </h2>

          <p className="services_subtitle">
            Engineering scalable full-stack applications, resilient backend architectures,
            and dynamic, responsive interfaces built for reliability and performance.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="services_grid">
          {servicesList.map((service) => (
            <article key={service.id} className="service_card">
              <div className="service_card_top">
                <div className="service_icon_wrapper">
                  {service.icon}
                </div>
                <span className="service_id_badge">{service.id}</span>
              </div>

              <div className="service_card_content">
                <span className="service_category_subtitle">{service.subtitle}</span>
                <h3 className="service_card_title">{service.title}</h3>
                <p className="service_card_desc">{service.description}</p>

                {/* Key Deliverables */}
                <div className="service_deliverables_block">
                  <span className="deliverables_label">Key Deliverables:</span>
                  <ul className="deliverables_list">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="deliverable_item">
                        <svg className="check_icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="service_tech_tags">
                  {service.tech.map((t, idx) => (
                    <span key={idx} className="service_tech_pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Engineering Process Banner */}
        <div className="services_process_section">
          <div className="process_header">
            <span className="process_pretitle">{"//"} HOW I DELIVER</span>
            <h3 className="process_title">The Engineering Workflow</h3>
            <p className="process_subtitle">
              A structured, transparent cycle designed for high software quality and on-time deployment.
            </p>
          </div>

          <div className="process_grid">
            {processSteps.map((stepItem, index) => (
              <div key={stepItem.step} className="process_card">
                <div className="process_step_header">
                  <span className="process_number">{stepItem.step}</span>
                  {index < processSteps.length - 1 && (
                    <div className="process_connector_line"></div>
                  )}
                </div>
                <h4 className="process_step_title">{stepItem.title}</h4>
                <p className="process_step_desc">{stepItem.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action CTA Banner */}
        <div className="services_cta_banner">
          <div className="services_cta_content">
            <span className="cta_badge">Have a Project or Opening?</span>
            <h3 className="cta_headline">
              Ready to turn ideas into <span className="highlight_accent">scalable reality</span>?
            </h3>
            <p className="cta_subtext">
              Whether you need a full-stack engineer for your team, custom software development, or an architectural audit — let's connect.
            </p>
          </div>
          <div className="services_cta_actions">
            <a href="#contact_section" className="services_cta_btn primary">
              <span>Discuss Your Project</span>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#project_section" className="services_cta_btn secondary">
              <span>View Past Work</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
