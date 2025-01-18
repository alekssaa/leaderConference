import React, { useRef, useState, useEffect } from "react";
import { links } from "../data";
import Button from "./Button";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
const Navbar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.1,
    });
  }, [isNavVisible]);
  return (
    <div
      className="fixed inset-x-0  z-50 border-none transition-all duration-700 bg-blue-200 text-white"
      ref={navContainerRef}
    >
      <div className="container mx-auto flex items-center justify-between">
        <img
          src="assets/images/logo.png"
          className="w-[225px] h-[65px] ml-20"
          alt=""
        />
        <div>
          <ul className="flex items-center p-5">
            {links.map((link) => {
              return (
                <li key={link.id} className="p-5">
                  <a href={link.path}>{link.name}</a>
                </li>
              );
            })}
            <li>
              <Button
                containerClass={
                  "bg-blue text-white rounded-3xl w-[150px] h-[45px]"
                }
              >
                Buy Tickets
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
