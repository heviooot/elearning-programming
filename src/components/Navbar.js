import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <>
      <nav
        className="flex justify-between items-center h-16 bg-white fixed w-screen shadow-md font-roboto"
        role="navigation"
      >
        <Link to="/" className="pl-8 font-mono text-4xl">
          dingoding.
        </Link>
        <div className="px-4 mr-10 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <Link
            className="px-4 py-3 rounded transition duration-200 ease-in-out hover:shadow-md hover:bg-orange hover:text-white"
            to="/"
          >
            Tentang Kami
          </Link>
          <Link
            className="px-4 py-3 rounded transition duration-200 ease-in-out hover:shadow-md hover:bg-orange hover:text-white"
            to="/"
          >
            Contoh Materi
          </Link>
          <Link
            className="px-4 py-3 rounded transition duration-200 ease-in-out hover:shadow-md hover:bg-orange hover:text-white"
            to="/"
          >
            Kontak Kami
          </Link>
          <Link
            className="relative text-white bg-orange mx-5 py-3 px-4 rounded shadow-md transition duration-200 ease-in-out hover:bg-lessdark"
            to="/"
          >
            Materi
          </Link>
        </div>
      </nav>
      <Dropdown isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navbar;
