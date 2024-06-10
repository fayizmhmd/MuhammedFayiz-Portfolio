import React from "react";
import ProjectItem from "./ProjectItem";
// import ProjectImg from "../assets/images/1.jpg";
// import CryptoiImg from "../assets/images/Crypto.jpg";
// import NetflixImg from "../assets/images/Netflix.jpg";
// import twitchImg from "../assets/images/4.jpg";
import CollegesBangalore from "../assets/images/colleges-bangalore.png"
import Leforum from "../assets/images/leforum-international.png"
import LegalAdvisor from "../assets/images/legal-advisor.jpg"
import GymManagement from "../assets/images/gym-management.jpg"




const Projects = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
      My portfolio features diverse projects catering to various industries. "LeForum International" aids students in Bangalore and overseas college admissions. "Colleges Bangalore" focuses on admissions in Bangalore colleges. "Legal Advisor" streamlines advocate management, while "Gym Management System" optimizes gym operations. Each project showcases my dedication to innovative solutions, simplifying complex processes and enhancing user experiences.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={CollegesBangalore} title='Colleges Bangalore' />
        <ProjectItem img={Leforum} title='Leforum International' />
        <ProjectItem img={LegalAdvisor} title='Legal Advisor' />
        <ProjectItem img={GymManagement} title='Gym Managemnet System' />
      </div>
    </div>
  );
};

export default Projects;
