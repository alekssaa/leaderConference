import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
const Venue = () => {
  return (
    <section
      className="flex items-center justify-start bg-blue-50 pb-10"
      id="venue"
    >
      <div className="container mx-auto mt-10">
        <h1 className="text-blue-200 text-xl font-bold ml-10">
          Here you go <span className="underline">Venue</span>
        </h1>

        <div className="flex items-center justify-center ">
          <div className="w-[850px] h-[280px] rounded-3xl  m-3 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2569234425405!2d-73.99121873080732!3d40.75637355492462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2585240000001%3A0x339018d610c8ee6e!2sOne%20Times%20Square!5e0!3m2!1ssr!2sba!4v1703329522647!5m2!1ssr!2sba"
              height="100%"
              width={"100%"}
              style={{ border: 0, borderRadius: "24px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex items-start flex-col w-[850px] h-[280px] rounded-3xl shadow-black shadow-2xl bg-white">
            <div className="bg-blue-200 w-full h-[55px] postion-absolute rounded-t-2xl p-3 text-2xl text-white font-semibold flex items-center justify-between">
              <h1>Times Squaer</h1>
            </div>
            <div className="flex items-center justify-center font-bold text-2xl pt-5 pl-5 ">
              <IoLocationSharp className=" text-3xl mb-10" />
              <p>
                102 South. 7tj Street, New York, <br />{" "}
                <span className="-ml-[25px]">NY 10036, USA</span>
              </p>
            </div>
            <div className="flex items-center justify-center pt-5 pl-5 font-bold">
              <GrMail className="text-gray-50 mb-1" />
              <p className="text-gray-50 pl-2">hi@company.com</p>
            </div>
            <div className="flex items-center justify-center pt-5 pl-5 font-bold">
              <FaPhoneAlt className="text-gray-50 mb-1" />{" "}
              <p className="text-gray-50 pl-2">010-020-0340</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
