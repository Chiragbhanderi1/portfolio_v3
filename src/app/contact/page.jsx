"use client";

import AnimatedWrapper from "@/components/AnimatedWrapper/animatedWrapper";
import { CircleUserRound } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Send } from 'lucide-react';

export default function Contact() {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form submitted!");
  //   };

  return (
    <AnimatedWrapper>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <h1 className="text-white/90 text-3xl font-[500] ml-5">
          Let's Connect!
        </h1>
      </div>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <div className="bg-[#0f0f0f] text-white p-4 rounded-lg ">
          <div className="flex items-center gap-2 mb-4">
            <CircleUserRound className="w-5 h-5 text-teal-400 " />
            <h2 className="text-lg font-semibold">Contact</h2>
          </div>
          <div className="flex gap-4 justify-between ">
            <a
              href="mailto:mhdamaan79@gmail.com"
              className="flex items-center gap-2 bg-[#2F2F2F] py-2 px-4 rounded-lg text-gray-300 hover:bg-gray-700"
            >
               <Mail  className="w-5 h-5 text-teal-400" />
              <span>mhdamaan79@gmail.com</span>
            </a>
            <a
              href="https://x.com"
              className="flex items-center gap-2 bg-[#2F2F2F] py-2 px-4 rounded-lg text-gray-300 hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5 text-teal-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Twitter</span>
            </a>
          </div>
        </div>
        <div className="max-w-4xl  flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px]">
          <form className="m-4">
            <h2 className="text-white text-lg font-semibold mb-4  flex items-center">
              <Send className="w-5 h-5 text-teal-400" />
              <p className="ml-3">Send Me a Message</p>
            </h2>
            <div className="flex ml-[-12]">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-99 p-3 m-3 bg-[#2F2F2F] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-99 p-3 m-3 bg-[#2F2F2F] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Write a message..."
                rows="4"
                className="w-full p-3 bg-[#2F2F2F] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              ></textarea>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="privacy"
                className="mr-2 h-4 w-4 text-purple-400 focus:ring-purple-400 border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="text-gray-300 text-sm">
                I read and agree with Privacy Policies
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-400 text-white/80 p-3 rounded-lg hover:bg-purple-500 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className=" max-w-4xl mx-auto mt-7 flex justify-between  gap-2 bg-[#0f0f0f] text-white/60 font-light rounded-[30px] px-6 py-8 group">
        <div>© 2025. All rights Reserved.</div>
        <div>Made by Chirag </div>
      </div>
    </AnimatedWrapper>
  );
}
