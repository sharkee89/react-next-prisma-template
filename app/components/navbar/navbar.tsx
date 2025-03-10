'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MENU_ITEMS } from "../../constant/app.constant";
import Link from "next/link";
import { useState } from "react";
import { Span } from "next/dist/trace";

const Navbar = ({ user }: { user: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="text-white text-2xl fixed top-2.5 left-2.5 z-[999] sm:hidden"
      >
        {!isOpen && <span>&#9776;</span>}
        {isOpen && <span>&#10005;</span>}
      </button>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 transition-all duration-300 ease-in-out sm:left-0 ${
          isOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex flex-col">
          <div className="text-lightblue-500 text-lg font-semibold mb-6">Menu</div>
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-lightblue-500 hover:text-lightblue-400 text-lg font-semibold p-4 hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="mr-4 max-w-[24px]"
              />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
