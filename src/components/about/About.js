import React, { useEffect } from "react";
import firstAboutImage from "./../../images/landingPage/about.svg";
import secondAboutImage from "./../../images/landingPage/about2.svg";
import wave from "./../../images/separators/separatorgray.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const leftItemsVariants = {
  hidden: {
    x: -250,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const rightItemsVariants = {
  hidden: {
    x: 250,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  const firstRefAnimation = useAnimation();
  const secondRefAnimation = useAnimation();
  const [firstRef, firstRefInView] = useInView();
  const [secondRef, secondRefInView] = useInView();
  useEffect(() => {
    if (firstRefInView) {
      firstRefAnimation.start("visible");
    }
    if (secondRefInView) {
      secondRefAnimation.start("visible");
    }
  }, [firstRefAnimation, secondRefAnimation, firstRefInView, secondRefInView]);
  return (
    <>
      <div className="overflow-hidden relative transform scale-y-105">
        <img
          src={wave}
          alt=""
          className="relative w-screen h-auto max-h-72 p-0 m-0 box-border"
        />
      </div>
      <div id="about" className="flex justify-center bg-lessdark">
        <div className="overflow-hidden container bg-lessdark flex flex-col-reverse justify-center items-center lg:flex-row-reverse lg:py-10 lg:justify-center gap-8">
          <motion.div
            className="font-roboto text-white w-full p-5 flex flex-col gap-8 lg:w-96"
            ref={firstRef}
            animate={firstRefAnimation}
            initial="hidden"
            variants={rightItemsVariants}
          >
            <h1 className="text-5xl text-center font-bold lg:text-left">
              Tentang Kami.
            </h1>
            <p className="text-justify lg:text-left">
              <span className="font-mono">dingoding.</span> adalah aplikasi{" "}
              <em>e-Learning</em> yang bertujuan untuk memperkenalkan masyarakat
              Indonesia ke dunia pemrograman.
            </p>
            <p className="text-justify lg:text-left">
              Disini, kita akan menggunakan bahasa C untuk membahas dasar-dasar
              pemrograman dalam bahasa Indonesia agar lebih mudah dimengerti dan
              dicerna oleh masyarakat Indonesia.
            </p>
          </motion.div>
          <motion.img
            src={firstAboutImage}
            alt="Landing"
            className="w-full h-auto mt-16 lg:mt-0 lg:w-1/2"
            ref={firstRef}
            animate={firstRefAnimation}
            initial="hidden"
            variants={leftItemsVariants}
          />
        </div>
      </div>
      <div className="flex justify-center bg-lessdark pb-24">
        <div className="overflow-hidden container bg-lessdark flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-center gap-8">
          <motion.div
            className="font-roboto text-white w-full p-5 flex flex-col gap-8 lg:w-96"
            ref={secondRef}
            animate={secondRefAnimation}
            initial="hidden"
            variants={leftItemsVariants}
          >
            <h1 className="text-5xl text-center font-bold lg:text-left">
              Kenapa Kami Memilih Bahasa C?
            </h1>
            <p className="text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur eum nulla debitis, a voluptatem veniam nobis excepturi
              dolore? Repellat, et.
            </p>
          </motion.div>
          <motion.img
            src={secondAboutImage}
            alt="Landing"
            className="w-96 h-auto mt-16 lg:mt-0 lg:w-1/3"
            ref={secondRef}
            animate={secondRefAnimation}
            initial="hidden"
            variants={rightItemsVariants}
          />
        </div>
      </div>
    </>
  );
};

export default About;
