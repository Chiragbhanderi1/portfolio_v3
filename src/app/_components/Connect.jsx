import { ArrowRight } from "lucide-react";
import React from "react";

const Connect = () => {
  return (
    <div className="">
      <div className="relative overflow-hidden max-w-4xl mx-auto mt-7 flex justify-center text-center flex-col gap-2 bg-[#0f0f0f] rounded-[30px] px-4 py-16 group">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-[500] text-amber-50">
          Let's Connect
        </h1>
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
    </div>
  );
};

export default Connect;
