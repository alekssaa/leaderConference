import React from "react";
import { infoCard, infoDate } from "../data";
import Card from "./Card";

const Schedules = () => {
  return (
    <section id="schedules" className="flex items-center justify-center">
      <div className="container flex items-center justify-center flex-col">
        <h1 className="text-3xl ">
          Next <span className="underline text-blue"> Schedules</span>
        </h1>
        <div className="flex items-center justify-between w-screen container mt-10">
          {infoDate.map((info) => (
            <div
              key={info.day}
              className="flex items-start justify-center flex-col border-l-2 p-5 first:border-l-0"
            >
              <h1 className="text-2xl font-medium">{info.day}</h1>
              <h3 className="text-lg">{info.start}</h3>
            </div>
          ))}
        </div>
        <div className="mt-10 container">
          {infoCard.map((info) => (
            <Card key={info.id} {...info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedules;
