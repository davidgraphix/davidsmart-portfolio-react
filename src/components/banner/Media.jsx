import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTypescript, SiCsharp, SiBootstrap } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiTypescript />
          </span>
          <span className="bannerIcon">
            <SiBootstrap />
          </span>
          <span className="bannerIcon">
            <SiCsharp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
