import React from "react";
import PrieCard from "./PrieCard";
import { priceInfo } from "../data";

const PriceSection = () => {
  return (
    <div
      className="container mx-auto text-center flex justify-around flex-col items-center"
      id="pricing"
    >
      <h1 className="text-3xl font-bold">Get Your Tickets</h1>
      <div className="grid grid-cols-3">
        {priceInfo.map((info) => (
          <PrieCard key={info.id} {...info} />
        ))}
      </div>
    </div>
  );
};

export default PriceSection;
