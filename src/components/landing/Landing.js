import React from "react";
import landingImg from "./../../images/landing-img.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex flex-col-reverse justify-center items-center  gap-8 md:flex-row md:h-screen md:justify-center md:gap-0">
        <div className="w-full p-5 flex flex-col gap-8 md:w-96">
          <h1 className="text-5xl text-center font-mono md:text-center">
            dingoding.
          </h1>
          <p className="font-roboto text-center md:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            eum nulla debitis, a voluptatem veniam nobis excepturi dolore?
            Repellat, et.
          </p>
          <Link
            className="text-center text-white bg-orange py-3 px-4 rounded shadow-md transition duration-200 ease-in-out hover:bg-lessdark"
            to="/"
          >
            Materi
          </Link>
          <p className="font-roboto text-center">
            Atau telusuri lebih lanjut<br/>&darr;
          </p>
        </div>
        <img
          src={landingImg}
          alt="Landing"
          className="w-96 h-auto mt-16 md:mt-0 md:w-1/3"
        />
      </div>
    </div>
  );
};

export default Landing;
