import AnimatedWrapper from "@/components/AnimatedWrapper/animatedWrapper";
import { ArrowRight, FileText, Layers, PencilRuler } from "lucide-react";
import ProjectCards from "./_components/projectCards";
import Image from "next/image";
import { Testimonials } from "./_components/Testimonials";
import Connect from "./_components/Connect";

export default function Home() {
  const testimonials = [
    {
      quote:
        "Chirag Bhanderi is a reliable and talented developer I've collaborated with across various technology stacks. Whether it's building responsive UIs using React or Vue, or structuring backend logic with Laravel and Python, Chirag delivers with precision and quality. His ability to stay calm under pressure and his eagerness to take on new challenges make him a standout team member.",
      name: "Sachin Gondaliya",
      designation: "Freelancing Client",
      src: "/assets/images/sachin.png",
    },
    {
      quote:
        "Working with Chirag on our Next.js project was a fantastic experience. His eye for design and ability to solve complex problems quickly made a real difference.",
      name: "Bhargav Bhutani",
      designation: "HR at Trakshym",
      src: "/assets/images/trakshym.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. His problem solving skills is remarkable. Would love to work with him again.",
      name: "Maninder Singh",
      designation: "Client at Upwork",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <AnimatedWrapper>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <h1 className="text-white/90 text-3xl font-[500]">
          Hello there! Chirag here!
        </h1>
        <h3 className="text-white/50 font-[300]">
          I'm Chirag Bhanderi, a versatile Full Stack Developer with 1.5+ years
          of experience in building robust, user-centered applications. With a
          strong foundation in the MERN stack and Laravel, I thrive in dynamic
          environments and enjoy exploring emerging areas like AI and Python.
          Driven by a commitment to high performance, I'm continuously expanding
          my skills to create impactful, scalable solutions.
        </h3>
        <div className="mt-2 group flex items-center justify-center gap-2 bg-[#1a1a1a] font-[500] rounded-[14px] py-2 px-4 text-[#AC99FE] cursor-pointer">
          <a href="/about">More about me</a>
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <h3 className="text-xl flex items-center gap-2 ">
          <PencilRuler className="h-4 w-4 text-[#00cc96] " /> Projects
        </h3>
        <ProjectCards />
        <a
          href="/projects"
          className="mt-2 group flex items-center justify-center gap-2 bg-[#1a1a1a] font-[400] rounded-[14px] py-2 px-4 text-[#AC99FE] cursor-pointer"
        >
          All Projects
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
      <div className="max-w-4xl mx-auto mt-7 grid md:grid-cols-2 grid=cols-1 gap-4 ">
        <div className="w-full flex justify-between flex-col gap-6 bg-[#0f0f0f] rounded-[30px] p-6">
          <h3 className="text-xl flex items-center gap-2 ">
            <Layers className="h-4 w-4 text-[#1edeab]" /> Stack
          </h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="rounded-[20px] p-4 bg-[#1a1a1a]">
                <Image
                  src="/assets/images/laravel.png"
                  width={30}
                  height={30}
                  className="object-cover"
                  alt="Stack"
                />
              </div>
              <p className="font-[500]  text-white/50  ">Laravel</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-[20px] p-4 bg-[#1a1a1a]">
                <Image
                  src="/assets/images/react.png"
                  width={30}
                  height={30}
                  className="object-cover"
                  alt="Stack"
                />
              </div>
              <p className="font-[500] text-white/50 ">React</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-[20px] p-4 bg-[#1a1a1a]">
                <Image
                  src="/assets/images/creator.png"
                  width={30}
                  height={30}
                  className="object-cover"
                  alt="Stack"
                />
              </div>
              <p className="font-[500] text-white/50">Zoho Creator</p>
            </div>
          </div>
          <a
            href="/stack"
            className="mt-2 group flex items-center justify-center gap-2 bg-[#1a1a1a] font-[400] rounded-[14px] py-2 px-4 text-[#AC99FE] cursor-pointer"
          >
            Full Stack
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
        <div className="flex justify-between flex-col gap-6 bg-[#0f0f0f] rounded-[30px] p-6">
          <h3 className="w-full text-xl flex items-center gap-2 ">
            <FileText className="h-4 w-4 text-[#00cc96]" /> Resume
          </h3>
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#3b82f6] rounded-[20px] px-4 py-2">
            <Image
              src="/assets/images/resume.png"
              width={150}
              height={150}
              className="object-cover border-6 border-[#1a1a1a] rounded-md"
              alt="resume"
            />
          </div>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1Q2dG3MrQprz_qfeOecoLCJqjQ8bG-mbI/view?usp=drive_link"
            className="mt-2 group flex items-center justify-center gap-2 bg-[#1a1a1a] font-[400] rounded-[14px] py-2 px-4 text-[#AC99FE] cursor-pointer"
          >
            Google Drive Link
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
      <Testimonials testimonials={testimonials} />
      <Connect />
    </AnimatedWrapper>
  );
}
