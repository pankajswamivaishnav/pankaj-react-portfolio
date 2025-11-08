import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Certificate from "../components/Certificate";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Services from "../components/Services";
import Skills from "../components/Skills";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Services />
      <Skills />
      <Project />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
