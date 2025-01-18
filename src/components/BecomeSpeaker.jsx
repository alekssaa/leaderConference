import React from "react";
import Button from "./Button";

const BecomeSpeaker = () => {
  return (
    <div
      id=""
      className="h-[300px] flex items-center justify-center mb-5"
      style={{
        backgroundImage: `url(${"assets/images/terren-hurst-blgOFmPIlr0-unsplash.jpg"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container grid grid-cols-2 items-center ">
        <div>
          <h1 className="text-2xl font-medium text-blue">
            Become am{" "}
            <span className="text-blue-50 underline">event Speaker ?</span>
          </h1>
          <p className="text-white pt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
            veritatis quam asperiores, ullam doloribus ab magnam sint dolores
            dignissimos deserunt unde molestiae error alias quas nihil fugiat!
            Harum, soluta recusandae!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button
            containerClass={
              "bg-orange text-blue text-xl font-bold   rounded-3xl w-[200px] h-[50px] p-2 "
            }
          >
            {" "}
            Register Today{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BecomeSpeaker;
