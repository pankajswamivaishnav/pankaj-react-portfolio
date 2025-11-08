import React from "react";

const Certificate = () => {
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
  return (
    <section className="project_section" id="certificate_section">
      <div className="project_head">
        <h2>My Achievement & Certificates</h2>
      </div>

      <div className="data_box certificate_data_box">
        {certificates.map((certificate) => (
          <div className="box certificate-box">
            <div className="img_container">
              <img src={certificate.imageUrl} alt="Hackathon certificate" />
            </div>
            <div className="data_container">
              <div className="project_name">
                <h3>
                  <a
                    href={certificate.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {certificate.title}
                  </a>
                </h3>
              </div>
              <div className="project_data">
                <span className="head">Description</span>
                <p className="used certificate-para">
                  {certificate.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
