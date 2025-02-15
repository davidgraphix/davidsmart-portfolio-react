import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Yaba Tech"
            subTitle="Yaba College of Technology"
            result="Fresher"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Deep Tech - Software & Technology"
            subTitle="AbiolaSoft (2021 - 2024)"
            result="Internship"
            des="Focused on software and technology development, providing hands-on experience and preparation for a career in tech."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="AISSS Oko-Afo (2019 - 2024)"
            result="SSCE"
            des="Covered foundational and advanced knowledge in core academic subjects, meeting the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fullstack Developer"
            subTitle="AbiolaSoft - (2021 - Present)"
            result="Lagos"
            des="Collaborating on full-stack development projects, contributing to both front-end and back-end development using modern tools and technologies to create scalable applications."
          />
          <ResumeCard
            title="Graphic Designer"
            subTitle="Apple Developer Team - (2019 - Present)"
            result="Lagos"
            des="Designed impactful visuals and branding materials for various projects, contributing to Word Soft's high standards of design and innovation."
          />
          <ResumeCard
            title="Photographer"
            subTitle="Nike - (2024 - Present)"
            result="Lagos"
            des="Providing professional photography services, capturing dynamic and creative visuals for Yk Studios marketing campaigns and events."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education