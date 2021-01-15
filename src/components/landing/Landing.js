import React from "react";
import landingImg from "./../../images/landing.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex flex-col-reverse justify-center items-center  gap-8 md:flex-row md:h-screen md:justify-center md:gap-0">
        <div className="w-full p-5 flex flex-col gap-6 md:w-96">
          <h1 className="text-5xl text-center font-mono md:text-left">
            dingoding.
          </h1>
          <p className="font-roboto text-justify md:text-left">
            Sebelum kamu terjun lebih dalam ke dunia ngoding, yuk sini kita ajarin dasar-dasar pemrograman supaya kamu bisa ngoding dengan lancar ! 😃
          </p>
          <Link
            className="text-center text-white bg-orange py-3 px-4 rounded-xl shadow-md transition duration-200 ease-in-out hover:bg-lessdark md:w-36"
            to="/"
          >
            Pergi ke Materi
          </Link>
          <p className="font-roboto text-center md:text-left">
            Masih penasaran? Scroll ke bawah
            <br />
            &darr;
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
