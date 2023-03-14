import React from "react";
import Contact from "../Contact/Contact";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Projects from "./Projects";
import Service from "./Service";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe />
      <Service></Service>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
