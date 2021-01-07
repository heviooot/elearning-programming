import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({toggle, isOpen}) => { // Menangkap state dari isOpen dan function "toggle" dari komponen navbar
  return (
    // di div utama, classname akan ditentukan oleh state dari isOpen
    <div className={isOpen ? "grid grid-rows-4 right-2 top-16 mt-2 fixed overflow-hidden text-center justify-center items-center bg-white rounded shadow-md" : "hidden"}>
      <Link className="p-4 transition duration-200 ease-in-out hover:shadow-md hover:bg-orange hover:text-white">Tentang Kami</Link>
      <Link className="p-4 transition duration-200 ease-in-out hover:shadow-md hover:bg-orange hover:text-white">Contoh Materi</Link>
      <Link className="p-4 transition duration-200 ease-in-out hover:shadow-md hover:bg-orange hover:text-white">Kontak Kami</Link>
      <Link className="p-4 bg-orange text-white transition duration-200 ease-in-out hover:bg-lessdark">Materi</Link>
    </div>
  );
};

export default Dropdown;
