import Image from "next/image";
import Connect from "../_components/Connect";

export default function Stack() {
  const technologies = [
    { name: "HTML 5", src: "/assets/images/html.png", alt: "html" },
    { name: "CSS 3", src: "/assets/images/css.png", alt: "css" },
    { name: "Tailwind", src: "/assets/images/tailwind.png", alt: "Tailwind" },
    {
      name: "Bootstrap",
      src: "/assets/images/bootstrap.png",
      alt: "Bootstrap",
    },
    {
      name: "JavaScript",
      src: "/assets/images/javascript.png",
      alt: "Javascript",
      className: "w-10 ",
    },
    { name: "React", src: "/assets/images/react.png", alt: "React" },
    {
      name: "Next.js",
      src: "/assets/images/nextjs.png",
      alt: "NextJs",
      className: "h-10 w-10 bg-white rounded-full",
    },
    {
      name: "Vue",
      src: "/assets/images/vue.png",
      alt: "Vue",
      className: "w-10",
    },
    {
      name: "Express",
      src: "/assets/images/express.png",
      alt: "Express",
      className: "w-10 bg-white p-2",
    },
    { name: "Node.js", src: "/assets/images/node.png", alt: "NodeJs" },
    { name: "MongoDb", src: "/assets/images/mongodb.png", alt: "MongoDb" },
    { name: "Firebase", src: "/assets/images/firebase.png", alt: "Firebase" },
    { name: "Php", src: "/assets/images/php.png", alt: "Php" },
    { name: "Laravel", src: "/assets/images/laravel.png", alt: "Laravel" },
    { name: "Python", src: "/assets/images/python.png", alt: "Python" },
    { name: "MySQL", src: "/assets/images/sql.png", alt: "Sql" },
    {
      name: "Zoho (Deluge, Creator, CRM, Flow)",
      src: "/assets/images/creator.png",
      alt: "Zoho",
      className: "h-10 w-15",
    },
    {
      name: "AWS (Lambda, S3, Glue)",
      src: "/assets/images/aws.png",
      alt: "Aws",
      className: "h-8 w-10",
    },
  ];
  return (
    <>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <h1 className="text-white/90 text-3xl font-[500]">
          Hello there! Chirag here!
        </h1>
        <h3 className="text-white/50 font-[300]">
          I'm Chirag Bhanderi, a seasoned web developer proficient in both MERN
          (MongoDB, Express.js, React, Node.js) and MEVN (MongoDB, Express.js,
          Vue.js, Node.js) stacks. With a track record of contributing to
          multiple startup projects and working as a freelancer, I bring a
          wealth of experience in creating dynamic and efficient web
          applications. My commitment lies in delivering top-notch solutions
          that align with client objectives and industry standards.
        </h3>
      </div>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4  ">
          {technologies.map((tech, index) => (
            <div className="flex items-center gap-3" key={index}>
              <div className="rounded-[20px] p-4 bg-[#1a1a1a] w-18 h-18 flex items-center justify-center">
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  height={tech.height || 40}
                  width={tech.width || 40}
                  className={tech.className || ""}
                />
              </div>
              <p className="font-[500]  text-white">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Connect />
    </>
  );
}
