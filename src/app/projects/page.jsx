import Connect from "../_components/Connect";
import products from "./products";

export default function Project() {
  return (
    <>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <h1 className="text-white text-5xl">
          Something I Have {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr to-purple-400 from-[#AC99FE]">
            Created
          </span>
        </h1>
      </div>
      <div className="max-w-4xl mx-auto mt-7 flex justify-between flex-col gap-2 bg-[#0f0f0f] rounded-[30px] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-20 gap-x-10 mt-13 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-[30px] shadow-lg transition-transform duration-300 hover:scale-102"
            >
              <div className="p-5 bg-gradient-to-b from-[#beb0fb] to-white">
                <img
                  src={product.thumbnail}
                  alt={`${product.title} Screenshot`}
                  className="w-full rounded-t-[20px] shadow-md -mt-17"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl font-bold text-gray-800">
                    {product.title}
                  </h2>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AC99FE] text-sm hover:underline"
                  >
                    Visit
                  </a>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {product.description}
                </p>
                <div className="flex space-x-3">
                  {product.tech.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white border border-gray-200"
                    >
                      <img
                        src={`/assets/images/${tech}.png`}
                        alt={tech}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Connect />
    </>
  );
}
