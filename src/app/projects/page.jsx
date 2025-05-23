"use client";
import Connect from "../_components/Connect";
import projects from "./projects";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./animated-modal";
import { useState } from "react";
import Link from "next/link";

export default function Project() {
  const [project, setProject] = useState(null);

  return (
    <>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl  text-center md:text-left">
          From Concept to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr to-purple-400 from-[#AC99FE]">
            Code
          </span>
        </h1>
      </div>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <Modal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-20 gap-x-10 mt-13 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-[30px] shadow-lg transition-transform duration-300 hover:scale-102"
              >
                <div className="p-5 bg-gradient-to-b from-[#beb0fb] to-white">
                  <img
                    src={project.src}
                    alt={`${project.title} Screenshot`}
                    className="w-full rounded-[20px] shadow-md h-64 -mt-17"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-xl font-bold text-gray-800">
                      {project.title}
                    </h2>

                    <ModalTrigger>
                      <div
                        onClick={() => setProject(project)}
                        className="text-[#AC99FE] text-sm hover:underline"
                      >
                        View More
                      </div>
                    </ModalTrigger>
                  </div>
                  <div
                    className="text-gray-600 text-sm leading-relaxed mb-5"
                    style={{
                      height: "150px",
                      overflowY: "hidden",
                      maskImage:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))",
                    }}
                  >
                    {typeof project.content === "function"
                      ? project.content()
                      : project.content}
                  </div>
                  {project != null && (
                    <div className="flex space-x-3">
                      {project?.tech.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white border border-gray-200"
                        >
                          <img
                            src={`/assets/images/${tech}.png`}
                            alt={tech}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {project && (
              <ModalBody>
                <ModalContent>
                  <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                    <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                      {project.title}
                    </span>
                  </h4>
                  <div className="flex justify-center items-center">
                    {project.gallery.map((image, idx) => (
                      <div key={"images" + idx}>
                        <div
                          className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border shrink-0 overflow-hidden transition-transform duration-300 ease-in-out hover-reset"
                          style={{
                            transform: `rotate(${Math.random() * 20 - 10}deg)`,
                            transition: "transform 0.3s ease",
                            position: "relative",
                          }}
                          onClick={() => window.open(image, "_blank")}
                        >
                          <img
                            src={image}
                            alt="bali images"
                            width="500"
                            height="500"
                            loading="lazy"
                            className="rounded-lg h-40 w-40 md:h-60 md:w-60 object-cover shrink-0"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-xl mx-auto">
                    {project.tech.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white border border-gray-200"
                      >
                        <img
                          src={`/assets/images/${tech}.png`}
                          alt={tech}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                    ))}
                    {typeof project.content === "function"
                      ? project.content()
                      : project.content}
                  </div>
                </ModalContent>
                <ModalFooter className="gap-4">
                  {project.ctaLink && (
                    <Link
                      target="_blank"
                      href={project.ctaLink}
                      className="px-2 py-1 text-center bg-black dark:border-black text-white border border-gray-300 rounded-md text-sm w-28"
                    >
                      Visit
                    </Link>
                  )}
                  <Link
                    href={"/contact"}
                    className="bg-white text-black text-sm px-2 py-1 rounded-md border text-center border-black w-28"
                  >
                    Connect
                  </Link>
                </ModalFooter>
              </ModalBody>
            )}
          </div>
        </Modal>
      </div>

      <Connect />
    </>
  );
}
