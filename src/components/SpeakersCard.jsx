import React from "react";

const SpeakersCard = ({ props, containerClass, hendleClick, index }) => {
  return (
    <div
      className={`relative  m-2 z-10 flex-inline  ${
        containerClass ? containerClass : "w-[250px] h-[200px]"
      } `}
      style={{
        backgroundImage: `url(${props.img})`,
        backgraoundSize: "cover",
        backgroundPosition: "cover",
        backgroundSize: "cover",
      }}
      onClick={() => {
        hendleClick(index);
      }}
    >
      <div className="absolute bottom-0 left-0 pt-5 pl-2 ml-5 mb-2 border-l-4 border-blue bg-orange w-[calc(100%-30px)] h-[80px]  justify-start">
        <h1 className="text-2xl font-semibold -mt-5 ">{props.name}</h1>
        <h1 className="text-gray-100 font-bold">{props.positon}</h1>
      </div>
    </div>
  );
};

export default SpeakersCard;
