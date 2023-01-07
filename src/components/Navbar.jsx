import { useState } from "react";

import { close, logo, menu } from "../assets";

import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      {/* 
        ul:justify-end items-center flex-1 
        li:mr-10 last:mr-0 + the other clasess
        trick to get the last element :
        index === navLinks.length - 1 ? 'mr-0' : 'mr-10' 
        */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          // idea: chainging the color of link on hover & focus & active
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
            text-white mr-10 last:mr-0 hover:text-secondary`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div
        className="mob-menu sm:hidden flex flex-1 
      justify-end items-center "
      >
        <img
          src={toggle ? close : menu}
          alt="menu-icon"
          className="w-[28px] h-[28px] object-contain 
        cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        {/* the best practice to update the state 
        depending on the prev state : setToggle((prev) => !prev) */}
        <div
          className={`${toggle ? "flex" : "hidden"} p-6 
        bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] 
        rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              // idea: chainging the color of link on hover & focus & active
              // most peopple nowadays visit all the websites from mobile, so we wanna make sure
              // that they are as reponsive as possiple
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer
             text-[16px] text-white mb-4 last:mb-0 `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
