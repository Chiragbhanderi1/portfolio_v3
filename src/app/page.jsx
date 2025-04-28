import AnimatedWrapper from "@/components/AnimatedWrapper/animatedWrapper";
import { ArrowRight, FileText, Layers, PencilRuler } from "lucide-react";
import ProjectCards from "./_components/projectCards";
import Image from "next/image";
import { Testimonials } from "./_components/Testimonials";
import { motion } from "motion/react";

export default function Home() {
  const testimonials = [
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple",
      name: "Sachin Gondaliya",
      designation: "Freelancing Client",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Bhargav Bhutani",
      designation: "HR at Traskhym",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "⭐⭐⭐⭐⭐ - Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Maninder Singh",
      designation: "Client at Upwork",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
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
          More about me
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <h3 className="text-xl flex items-center gap-2 ">
          <PencilRuler className="h-4 w-4 text-[#00cc96]" /> Projects
        </h3>
        <ProjectCards />
        <div className="mt-2 group flex items-center justify-center gap-2 bg-[#1a1a1a] font-[400] rounded-[14px] py-2 px-4 text-[#AC99FE] cursor-pointer">
          All Projects
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-7 grid grid-cols-2 gap-4 ">
        <div className="w-full flex justify-between flex-col gap-6 bg-[#0f0f0f] rounded-[30px] p-6">
          <h3 className="text-xl flex items-center gap-2 ">
            <Layers className="h-4 w-4 text-[#00cc96]" /> Stack
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
              <p className="font-[500] ">Laravel</p>
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
              <p className="font-[500] ">React</p>
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
              <p className="font-[500] ">Zoho Creator</p>
            </div>
          </div>
          <div className="mt-2 group flex items-center justify-center gap-2 bg-[#1a1a1a] font-[400] rounded-[14px] py-2 px-4 text-[#AC99FE] cursor-pointer">
            Full Stack
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
        <div className="flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
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
      <div className="relative overflow-hidden max-w-4xl mx-auto mt-7 flex justify-center text-center flex-col gap-2 bg-[#0f0f0f] rounded-[30px] px-4 py-16 group">
        <h1 className="text-9xl font-[500]">Let's Connect</h1>
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
  );
}
