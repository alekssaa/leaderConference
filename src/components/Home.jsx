import React from "react";
import { highlights } from "../data";
import { FaArrowCircleDown } from "react-icons/fa";
const Home = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${"assets/images/bgimg.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center justify-center"
      id="home"
    >
      <div className="w-[100vr] h-screen  flex items-center justify-center flex-col container">
        <div className="flex items-center justify-center text-center h-full">
          <h3 className="text-4xl font-bold text-blue uppercase">
            <span className="text-blue-50 underline"> leadership</span>{" "}
            Conference 2025
          </h3>
        </div>
        <FaArrowCircleDown className="text-9xl text-blue-50  animate-bounce mb-10 " />
        <div className="flex items-center justify-center text-center border-4 border-blue-50 font-bold text-blue-50">
          <p className="p-4">July 12 to 18, 2025 </p>
          <p className="p-4 border-l-4 border"> Time Squaer, NY </p>
        </div>{" "}
        <div className="inline-flex p-10">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="w-[350px] h-[250px] m-5 text-center flex items-center justify-center text-white font-bold"
              style={{
                backgroundImage: `url(${highlight.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className="text-2xl">{highlight.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
