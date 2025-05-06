export default function Stack() {
  const technologies = [
    { name: "HTML 5", src: "/assets/images/html.png", alt: "html" },
    { name: "CSS 3", src: "/assets/images/css.png", alt: "css" },
    {
      name: "JavaScript",
      src: "/assets/images/JavaScript.png",
      alt: "Javascript",
    },
    { name: "React", src: "/assets/images/React.png", alt: "React" },
    {
      name: "Next.js",
      src: "/assets/images/Nextjs.png",
      alt: "NextJs",
      className: "h-15 w-15 bg-white rounded-4xl",
    },
    {
      name: "Redux",
      src: "/assets/images/React.png",
      alt: "Redux",
      className: "h-10 w-10",
    },
    { name: "Node.js", src: "/assets/images/node.png", alt: "NodeJs" },
    { name: "MongoDb", src: "/assets/images/mongodb.png", alt: "MongoDb" },
    { name: "Laravel", src: "/assets/images/laravel.png", alt: "Laravel" },
    { name: "Python", src: "/assets/images/Python.png", alt: "Python" },
    { name: "Php", src: "/assets/images/php.png", alt: "Php" },
    { name: "Vue", src: "/assets/images/Vue.png", alt: "Vue" },
    { name: "Tailwind", src: "/assets/images/tailwind.png", alt: "Tailwind" },
    {
      name: "Bootstrap",
      src: "/assets/images/bootstrap.png",
      alt: "Bootstrap",
    },
    {
      name: "Zoho",
      src: "/assets/images/zoho.png",
      alt: "Zoho",
      className: "h-15 w-20",
    },
    { name: "Firebase", src: "/assets/images/firebase.png", alt: "Firebase" },
    { name: "Sql", src: "/assets/images/sql.png", alt: "Sql" },
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
        <div className="grid grid-cols-2 gap-4 p-6 rounded-lg">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg"
            >
              <img
                src={tech.src}
                className={tech.className || "h-15 w-15"}
                alt={tech.alt}
              />
              <span className="text-white text-lg">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
