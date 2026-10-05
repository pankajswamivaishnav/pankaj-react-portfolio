import React, { useState } from "react";

const skillCategories = [
  { id: "all", label: "All Stack", icon: "⚡" },
  { id: "frontend", label: "Frontend", icon: "🎨" },
  { id: "backend", label: "Backend & Core", icon: "💻" },
  { id: "database", label: "Databases", icon: "🗄️" },
  { id: "tools", label: "Networking & Security", icon: "🛡️" },
];

const domainHighlights = [
  {
    title: "Frontend Engineering",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
    description: "Responsive, dynamic Single Page Applications (SPAs) built with React and modern JavaScript.",
    metric: "4 Core Skills",
  },
  {
    title: "Backend & APIs",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    description: "Robust RESTful APIs, event-driven Node/Express backends, and performant C++ architectures.",
    metric: "3 Core Skills",
  },
  {
    title: "Database Modeling",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    description: "Scalable NoSQL with MongoDB and structured relational database design with MySQL.",
    metric: "2 Core Skills",
  },
  {
    title: "Systems & Security",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    description: "Solid grounding in computer networking protocols, OWASP awareness, and secure development.",
    metric: "2 Core Skills",
  },
];

const skills = [
  {
    name: "React.js",
    category: "frontend",
    percent: 85,
    level: "Advanced",
    description: "Component lifecycle, Hooks, Context API, State Management, SPA design",
    tags: ["Hooks", "Context API", "SPAs", "Component Lifecycle"],
    accentColor: "#61dafb",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    percent: 85,
    level: "Advanced",
    description: "Asynchronous JavaScript, Promises, DOM manipulation, APIs, Event Loop",
    tags: ["ES6+", "Async/Await", "DOM", "Event Loop"],
    accentColor: "#f7df1e",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm14.47 13.78c-.78 1.25-2.02 1.95-3.56 1.95-3.05 0-4.52-1.92-4.52-4.45 0-3.03 2-4.57 4.54-4.57 1.5 0 2.67.62 3.39 1.83l-1.84 1.15c-.44-.75-1-.98-1.55-.98-1.15 0-1.89.85-1.89 2.45 0 1.76.77 2.48 1.94 2.48.66 0 1.25-.33 1.63-1.04l1.86 1.18zm-6.84-6.49v5.93c0 1.73-.83 2.51-2.28 2.51-.73 0-1.47-.32-1.87-.89l1.45-1.12c.26.37.52.54.82.54.43 0 .73-.24.73-.93v-6.04h1.15z" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    category: "frontend",
    percent: 90,
    level: "Expert",
    description: "Semantic markup, SEO optimization, Accessibility standards, Web structure",
    tags: ["Semantic HTML", "SEO", "Accessibility", "Forms"],
    accentColor: "#e34f26",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4zm13.3 5H8.7l.2 2.5h8.2l-.6 6.5-4.3 1.2-4.3-1.2-.3-3.5H10l.1 1.7 1.9.5 1.9-.5.2-2.4H7.2L6.6 6h11l-.3 2z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    category: "frontend",
    percent: 80,
    level: "Proficient",
    description: "Flexbox, CSS Grid, Transitions, Keyframes, Responsive Layouts",
    tags: ["Flexbox", "CSS Grid", "Animations", "Media Queries"],
    accentColor: "#1572b6",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4zm13.3 5H8.7l.2 2.5h8.2l-.6 6.5-4.3 1.2-4.3-1.2-.3-3.5H10l.1 1.7 1.9.5 1.9-.5.2-2.4H7.2L6.6 6h11l-.3 2z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "backend",
    percent: 80,
    level: "Proficient",
    description: "Server-side JavaScript runtime, Event-driven architecture, NPM ecosystem",
    tags: ["Async I/O", "Runtime", "NPM Modules", "HTTP Engine"],
    accentColor: "#68a063",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"></path>
        <path d="M12 12l8-4.5"></path>
        <path d="M12 12v8"></path>
        <path d="M12 12L4 7.5"></path>
      </svg>
    ),
  },
  {
    name: "Express.js",
    category: "backend",
    percent: 80,
    level: "Proficient",
    description: "RESTful API creation, Custom middleware, Route handling, MVC design pattern",
    tags: ["REST APIs", "Middleware", "Routing", "MVC Pattern"],
    accentColor: "#ffffff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
        <line x1="14" y1="4" x2="10" y2="20"></line>
      </svg>
    ),
  },
  {
    name: "C++",
    category: "backend",
    percent: 85,
    level: "Advanced",
    description: "Object-Oriented Programming (OOP), Data Structures, Algorithms, Memory management",
    tags: ["OOP", "Data Structures", "Algorithms", "Pointers"],
    accentColor: "#00599c",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    category: "database",
    percent: 85,
    level: "Advanced",
    description: "NoSQL document database, Mongoose ODM, Schema design, Atlas cloud deployment",
    tags: ["NoSQL", "Mongoose ODM", "Aggregation", "CRUD"],
    accentColor: "#47a248",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C11.5 3 7 9.5 7 14c0 3.3 2.2 5.5 5 5.9V22c0 .3.2.5.5.5s.5-.2.5-.5v-2.1c2.8-.4 5-2.6 5-5.9 0-4.5-4.5-11-5-12z" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    category: "database",
    percent: 75,
    level: "Proficient",
    description: "Relational database management, SQL queries, Complex joins, Table normalization",
    tags: ["Relational DB", "SQL Queries", "Joins", "Normalization"],
    accentColor: "#00758f",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
  },
  {
    name: "Networking",
    category: "tools",
    percent: 75,
    level: "Proficient",
    description: "TCP/IP suite, OSI 7-layer model, DNS, HTTP/HTTPS protocols, Socket basics",
    tags: ["TCP/IP", "DNS", "HTTP/S", "OSI Model"],
    accentColor: "#0ee68c",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
  },
  {
    name: "Security & OWASP",
    category: "tools",
    percent: 70,
    level: "Proficient",
    description: "Cybersecurity fundamentals, OWASP Top 10 vulnerabilities, Penetration testing tools",
    tags: ["OWASP", "Vulnerabilities", "Cybersecurity", "Auth Flow"],
    accentColor: "#f5a623",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <line x1="12" y1="8" x2="12" y2="14"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    ),
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="skill_section" id="skill_section">
      <div className="skill_container">
        {/* Section Header */}
        <div className="skill_header_block">
          <span className="skill_pre_title">Technical Capabilities</span>
          <h2 className="skill_main_title">My Skills & Expertise</h2>
          <p className="skill_subtitle">
            A comprehensive matrix of technologies, frameworks, and engineering competencies I leverage to build robust software.
          </p>
        </div>

        {/* Domain Overview Highlight Cards */}
        <div className="domain_highlights_grid">
          {domainHighlights.map((domain, index) => (
            <div className="domain_card" key={index}>
              <div className="domain_card_icon">{domain.icon}</div>
              <div className="domain_card_content">
                <div className="domain_card_top">
                  <h3 className="domain_card_title">{domain.title}</h3>
                  <span className="domain_card_badge">{domain.metric}</span>
                </div>
                <p className="domain_card_desc">{domain.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="skill_filter_wrapper">
          <div className="skill_filter_bar">
            {skillCategories.map((cat) => {
              const count =
                cat.id === "all"
                  ? skills.length
                  : skills.filter((s) => s.category === cat.id).length;
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`skill_filter_tab ${isActive ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  aria-pressed={isActive}
                >
                  <span className="tab_icon">{cat.icon}</span>
                  <span className="tab_label">{cat.label}</span>
                  <span className="tab_count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Skills Cards Grid Container */}
        <div className="skills_grid_container">
          <div className="skills_bento_grid">
            {filteredSkills.map((skill, index) => (
              <div
                className="skill_master_card"
                key={index}
                style={{ "--tech-accent": skill.accentColor }}
              >
                {/* Card Header */}
                <div className="skill_card_header">
                  <div className="skill_icon_squircle">
                    {skill.icon}
                  </div>
                  <div className="skill_name_meta">
                    <h4 className="skill_item_name">{skill.name}</h4>
                    <span className="skill_item_category">
                      {skill.category.toUpperCase()}
                    </span>
                  </div>
                  <div className="skill_level_badge">
                    {skill.level}
                  </div>
                </div>

                {/* Description */}
                <p className="skill_item_desc">{skill.description}</p>

                {/* Progress Indicator */}
                <div className="skill_meter_wrapper">
                  <div className="skill_meter_meta">
                    <span className="skill_meter_label">Proficiency</span>
                    <span className="skill_meter_value">{skill.percent}%</span>
                  </div>
                  <div className="skill_track_bar">
                    <div
                      className="skill_fill_bar"
                      style={{ width: `${skill.percent}%` }}
                    >
                      <div className="skill_fill_glow"></div>
                    </div>
                  </div>
                </div>

                {/* Capability Tags */}
                <div className="skill_tags_list">
                  {skill.tags.map((tag, tagIdx) => (
                    <span className="skill_capability_tag" key={tagIdx}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator when more than 6 skills exist */}
          {filteredSkills.length > 6 && (
            <div className="skills_scroll_indicator">
              <span className="scroll_hint_dot"></span>
              <span>Showing 6 of {filteredSkills.length} skills • Scroll down to view all</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
