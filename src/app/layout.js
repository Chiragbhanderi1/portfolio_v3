import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import BottomMenu from "@/components/BottomMenu/BottomMenu";
import "./globals.css";
import {
  IconHome,
  IconMail,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import { Layers, Layers2, PencilRuler, Send } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const menuItems = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "/",
    },
    {
      title: "Profile",
      icon: <IconUser className="h-full w-full" />,
      href: "/profile",
    },
    {
      title: "Projects",
      icon: <PencilRuler className="h-full w-full"/>,
      href: "/projects",
    },
    {
      title: "Stack",
      icon: <Layers className="h-full w-full"/>,//>,
      href: "/stack",
    },
    {
      title: "Contact",
      icon: <Send className="h-full w-full"/>,
      href: "/contact",
    },
  ];
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#050505" }}>
        <div className="mb-28">
          <Header />
          <main className="main-content">{children}</main>

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
