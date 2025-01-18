import React from "react";
import { FaClock } from "react-icons/fa";
import { FcReadingEbook } from "react-icons/fc";
const Card = ({
  id,
  img,
  title,
  desc,
  prsonName,
  position,
  time,
  place,
  personImg,
}) => {
  return (
    <div key={id} className="flex items-start pb-10 ">
      <img src={img} alt="imageconference" className="w-[450px] pr-8" />
      <div>
        <h1 className="text-xl font-bold "> {title}</h1>
        <p className="text-lg font-medium">{desc} </p>
        <div className="mt-10 inline-flex text-gray font-semibold justify-between w-full items-center">
          <div className="flex items-center">
            <img
              src={personImg}
              alt="person"
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="pl-2">
              <h1 className="text-black">{prsonName}</h1>
              <h4>{position}</h4>
            </div>
          </div>{" "}
          <div className="flex items-center align-center">
            <FaClock className="mr-2 mb-1" /> <h3>{time}</h3>
          </div>
          <div className="flex items-center align-center">
            <FcReadingEbook className="mr-2 mb-1" />
            <h3>{place}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
