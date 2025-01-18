import React from "react";
import { FaFacebook, FaInstagram, FaViber, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black">
      <div className="container flex items-center justify-between flex-col mx-auto pt-10">
        <div className="flex items-start justify-between w-full">
          <img
            src="assets/images/logo.png"
            alt="logo"
            className="w-[225px] h-[65px]"
          />
          <div className="inline-flex items-center justify-center text-2xl ">
            <FaFacebook className="m-2 text-3xl " />
            <FaInstagram className="m-2 text-3xl " />
            <FaViber className="m-2 text-3xl " />
            <FaYoutube className="m-2 text-3xl " />
          </div>
        </div>
        <div className="border-b-[1px] border-gray pt-5 w-full  " />
        <div className="flex items-start justify-between w-full">
          {" "}
          <ul className="flex items-center w-[calc(80%)] ">
            <li className="pl-5">Our Story</li>
            <li className="pl-5">Code of Conduct</li>
            <li className="pl-5">Pprivacy and Tearms</li>
            <li className="pl-5">Contact</li>
          </ul>
          <div className="mr-10">
            <p className="text-center text-muted">&copy; 2025 Company, Inc</p>
            <p className="text-center text-muted">All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
