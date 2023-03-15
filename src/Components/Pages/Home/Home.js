import React from "react";
import Contact from "../Contact/Contact";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Projects from "./Projects";
import Service from "./Service";
import Skill from "./Skill";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <AboutMe />
      <Service></Service>
      <Skill></Skill>
      <Projects></Projects>
      <Tools />
      <Contact></Contact>
    </div>
  );
};

export default Home;
