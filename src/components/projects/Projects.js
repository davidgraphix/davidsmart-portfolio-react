import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {/* E-commerse */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://e-commerse-chi.vercel.app/"
        >
          <ProjectsCard
            title="E-commerse"
            des="Full-Stack E-Commerce Website – 
            A fully functional online store with product browsing, 
            cart management, secure checkout, and responsive UI, built
             using modern full-stack technologies and deployed on Vercel."
            src={projectEight}
          />
        </a>

        {/* Dashboard*/}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://dashboard-sable-beta-28.vercel.app/"
        >
          <ProjectsCard
            title="Dashboard"
            des="A sleek, data-driven dashboard with interactive charts,
             analytics, and intuitive navigation, designed for efficient 
             management and monitoring of key metrics."
            src={projectSeven}
          />
        </a>
        {/* Crypto Place */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://cryptoplace-liard.vercel.app/"
        >
          <ProjectsCard
            title="Crypto Place"
            des="CryptoPlace is a modern and user-friendly cryptocurrency
             platform that provides real-time insights into the latest crypto
              trends, market prices, and essential details for traders and investors. 
               it offers a seamless experience 
              for staying updated on the crypto world. 🚀💰"
            src={projectSix}
          />
        </a>
        {/* Real Estate Website */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://davvidsmartrealestate.netlify.app"
        >
          <ProjectsCard
            title="REAL ESTATE WEBSITE"
            des=" Developed a responsive and interactive real estate
           platform using React + Vite, JavaScript, and Tailwind CSS
           . Integrated Framer Motion for dynamic animations, Web3Forms for secure 
           communication, and React Toastify for user-friendly notifications. Ensured 
           fast performance and an intuitive UI/UX."
            src={projectOne}
          />
        </a>
        {/* Photography Portfolio */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://davidgraphix.github.io/Ykglamstudio-website/"
        >
          {" "}
          <ProjectsCard
            title="PHOTOGRAPHY PORTFOLIO"
            des=" Designed and developed a professional website for YK Glam Studio, 
          featuring photography, makeup, videography, and studio rental services. 
          Implemented a modern, responsive layout with smooth navigation and 
          an engaging user interface to enhance the studio's online presence"
            src={projectTwo}
          />
        </a>
        {/* Weather App */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://davidgraphix.github.io/Weather-Apps/"
        >
          {" "}
          <ProjectsCard
            title="Weather App"
            des=" Developed a real-time Weather App with an intuitive and 
          responsive design. Integrated live weather data, ensuring accurate 
          forecasts and a user-friendly experience. Optimized for 
          performance and accessibility across all devices."
            src={projectThree}
          />
        </a>
        {/* Quiz App */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://davidgraphix.github.io/smart-quiz-app/"
        >
          {" "}
          <ProjectsCard
            title="Quiz app"
            des="Developed a Smart Quiz App with an 
        intuitive and responsive design. Implemented dynamic question rendering, 
        real-time score tracking, and smooth UI interactions for an engaging user 
        experience. Ensured seamless
         performance and accessibility across devices."
            src={projectFour}
          />
        </a>
        {/* Tik-Tak-Toe Game */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://david-tik-tak-toe-game.vercel.app/"
        >
          <ProjectsCard
            title="Tik-Tak-Toe Game"
            des=" Interactive Tic-Tac-Toe Game Built with React.js, 
          it showcases the power of
           modern JavaScript and component-based design. Players can enjoy
            a dynamic and responsive UI that updates in real time as 
            they make their moves. Key Features: Two-Player Mode: Compete 
            with a friend on a classic 3x3 board. Dynamic Game State: Tracks moves"
            src={projectFive}
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
