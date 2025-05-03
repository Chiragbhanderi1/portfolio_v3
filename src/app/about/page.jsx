import { BriefcaseBusiness, Globe, GraduationCap } from "lucide-react";
import Connect from "../_components/Connect";

const experiences = [
  {
    title: "AI.Cloud",
    description:
      "Joined TCS as an AI.Cloud Developer. I'm working on the development with cloud services like AWS and MDM platforms like Reltio. This is deepening my understanding of cloud services and python.",
    date: "TCS (November, 2024 - Present)",
  },
  {
    title: "Laravel | Zoho Creator",
    description:
      "I have provided end-to-end solution for multiple businesses across the domains through Laravel and Zoho Creator. Currently expanding my knowledge in zoho.",
    date: "Freelance (July, 2024 - Present)",
  },
  {
    title: "Product Developer",
    description:
      "In June 2023, I got the chance to create the product for the CITYNECT. I redesigned the existing app and added more creativity and functionality to it. It's currently serving at Citynect.in.",
    date: "Citynect (July 2023 - September 2023)",
  },
  {
    title: "Javascript Developer",
    description:
      "Internship at Techno It Hub. I created APIs in ExpressJs and the admin panel in React js.",
    date: "Techno IT Hub (January 2022 - June 2022)",
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
          (MongoDB, Express.js, React, Node.js) and MERN (MongoDB, Express.js,
          Vue.js, Node.js) stacks. With a track record of contributing to
          multiple startup projects and working as a freelancer, I bring a
          wealth of experience in creating dynamic and efficient web
          applications. My commitment lies in delivering top-notch solutions
          that align with client objectives and industry standards.
        </h3>
      </div>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <div className="flex items-center gap-2 ">
          <BriefcaseBusiness className=" text-[#00cc96] w-5" />
          <h2 className="text-lg font-semibold">Experience</h2>
        </div>
        <div>
          <ul className="space-y-5 px-2">
            {experiences.map((exp, index) => {
              return (
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
              );
            })}
          </ul>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <div className="flex items-center gap-2 ">
          <GraduationCap className=" text-[#00cc96] w-5" />
          <h2 className="text-lg font-semibold">Education</h2>
        </div>
        <div>
          <ul className="space-y-5">
            {experiences.map((exp, index) => {
              return (
                <li className="relative pl-6 text-white" key={index}>
                  <span className="absolute left-[5] top-2 w-2 h-2 bg-[#AC99FE] rounded-full"></span>
                  
                  <div className="ml-4 mt-2">
                    <h3 className="text-lg font-medium">{exp.title}</h3>
                    <p className="text-white/40">{exp.date}</p>
                    <p className="text-white/60">{exp.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Connect />
    </>
  );
}
