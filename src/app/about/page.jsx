import { BriefcaseBusiness, Globe, GraduationCap } from "lucide-react";
import Connect from "../_components/Connect";

const experiences = [
  {
    title: "AI.Cloud Developer",
    description:
      "Joined TCS as an AI.Cloud Developer. I'm working on development with cloud services like AWS and MDM platforms like Reltio. This is deepening my understanding of cloud services and Python.",
    date: "TCS (November 2024 - Present)",
  },
  {
    title: "Laravel | Zoho Creator Developer",
    description:
      "Provided end-to-end solutions for multiple businesses across domains using Laravel and Zoho Creator. Currently expanding my knowledge in Zoho.",
    date: "Freelance (July 2024 - Present)",
  },
  {
    title: "Product Developer",
    description:
      "Redesigned and enhanced the CITYNECT app, adding creativity and functionality. It's currently serving at Citynect.in.",
    date: "Citynect (July 2023 - September 2023)",
  },
  {
    title: "JavaScript Developer",
    description:
      "Internship at Techno IT Hub. Created APIs in Express.js and an admin panel in React.js.",
    date: "Techno IT Hub (January 2022 - June 2022)",
  },
];

const Education = [
  {
    title: "L.D.C.E. (Electronics & Communication)",
    description: "L.D. College of Engineering, Ahmedabad",
    date: "September 2020 - June 2024",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    description: "PP Savani Vidhyabhavan, Surat",
    date: "2018 - 2020",
  },
  {
    title: "Secondary School Certificate (SSC)",
    description: "Jawahar Navodaya Vidyalaya, Surat",
    date: "2016 - 2018",
  },
];

export default function About() {
  return (
    <>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <h1 className="text-white/90 text-3xl font-[500]">
          Hello there! Chirag here!
        </h1>
        <h3 className="text-white/50 font-[300]">
          I'm Chirag Bhanderi, a seasoned web developer proficient in both MERN
          (MongoDB, Express.js, React, Node.js) and MEVN (MongoDB, Express.js,
          Vue.js, Node.js) stacks. With a track record of contributing to
          multiple startup projects and working as a freelancer, I bring a
          wealth of experience in creating dynamic and efficient web
          applications. My commitment lies in delivering top-notch solutions
          that align with client objectives and industry standards.
        </h3>
      </div>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6 overflow-visible">
        <div className="flex items-center gap-2 text-xl">
          <BriefcaseBusiness className="text-[#00cc96] w-5" /> Experience
        </div>
        <div>
          <ul className="space-y-5 px-2">
            {experiences.map((exp, index) => (
              <li className="relative pl-6 text-white" key={index}>
                <span className="absolute left-[5] top-2 w-2 h-2 bg-[#AC99FE] rounded-full"></span>
                <span
                  className={`absolute left-2 top-4 w-0.5 ${
                    index === experiences.length - 1 ? "h-full" : "h-[120%]"
                  } bg-white/20`}
                ></span>
                <div className="ml-4 mt-2">
                  <h3 className="text-lg font-medium">{exp.title}</h3>
                  <p className="text-white/40">{exp.date}</p>
                  <p className="text-white/60">{exp.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6 overflow-visible">
        <div className="flex items-center gap-2 text-xl">
          <GraduationCap className="text-[#00cc96] w-5 " /> Education
        </div>
        <div>
          <ul className="space-y-5 px-2">
            {Education.map((edu, index) => (
              <li className="relative pl-6 text-white" key={index}>
                <span className="absolute left-[5] top-2 w-2 h-2 bg-[#AC99FE] rounded-full"></span>
                <span
                  className={`absolute left-2 top-4 w-0.5 ${
                    index === Education.length - 1 ? "h-full" : "h-[120%]"
                  } bg-white/20`}
                ></span>
                <div className="ml-4 mt-2">
                  <h3 className="text-lg font-medium">{edu.title}</h3>
                  <p className="text-white/40">{edu.date}</p>
                  <p className="text-white/60">{edu.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Connect />
    </>
  );
}