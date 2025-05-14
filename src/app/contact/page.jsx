"use client";

import { Linkedin, Mail, Send, UserRound } from "lucide-react";
import Link from "next/link";
export default function Contact() {

  return (
    <div>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <h1 className="text-white/90 text-3xl font-[500]">
          Let's Connect!
        </h1>
      </div>
      <div className="max-w-4xl mx-auto mt-7 space-y-6">
        <div className="bg-[#0f0f0f] text-white rounded-[30px] p-6">
          <div className="flex items-center gap-2 mb-4">
            <UserRound className="text-[#00cc96] w-5" />
            <h2 className="text-lg font-semibold">Contact</h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <Link
              href="mailto:cbhanderi666@gmail.com"
              className="flex w-full items-center gap-2 bg-[#2F2F2F] py-3 px-4 rounded-lg text-gray-300 hover:bg-gray-700"
            >
              <Mail className="w-4 text-[#AC99FE]" />
              <span>cbhanderi666@gmail.com</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/chirag-bhanderi-595695231/"
              className="w-full flex items-center gap-2 bg-[#2F2F2F] py-3 px-4 rounded-lg text-gray-300 hover:bg-gray-700"
            >
              <Linkedin className="w-4 text-[#AC99FE]" />
              <span>Chirag Bhanderi</span>
            </Link>
          </div>
        </div>
        <div className="max-w-4xl flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
          <form className="">
            <h2 className="text-white text-lg font-semibold mb-4 w-max flex items-center group">
              <Send className="text-[#00cc96] w-5 group-hover:rotate-45 transform-all duration-300"/>
              <p className="ml-3">Send Me a Message</p>
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="mb-4">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className=" w-full p-3  bg-[#2F2F2F] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#AC99FE]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full p-3  bg-[#2F2F2F] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#AC99FE]"
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Write a message..."
                rows="4"
                required
                className="w-full p-3 bg-[#2F2F2F] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#AC99FE]"
              ></textarea>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                required
                id="privacy"
                className="mr-2 h-4 w-4 bg-gray-50 rounded"
              />
              <label htmlFor="privacy" className="text-gray-300 text-sm">
                I read and agree with Privacy Policies
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-[#2F2F2F] py-3 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
}
