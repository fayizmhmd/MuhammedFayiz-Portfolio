import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2021,
    title: "Soften Technologies",
    duration: "1 Year",
    details:
      "I worked as a Software Trainee at Soften Technologies for one year, where I gained hands-on experience in PHP, CodeIgniter, and MySQL. During my time there, I developed and maintained web applications, honed my coding skills, and collaborated with the team to solve complex technical challenges. This experience solidified my foundation in web development and prepared me for future roles in software engineering.",
  },
  {
    year: 2024,
    title: "Howin Cloud",
    duration: "Pursuing",
    details:
      "I am currently working as a Software Intern at Howin Cloud, focusing on Laravel, React.js, and MySQL. My role involves developing dynamic web applications, integrating back-end services, and managing databases. This internship has allowed me to apply my skills in real-world projects, collaborate with experienced developers, and deepen my understanding of full-stack development, preparing me for a successful career in software engineering.",
  },
  
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
