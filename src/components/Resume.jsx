import React from "react";
import pdf from "../assets/pdf/MuhammedFayizK.pdf";
import { FaFileDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <div>
      <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <div className="text-center mt-8">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-white bg-[#001b5e] rounded-lg shadow-lg hover:bg-[#001b5e]/80 transition-colors duration-300"
          >
            <FaFileDownload className="mr-2" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
