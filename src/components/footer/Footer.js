import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
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
              href="https://www.linkedin.com/in/david-bamidele-8b8249359/"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {navLinksdata.map(({ _id, title, link }) => (
            <li key={_id}>
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                  {title}
                  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <a href="https://davidgraphix.github.io/david-portfolio-2024/">
                Portfolio
              </a>

              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <a href="https://github.com/davidgraphix/">GitHub</a>

              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <a href="https://www.linkedin.com/in/david-bamidele-8b8249359//">
                Linkedin
              </a>

              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <a href="https://twitter.com/iam_david_smart">X</a>

              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          {/* <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <a href="https://twitter.com/iam_david_smart">
                Instagram
              </a>

              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li> */}
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Have a question?
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <a rel="" href="https://wa.me/+2349035177568/">
                WhatsApp
              </a>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <a href="tel://+2349035177568">Phone</a>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <a href="mailto:bamideledavidsmart40@gmail.com">Email</a>

              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
