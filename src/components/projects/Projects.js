import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
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
        <ProjectsCard
          title="REAL ESTATE WEBSITE"
          des=" Developed a responsive and interactive real estate
           platform using React + Vite, JavaScript, and Tailwind CSS
           . Integrated Framer Motion for dynamic animations, Web3Forms for secure 
           communication, and React Toastify for user-friendly notifications. Ensured 
           fast performance and an intuitive UI/UX."
          src={projectOne}
        />
        <ProjectsCard
          title="PHOTOGRAPHY PORTFOLIO"
          des=" Designed and developed a professional website for YK Glam Studio, 
          featuring photography, makeup, videography, and studio rental services. 
          Implemented a modern, responsive layout with smooth navigation and 
          an engaging user interface to enhance the studio's online presence"
          src={projectTwo}
        />
        <ProjectsCard
          title="Weather App"
          des=" Developed a real-time Weather App with an intuitive and 
          responsive design. Integrated live weather data, ensuring accurate 
          forecasts and a user-friendly experience. Optimized for 
          performance and accessibility across all devices."
          src={projectThree}
        />
        <ProjectsCard
          title="Quiz app"
          des="Developed a Smart Quiz App with an 
        intuitive and responsive design. Implemented dynamic question rendering, 
        real-time score tracking, and smooth UI interactions for an engaging user 
        experience. Ensured seamless
         performance and accessibility across devices."
          src={projectFour}
        />
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
        <ProjectsCard
          title="Webpage Desigh"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectSix}
        />
      </div>
    </section>
  );
};

export default Projects;
