import { CircleUserRound, FileText, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="">
      <div className="max-w-4xl bg-[#0f0f0f] mt-7 py-4 px-6 mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 rounded-[30px] shadow-lg">
       
        <div className="flex items-center space-x-4">
          <div className="rounded-full overflow-hidden ">
            <Image
              src="/assets/images/face_image.jpeg"
              width={68}
              height={68}
              className="object-cover"
              alt="Chirag Bhanderi"
            />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-[#AC99FE] text-2xl font-semibold">
              Chirag Bhanderi
            </h2>
            <h3 className="text-gray-400 text-sm font-light">
              Full Stack Developer
            </h3>
          </div>
        </div>

        {/* Availability Badge */}
        <div className="flex items-center border border-[#00cc96] gap-2 rounded-[12px] py-1 px-3 bg-[#1a1a1a] shadow-md">
          <span className="w-[8px] h-[8px] rounded-full bg-[#00cc96]"></span>
          <p className="text-gray-300 text-sm font-light">Available for work</p>
        </div>

        {/* Navigation Section */}
        <nav className="flex space-x-3">
          {[
            { Icon: Github, href: "https://github.com/Chiragbhanderi1", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/chirag-bhanderi-595695231/", label: "LinkedIn" },
            { Icon: CircleUserRound, href: "https://www.upwork.com/freelancers/~01f05812283d395b43", label: "Upwork" },
            { Icon: FileText, href: "https://drive.google.com/file/d/1Q2dG3MrQprz_qfeOecoLCJqjQ8bG-mbI/view?usp=drive_link", label: "Resume" },
          ].map(({ Icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center bg-[#1a1a1a] w-12 h-12 rounded-full transition-all hover:bg-[#AC99FE] shadow-md"
              aria-label={label}
            >
              <Icon
                className="w-5 h-5 text-[#AC99FE] transition-all duration-300 
                      group-hover:text-white 
                      group-hover:drop-shadow-[0_0_16px_rgba(255,255,255)]"
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
