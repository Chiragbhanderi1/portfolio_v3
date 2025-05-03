import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import BottomMenu from "@/components/BottomMenu/BottomMenu";
import "./globals.css";
import { IconHome, IconUser } from "@tabler/icons-react";
import { Layers, PencilRuler, Send } from "lucide-react";
import AnimatedWrapper from "@/components/AnimatedWrapper/animatedWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const menuItems = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "/",
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full" />,
      href: "/about",
    },
    {
      title: "Projects",
      icon: <PencilRuler className="h-full w-full" />,
      href: "/projects",
    },
    {
      title: "Stack",
      icon: <Layers className="h-full w-full" />, //>,
      href: "/stack",
    },
    {
      title: "Contact",
      icon: <Send className="h-full w-full" />,
      href: "/contact",
    },
  ];
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#050505" }}>
        <div className="mb-28">
          <AnimatedWrapper>
            <Header />
            <main className="main-content">{children}</main>
            <div className=" max-w-4xl mx-auto mt-7 flex justify-between  gap-2 bg-[#0f0f0f] text-white/60 font-light rounded-[30px] px-6 py-8 group">
              <div>© 2025. All rights Reserved.</div>
              <div>Made by Chirag </div>
            </div>
          </AnimatedWrapper>
          <div className="fixed inset-x-0 bottom-5 z-[999] flex items-center justify-center">
            <BottomMenu
              items={menuItems}
              desktopClassName="shadow-lg dark:bg-neutral-800"
              mobileClassName="fixed bottom-4 right-4"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
