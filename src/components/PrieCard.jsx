import React from "react";
import Button from "./Button";
const PrieCard = ({ id, coffe, party, support, text, type, price }) => {
  return (
    <div className="flex items-start flex-col w-[calc(100%-40px)] h-[400px]  rounded-3xl shadow-gray shadow-2xl m-10  ">
      <div className="bg-blue-200 w-full h-[55px] postion-absolute rounded-t-2xl p-3 text-2xl text-white font-semibold flex items-center justify-between">
        <h1 className="">{type}</h1>
        <h1>{price}</h1>
      </div>
      <div className="flex items-center justify-center pt-5 pl-5 ">
        {React.createElement(coffe.icon)}
        <p className="ml-2">{coffe.text}</p>
      </div>
      <div className="flex items-center justify-center pt-5 pl-5">
        {React.createElement(party.icon)}
        <p className="ml-2">{party.text}</p>
      </div>
      <div className="flex items-center justify-center pt-5 pl-5">
        {React.createElement(support.icon)}
        <p className="ml-2">{support.text}</p>
      </div>
      <div className="border-[1px] border-green w-[calc(90%)] ml-[calc(5%)] mt-10 " />
      <h3 className="text-center ml-5 font-bold mt-5">{text} </h3>

      <Button
        containerClass={
          "bg-blue-200 text-white rounded-3xl p-2 mt-5 ml-5 w-[145px] "
        }
      >
        Buy Tickets
      </Button>
    </div>
  );
};

export default PrieCard;
