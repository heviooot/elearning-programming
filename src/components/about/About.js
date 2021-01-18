import React from "react";
import firstAboutImage from "./../../images/landingPage/about.svg";
import secondAboutImage from "./../../images/landingPage/about2.svg";
import wave from "./../../images/separators/separatorgray.svg";

const About = () => {
  return (
    <>
      <div className="relative transform scale-y-105">
        <img
          src={wave}
          alt=""
          className=" w-screen h-auto max-h-72 p-0 m-0 box-border"
        />
      </div>
      <div className="flex justify-center bg-lessdark">
        <div className="container bg-lessdark flex flex-col-reverse justify-center items-center lg:flex-row-reverse lg:py-10 lg:justify-center gap-8">
          <div className="font-roboto text-white w-full p-5 flex flex-col gap-8 lg:w-96">
            <h1 className="text-5xl text-center font-bold lg:text-left">
              Tentang Kami.
            </h1>
            <p className="text-justify lg:text-left">
              <span className="font-mono">dingoding.</span> adalah aplikasi{" "}
              <em>e-Learning</em> yang bertujuan untuk memperkenalkan masyarakat
              Indonesia ke dunia pemrograman.
            </p>
            <p className="text-justify lg:text-left">
              Disini, kita akan menggunakan bahasa C untuk membahas dasar-dasar pemrograman dalam bahasa
              Indonesia agar lebih mudah dimengerti dan dicerna oleh
              masyarakat Indonesia.
            </p>
          </div>
          <img
            src={firstAboutImage}
            alt="Landing"
            className="w-full h-auto mt-16 lg:mt-0 lg:w-1/2"
          />
        </div>
      </div>
      <div className="flex justify-center bg-lessdark pb-24">
        <div className="container bg-lessdark flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-center gap-8">
          <div className="font-roboto text-white w-full p-5 flex flex-col gap-8 lg:w-96">
            <h1 className="text-5xl text-center font-bold lg:text-left">
              Kenapa Kami Memilih Bahasa C?
            </h1>
            <p className="text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur eum nulla debitis, a voluptatem veniam nobis excepturi
              dolore? Repellat, et.
            </p>
          </div>
          <img
            src={secondAboutImage}
            alt="Landing"
            className="w-96 h-auto mt-16 lg:mt-0 lg:w-1/3"
          />
        </div>
      </div>
    </>
  );
};

export default About;
