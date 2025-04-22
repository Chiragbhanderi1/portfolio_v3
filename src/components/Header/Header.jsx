import { CircleUserRound, FileText, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="">
      <div className="max-w-4xl mx-auto mt-7 flex justify-between items-center bg-[#0f0f0f] rounded-[30px] py-2 px-4">
        <div className="flex items-center space-x-3">
          <div className="rounded-[24px] overflow-hidden">
            <Image
              src="/assets/images/face_image.jpeg"
              width={68}
              height={68}
              className="object-cover"
              alt="Chirag Bhanderi"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-[#AC99FE] text-2xl font-[500]">
              Chirag Bhanderi
            </h2>
            <h3 className="text-gray-400 text-sm font-light">
              Full Stack Developer
            </h3>
          </div>
        </div>
        <div className="hidden md:flex items-center border border-[#00cc96] gap-2 rounded-[12px] py-1 px-2">
          <span className="w-[6px] h-[6px] rounded-full bg-[#00cc96]"></span>
          <p className="text-gray-300 text-sm font-light">Available for work</p>
        </div>
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
              className="group relative flex items-center justify-center bg-[#1a1a1a] w-11 h-11 rounded-[14px] transition-all"
              aria-label={label}
            >
              <Icon
                className="w-4 h-4 text-[#AC99FE] transition-all duration-300 
                      group-hover:text-white 
                      group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
