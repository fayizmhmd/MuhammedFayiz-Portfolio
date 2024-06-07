import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectImg from "../assets/images/1.jpg";
import CryptoiImg from "../assets/images/Crypto.jpg";
import NetflixImg from "../assets/images/Netflix.jpg";
import twitchImg from "../assets/images/4.jpg";

const Projects = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
        quaerat. Veritatis accusamus dolorem ipsam quidem adipisci, iste debitis
        nobis explicabo repudiandae omnis voluptatibus alias esse sapiente ea!
        Soluta, impedit nobis!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={CryptoiImg} title='Crypto App' />
        <ProjectItem img={ProjectImg} title='Property App' />
        <ProjectItem img={NetflixImg} title='Netflix App' />
        <ProjectItem img={twitchImg} title='Twitch App' />
      </div>
    </div>
  );
};

export default Projects;
