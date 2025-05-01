import AnimatedWrapper from "@/components/AnimatedWrapper/animatedWrapper";
import { Globe } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function Abourt() {
  return (
    <>
      <AnimatedWrapper>
        <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
          <h1 className="text-white/90 text-3xl font-[500]">
            Hello there! Chirag here!
          </h1>
          <h3 className="text-white/50 font-[300]">
            I'm Chirag Bhanderi, a seasoned web developer proficient in both
            MERN (MongoDB, Express.js, React, Node.js) and MERN (MongoDB,
            Express.js, Vue.js, Node.js) stacks. With a track record of
            contributing to multiple startup projects and working as a
            freelancer, I bring a wealth of experience in creating dynamic and
            efficient web applications. My commitment lies in delivering
            top-notch solutions that align with client objectives and industry
            standards.
          </h3>
        </div>
        <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
          <div className="flex items-center gap-2 ">
            <Globe className=" text-[#33c69f]" />
            <h3 className=" text-white/50 ">Experience</h3>
          </div>
          <div>
            <ul className="space-y-5">
              <li className="relative pl-6  text-white">
                <span className="absolute left-[5] top-2 w-2 h-2 bg-purple-400 rounded-full"></span>
                <span className="absolute left-2 top-6 w-0.5 h-full bg-white/20"></span>
                <div className="ml-4 mt-2">
                  <h3 className="text-lg font-medium">AI.Cloud | TCS</h3>
                  <p className="text-gray-400">
                    joined TCS as an AI.Cloud Developer. I'm working on the
                    development with cloud services like AWS and MDM platforms
                    like Reltio.This is deepening my understanding of cloud
                    services and python.
                  </p>
                  <p className="text-gray-600">November,2024 - Present</p>
                </div>
              </li>
              <li className="relative pl-6  text-white">
                <span className="absolute left-[5] top-2 w-2 h-2 bg-purple-400 rounded-full"></span>
                <span className="absolute left-2 top-6 w-0.5 h-full bg-white/20"></span>
                <div className="ml-4 mt-2">
                  <h3 className="text-lg font-medium">
                    Continuos Learning with freelancing projects
                  </h3>
                  <p className="text-gray-400">
                    Continuing from Citynect, I delved into Vue.js and Laravel,
                    crafting several projects. Despite challenges, I began
                    freelancing, though success hasn't fully materialized yet.
                    But I'm committed and pushing forward.
                  </p>
                  <p className="text-gray-600">July,2024 - Present</p>
                </div>
              </li>
              <li className="relative pl-6">
                <span className="absolute left-[5] top-2 w-2 h-2 bg-purple-400 rounded-full"></span>
                <span className="absolute left-2 top-6 w-0.5 h-full bg-white/20"></span>
                <div className="ml-4 mt-2">
                  <h3 className="text-lg font-medium text-white">
                    Product Development Internship
                  </h3>
                  <p className="text-gray-400">
                    In june 2023, I got the chance to create the product for the
                    CITYNECT. I redesigned the existing app and added more
                    creativity and functionality to it. It's currenlty serving
                    at Citynect.in
                  </p>
                  <p className="text-gray-600">July 2023</p>
                </div>
              </li>
              <li className="relative pl-6">
                <span className="absolute left-[5] top-2 w-2 h-2 bg-purple-400 rounded-full"></span>
                <span className="absolute left-2 top-6 w-0.5 h-full bg-white/20"></span>
                <div className="ml-4 mt-2">
                  <h3 className="text-lg font-medium text-white">
                    Full Stack Internship
                  </h3>
                  <p className="text-gray-400">
                    After my 1st internship I dived into Javascript frameworks
                    (ReactJs, NextJs, ExpressJs). Soon I got 6 months Internship
                    at Techno It Hub. I created APIs in ExpressJs and the admin
                    panel in React js.
                  </p>
                  <p className="text-gray-600">January 2023</p>
                </div>
              </li>
              <li className="relative pl-6">
                <span className="absolute left-[5] top-2 w-2 h-2 bg-purple-400 rounded-full"></span>
                <span className="absolute left-2 top-6 w-0.5 h-full bg-white/20"></span>
                <div className="ml-4 mt-2">
                  <h3 className="text-lg font-medium text-white">
                    First Internship
                  </h3>
                  <p className="text-gray-400">
                    After Learning basics ( HTML,CSS & Javascript ). I got my
                    first Internship at intership studio where I designed the
                    E-Commerse website.
                  </p>
                  <p className="text-gray-600">January 2023</p>
                </div>
              </li>
              <li className="relative pl-6">
                <span className="absolute left-[5] top-2 w-2 h-2 bg-purple-400 rounded-full"></span>
                <span className="absolute left-2 top-6 w-0.5 h-full bg-white/20"></span>
                <div className="ml-4 mt-2">
                  <h3 className="text-lg font-medium text-white">
                    Started Learning Web Developement
                  </h3>
                  <p className="text-gray-400">
                    During my second year of college I started learning web
                    development from the Internet.
                  </p>
                  <p className="text-gray-600">March 2021</p>
                </div>
              </li>
              <li className="relative pl-6">
                <span className="absolute left-[5] top-2 w-2 h-2 bg-purple-400 rounded-full"></span>
                <span className="absolute left-2 top-6 w-0.5 h-13 bg-white/20"></span>
                <div className="ml-4 mt-2">
                  <h3 className="text-lg font-medium text-white">
                    Started Learning Web DevelopementL.D.C.E. (Electronics &
                    Communication){" "}
                  </h3>
                  <p className="text-gray-400">
                    Starting my engineering in electronics and communication at
                    L.D. College of engineering Ahemdabad
                  </p>
                  <p className="text-gray-600">September 2020</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
                 
         <div className="relative overflow-hidden max-w-4xl mx-auto mt-7 flex justify-center text-center flex-col gap-2 bg-[#0f0f0f] rounded-[30px] px-4 py-16 group">
          <h1 className="text-9xl font-[500] text-amber-50">Let's Connect</h1>
          <a
            href="/contact"
            className="absolute left-0 w-full z-10 h-full flex items-center justify-center rounded-[30px] opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{ backgroundColor: "rgba(15, 15, 15, 0.8)" }}
          >
            <div className="bg-[#D6CCFE] p-8 rounded-full opacity-100 translate-y-full group-hover:translate-y-0 rotate-90 group-hover:rotate-0 transition-all duration-500">
              <ArrowRight size={50} className="text-black" />
            </div>
          </a>
        </div> 

        <div className=" max-w-4xl mx-auto mt-7 flex justify-between  gap-2 bg-[#0f0f0f] text-white/60 font-light rounded-[30px] px-6 py-8 group">
          <div>© 2025. All rights Reserved.</div>
          <div>Made by Chirag </div>
        </div>
      </AnimatedWrapper>
    </>
  );
}
