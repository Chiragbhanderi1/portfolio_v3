import AnimatedWrapper from "@/components/AnimatedWrapper/animatedWrapper";
import { ArrowRight } from "lucide-react";

export default function Home() {
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
        <div className="mt-2 flex items-center justify-center gap-2 bg-[#1a1a1a]  font-[500] rounded-[14px] py-2 px-4 text-[#AC99FE] ">
          More about me <ArrowRight size={15} />
        </div>
      </div>
    </AnimatedWrapper>
  );
}
