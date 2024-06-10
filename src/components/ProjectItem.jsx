import React from "react";

const ProjectItem = ({ img, title }) => {
  return (
    <div
      className="relative flex items-start h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]"
    >
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-10 w-full h-64 object-fit"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        {/* <p className="pb-4 pt-2 text-white text-center">React Js</p> */}
        <a href="">
          <p className="text-center p-3 rounded-lg bg-white text-gray-400 font-bold cursor-pointer text-lg mt-5">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
