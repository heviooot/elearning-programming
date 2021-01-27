import React from "react";
import ExampleCard from "./examplecard/ExampleCard";
import wave from "./../../images/separators/separatorwhite.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const exampleLessons = [
  {
    id: 0,
    title: "Data Type",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.",
    link: "Lihat Materi",
  },
  {
    id: 1,
    title: "Conditional",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.",
    link: "Lihat Materi",
  },
  {
    id: 2,
    title: "Loops",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.",
    link: "Lihat Materi",
  },
  {
    id: 3,
    title: "Functions",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.",
    link: "Lihat Materi",
  },
  {
    id: 4,
    title: "Arrays",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.",
    link: "Lihat Materi",
  },
  {
    id: 5,
    title: "Pointers",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.",
    link: "Lihat Materi",
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const cardVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};

const Examples = () => {
  const [firstTextRef, firstTextRefInView] = useInView({
    rootMargin: "0px 0px -150px 0px",
    triggerOnce: true,
  });
  const [ref, InView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -150px 0px",
  });
  const [lastTextRef, lastTextRefInView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -150px 0px",
  });

  return (
    <div className="overflow-hidden">
      <div className="relative bg-lessdark transform scale-y-105 overflow-visible">
        <img
          src={wave}
          alt=""
          className=" w-screen h-auto max-h-72 p-0 m-0 bg-transparent box-border transform scale-y-110 transform scale-x-105"
        />
      </div>
      <div
        id="examples"
        className="font-roboto flex justify-center items-center"
      >
        <div className="container flex flex-col items-center">
          <motion.h1
            className="relative mt-24 px-10 text-5xl font-bold text-center leading-relaxed"
            ref={firstTextRef}
            variants={textVariants}
            initial="hidden"
            animate={firstTextRefInView ? "visible" : ""}
          >
            Kita Akan Membahas
          </motion.h1>
          <motion.div
            className="overflow-hidden mt-10 w-full grid grid-cols-1 gap-4 p-4 place-items-center gap-y-10 md:grid-cols-2 lg:grid-cols-3"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={InView ? "visible" : "hidden"}
          >
            {exampleLessons.map((lesson) => (
              <motion.div
                className="relative bg-white p-7 w-full h-auto rounded-2xl flex flex-col gap-4 shadow-lg md:min-h-96 md:w-72 xl:w-96"
                key={lesson.id}
                variants={cardVariants}
              >
                <ExampleCard
                  key={lesson.id}
                  title={lesson.title}
                  description={lesson.description}
                  link={lesson.link}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.h1
            ref={lastTextRef}
            variants={textVariants}
            initial="hidden"
            animate={lastTextRefInView ? "visible" : ""}
            className="relative mt-12 mb-12 px-10 text-4xl font-bold text-center leading-relaxed md:text-5xl"
          >
            Dan Masih Banyak Lagi 🧐
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Examples;
