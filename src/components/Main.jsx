import React from "react";
import Img from "../assets/images/young-bmx-bicycle-rider.jpg";
import pdf from "../assets/pdf/MuhammedFayizK.pdf";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFileDownload,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-right "
        src={Img}
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 text-center">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Muhammed Fayiz K
          </h1>
          <h2 className="flex sm:text-3xl text-2xl text-gray-800">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Software Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 pb-12 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebookF className="cursor-pointer" size={20} />
            <a href="https://www.instagram.com/fayizmhmd_?igsh=aXAxcmw0eTZ3Mzh6" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="cursor-pointer" size={20} /></a>
            <a href="https://www.linkedin.com/in/fayizmhmd/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="cursor-pointer" size={20} /></a>
          </div>
          <div className=" max-w-[150px] w-full mx-auto bg-opacity-75 rounded-full shadow-lg bg-gray-100 shadow-gray-400 py-2 cursor-pointer hover:scale-110 ease-in duration-200">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <span className="font-bold pr-2">Resume</span>
              <FaFileDownload class="mr-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
