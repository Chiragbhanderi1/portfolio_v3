"use client";

import AnimatedWrapper from "@/components/AnimatedWrapper/animatedWrapper";
export default function Contact() {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form submitted!");
  //   };

  return (
    <AnimatedWrapper>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <div class= "bg-[#0f0f0f] text-white p-4 rounded-lg ">
          <div class="flex items-center gap-2 mb-4">
            <svg
              class="w-5 h-5 text-gr"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <h2 class="text-lg font-semibold">Contact</h2>
          </div>
          <div class="flex gap-4 justify-between ">
            <a
              href="mailto:mhdamaan79@gmail.com"
              class="flex items-center gap-2 bg-gray-800 py-2 px-4 rounded-lg text-purple-400 hover:bg-gray-700"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-8.713h23.97l-11.985 8.713zm-12-9.713v16h24v-16h-24zm12 3.574l12 8.713v9.713h-24v-9.713l12-8.713z" />
              </svg>
              <span>mhdamaan79@gmail.com</span>
            </a>
            <a
              href="https://x.com"
              class="flex items-center gap-2 bg-gray-800 py-2 px-4 rounded-lg text-purple-400 hover:bg-gray-700"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Twitter</span>
            </a>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px]">

        </div>
        <form>
            <h2 className="text-white text-lg font-semibold mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-teal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
              Send Me a Message
            </h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Write a message..."
                rows="4"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              ></textarea>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="privacy"
                className="mr-2 h-4 w-4 text-purple-400 focus:ring-purple-400 border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="text-purple-400 text-sm">
                I read and agree with Privacy Policies
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-400 text-white p-3 rounded-lg hover:bg-purple-500 transition duration-300"
            >
              Submit
            </button>
          </form>
      </div>
      <div className=" max-w-4xl mx-auto mt-7 flex justify-between  gap-2 bg-[#0f0f0f] text-white/60 font-light rounded-[30px] px-6 py-8 group">
          <div>© 2025. All rights Reserved.</div>
          <div>Made by Chirag </div>
        </div>
    </AnimatedWrapper>
  );
}
