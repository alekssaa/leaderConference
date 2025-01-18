import React, { useEffect, useState } from "react";
import SpeakersCard from "./SpeakersCard";
import { speakers } from "../data";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
const Speakers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = speakers[activeIndex];
  const hendleNext = () => {
    setActiveIndex((prevState) => (prevState + 1) % speakers.length);
  };
  const hendlePrev = () => {
    setActiveIndex((prevState) =>
      prevState === 0 ? speakers.length - 1 : prevState - 1
    );
  };
  const hendleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section
      className="flex items-center justify-center h-[calc(81vh)] w-full bg-green-100 mt-10 relative flex-col "
      id="speakers"
    >
      <div className="grid grid-cols-2 ">
        <div className="flex items-start justify-start flex-col pt-10">
          <h1 className="text-3xl ">
            Our <span className="text-blue underline ">Speakers</span>
          </h1>
          <div className="w-[400px] h-[35px] ">
            <h1 className="mt-5 text-2xl">{active.name}</h1>
            <p>{active.desc}</p>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <SpeakersCard props={active} containerClass="w-[515px] h-[300px]" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-wrap cursor-pointer ">
        <FaAngleLeft
          className="text-6xl text-blue absolute top-1/2 left-20 "
          onClick={hendlePrev}
        />
        {speakers.map((speaker, index) => (
          <SpeakersCard
            key={speaker.id}
            props={speaker}
            hendleClick={hendleClick}
            index={index}
          />
        ))}

        <FaAngleRight
          className="text-6xl text-blue absolute top-1/2 right-20 cursor-pointer"
          onClick={hendleNext}
        />
      </div>
    </section>
  );
};

export default Speakers;
