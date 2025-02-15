import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-4xl font-bold">Work Experience(Tech)</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer"
            subTitle="AbiolaSoft - (2021 - Present)"
            result="Lagos"
            des="Specializing in creating responsive and user-friendly web applications using React, TypeScript, and modern front-end frameworks. Collaborated with teams to deliver seamless user experiences."
          />
          <ResumeCard
            title="Back-end Developer"
            subTitle="AbiolaSoft - (2022 - Present)"
            result="Lagos"
            des="Developing and maintaining robust server-side logic using C# and ASP.NET. Ensuring seamless data flow and integration with front-end components while optimizing application performance.."
          />
          <ResumeCard
            title="Ui/Ux Designer"
            subTitle="Self Taught - (2023 - Present)"
            result="Lagos"
            des="Designing intuitive and visually appealing user interfaces with a strong focus on user experience. Skilled in using tools like Figma and Adobe XD to bring ideas to life."
          />
          
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - Present</p>
          <h2 className="text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Graphic Designer"
            subTitle="WordSoft ent. - (2019 - Present)"
            result="Lagos"
            des="Designing high-quality branding materials, including logos, marketing assets, and social media visuals. Contributing to campaigns that enhance brand visibility and engagement."
          />
          <ResumeCard
            title="Photographer"
            subTitle="Yk Studios - (2024 - Present)"
            result="Lagos"
            des="Providing professional photography services for events, portraits, and products. Ensuring high-quality outputs with advanced editing techniques using Adobe Photoshop and Lightroom."
          />
          <ResumeCard
            title="Business Manager"
            subTitle="AbiolaSoft Finance (2023 - 2024)"
            result="Lagos"
            des="Overseeing financial projects and ensuring efficient team collaboration. Successfully managed operations, meeting deadlines, and driving organizational growth."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
