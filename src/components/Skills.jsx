import React from "react";

const skills = [
  { name: "HTML", percent: 80 },
  { name: "CSS", percent: 70 },
  { name: "JavaScript", percent: 80 },
  { name: "React Js", percent: 80 },
  { name: "Node Js", percent: 70 },
  { name: "Express Js", percent: 75 },
  { name: "MongoDB", percent: 80 },
  { name: "MySQL", percent: 70 },
  { name: "Cpp", percent: 80 },
  { name: "Networking", percent: 70 },
];

const Skills = () => {
  return (
    <section className="skill_section" id="skill_section">
      <div className="skill_data">
        <div className="skill_heading">
          <h2>My Skills</h2>
        </div>

        <div className="progress">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <span>{skill.name}</span>
              <div className="skill_bar">
                <div
                  className="skill_name"
                  style={{ width: `${skill.percent}%` }}
                >
                  {skill.percent}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
