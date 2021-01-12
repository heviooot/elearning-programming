import React from "react";
import firstAboutImage from "./../../images/about.svg";
import secondAboutImage from "./../../images/about2.svg";

const About = () => {
  return (
    <>
      <div className="flex justify-center bg-lessdark">
        <div className="container bg-lessdark flex flex-col-reverse justify-center items-center md:flex-row-reverse md:py-10 md:justify-center gap-8">
          <div className="font-roboto text-white w-full p-5 flex flex-col gap-8 md:w-96">
            <h1 className="text-5xl text-center font-bold md:text-left">
              Tentang Kami.
            </h1>
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur eum nulla debitis, a voluptatem veniam nobis excepturi
              dolore? Repellat, et.
            </p>
          </div>
          <img
            src={firstAboutImage}
            alt="Landing"
            className="w-full h-auto mt-16 md:mt-0 md:w-1/2"
          />
        </div>
      </div>
      <div className="flex justify-center bg-lessdark pb-24">
        <div className="container bg-lessdark flex flex-col-reverse justify-center items-center md:flex-row md:justify-center gap-8">
          <div className="font-roboto text-white w-full p-5 flex flex-col gap-8 md:w-96">
            <h1 className="text-5xl text-center font-bold md:text-left">
              Kenapa Kami Memilih Bahasa C?
            </h1>
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur eum nulla debitis, a voluptatem veniam nobis excepturi
              dolore? Repellat, et.
            </p>
          </div>
          <img
            src={secondAboutImage}
            alt="Landing"
            className="w-96 h-auto mt-16 md:mt-0 md:w-1/3"
          />
        </div>
      </div>
    </>
  );
};

export default About;
