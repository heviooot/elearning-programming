import React from "react";
import { Link } from "react-router-dom";

const ExampleCard = ({ title, description, link }) => {
  return (
    <div className="bg-white p-7 w-72 h-96 rounded-2xl flex flex-col gap-4 shadow-lg xl:w-96">
      <h1 className="text-4xl text-center font-bold py-2">{title}</h1>
      <h1 className="text-justify">{description}</h1>
      <div className="w-full flex justify-center mt-auto">
        <Link
          className="relative text-white bg-orange mx-5 py-3 px-4 rounded-xl shadow-md transition duration-200 ease-in-out hover:bg-lessdark"
          to="/"
        >
          {link}
        </Link>
      </div>
    </div>
  );
};

export default ExampleCard;
