import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); //state untuk mengetahui dropdown lagi kebuka atau nggak

  const toggle = () => {
    //function untuk mengubah isOpen menjadi true atau sebaliknya
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const about = document.getElementById("about");
    window.scrollTo({ top: about.offsetTop-75, behavior: "smooth" });
  };

  const scrollToExamples = () => {
    const example = document.getElementById("examples");
    window.scrollTo({ top: example.offsetTop, behavior: "smooth" });
  };
  const scrollToContacts = () => {
    const contacts = document.getElementById("contacts");
    window.scrollTo({ top: contacts.offsetTop-75, behavior: "smooth" });
  };

  useEffect(() => {
    // hooks untuk menjalankan command tertentu pada waktu komponen di render
    const hideMenu = () => {
      //function untuk menyembunyikan dropdown kalo width diatas 768px(medium pada tailwindcss)
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu); // menambahkan eventListener untuk mengetahui apabila ukuran window terubah
    return () => {
      window.removeEventListener("resize", hideMenu); // menghilangkan eventListener ketika komponen tidak di render
    };
  });

  return (
    <>
      <nav
        className="fixed flex justify-center h-16 bg-white w-screen shadow-md font-roboto z-10"
        role="navigation"
      >
        <div className="container flex justify-between items-center">
          <div
            className="pl-8 font-mono text-4xl cursor-pointer"
            onClick={scrollToTop}
          >
            dingoding.
          </div>
          {/* onClick={toggle} artinya jalankan function "toggle" ketika gambar ini ditekan */}
          <div className="px-4 mr-2 cursor-pointer md:hidden" onClick={toggle}>
            {isOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </div>
          <div className="pr-4 hidden md:block">
            <div
              className="cursor-pointer inline-block px-4 py-3 mx-2 rounded-xl transition duration-200 ease-in-out hover:shadow-md hover:bg-orange hover:text-white"
              onClick={scrollToAbout}
            >
              Tentang
            </div>
            <div
              className="cursor-pointer inline-block px-4 py-3 mx-2 rounded-xl transition duration-200 ease-in-out hover:shadow-md hover:bg-orange hover:text-white"
              onClick={scrollToExamples}
            >
              Contoh Materi
            </div>
            <div
              className="cursor-pointer inline-block px-4 py-3 mx-2 rounded-xl transition duration-200 ease-in-out hover:shadow-md hover:bg-orange hover:text-white"
              onClick={scrollToContacts}
            >
              Kontak
            </div>
            <Link
              className="relative text-white bg-orange mx-5 py-3 px-4 rounded-xl shadow-md transition duration-200 ease-in-out hover:bg-lessdark"
              to="/lessons"
            >
              Materi
            </Link>
          </div>
        </div>
      </nav>

      {/* Menampilkan menu dropdown ketika window sedang pada tampilan smartphone */}
      <div
        className={
          isOpen
            ? "grid grid-rows-4 right-2 top-16 mt-2 fixed overflow-hidden text-center justify-center items-center bg-white rounded shadow-md z-10"
            : "hidden"
        }
      >
        <div
          className="cursor-pointer p-4 transition duration-200 ease-in-out hover:shadow-md hover:bg-orange hover:text-white"
          onClick={scrollToAbout}
        >
          Tentang Kami
        </div>
        <div className="p-4 transition duration-200 ease-in-out hover:shadow-md hover:bg-orange hover:text-white"
          onClick={scrollToExamples}
        >
          Contoh Materi
        </div>
        <div className="p-4 transition duration-200 ease-in-out hover:shadow-md hover:bg-orange hover:text-white"
          onClick={scrollToContacts}
        >
          Kontak Kami
        </div>
        <Link to="/lessons" className="p-4 bg-orange text-white transition duration-200 ease-in-out hover:bg-lessdark">
          Materi
        </Link>
      </div>
    </>
  );
};

export default Navbar;
