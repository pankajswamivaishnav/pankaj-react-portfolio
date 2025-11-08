import React from "react";
const projects = [
  {
    img: "./images/tms.png",
    name: "Transport Management System",
    link: "https://speedup-frontend.vercel.app",
    tech: "MONGODB, Express.Js, React.Js, Node.Js, TailwindCss, MUI",
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
  return (
    <section className="project_section" id="project_section">
      <div className="project_head">
        <h2>My Projects</h2>
      </div>
      <div className="data_box">
        {projects.map((project, index) => (
          <div className="box" key={index}>
            <div className="img_container">
              <img src={project.img} alt={project.name} />
            </div>

            <div className="data_container">
              <div className="project_name">
                <h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </h3>
              </div>

              <div className="project_data">
                <span className="head">Technology Used</span>
                <p className="used">{project.tech}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
