import React from "react";
import Button from "./Button";
import { userImg } from "../data";
const About = () => {
  return (
    <section id="about" className="flex items-center justify-center mb-3">
      <div className="grid grid-cols-2  container">
        <div className="flex items-start justify-center flex-col">
          <h1 className="text-3xl">
            Our <span className="text-blue underline">Story</span>
          </h1>
          <h3 className="text-2xl font-bold">
            The importance of leadership <br /> Converence in 2022
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi
            nesciunt, at repellendus, saepe inventore dolore incidunt minus
            aperiam quis iste laudantium praesentium recusandae magnam ab
            corrupti, ullam natus! Fuga? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Aut, voluptate?
          </p>
          <div className="pt-4">
            <Button
              containerClass={
                "text-blue-50 border-blue-50 border-2 rounded-3xl p-2  font-semibold "
              }
            >
              Meet Speakers
            </Button>
            <Button
              containerClass={
                "bg-blue-100 text-white rounded-3xl p-2 ml-3 font-semibold"
              }
            >
              Check Out Shedule
            </Button>
          </div>
        </div>
        <div className="flex items-start justify-center flex-col">
          <h1 className="text-3xl border-b-2 border-black pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            optio.met consectetur adipisicing elit. <br /> Quo, optio.
          </h1>
          <div className="flex items-center justify-center">
            <div className="inline-flex p-4 ">
              {userImg.map((img) => (
                <img
                  src={img.img}
                  key={img.id}
                  className="w-12 h-12 rounded-full "
                />
              ))}
            </div>
            <p className="font-extrabold pl-32">
              120+ People are attending with us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
