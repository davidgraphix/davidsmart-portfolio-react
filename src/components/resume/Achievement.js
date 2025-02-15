import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Sack Engineer."
            subTitle="AbiolaSoft Finance App."
            result="Intern"
            des="Contributed to the development of financial applications, focusing on seamless integration between front-end and back-end systems. Gained hands-on experience in full-stack development using modern frameworks."
          />
           <ResumeCard
            title="UI/US Design."
            subTitle="David Smart Soft."
            result="Learning"
            des="Acquired and applied design principles to create user-friendly and visually appealing interfaces. Learned industry tools like Figma and Adobe XD to deliver prototypes and designs."
          />
        </div>
      </div>
      <div>
        {/* <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div> */}
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Photographer."
            subTitle="Yk Studios."
            result="Manager"
            des="Managed photography projects, providing creative direction and high-quality visual content for various events and campaigns. Oversaw editing and post-production to ensure professional results."
          />
          <ResumeCard
            title="Business Manager."
            subTitle="AbiolaSoft Finance."
            result="Manager"
            des="Oversaw financial operations and team collaboration, successfully managing projects to meet company objectives and deadlines while driving organizational growth."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
