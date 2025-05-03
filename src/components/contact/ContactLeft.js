import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">David Smart</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I am a full-stack software engineer with over 3 years of experience
          who is making waves in the world of web development, UI/UX Design,
          Photography, Graphic Design, and Business Managing and Support.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+234 903 517 7568</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">Bamideledavidsmart40@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/davidgraphix/"
            >
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/iam_david_smart"
            >
              <FaTwitter />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/david-smart-bamidele "
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
