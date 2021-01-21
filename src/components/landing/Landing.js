import React from "react";
import landingImg from "./../../images/landingPage/landing.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SquareLoader from "react-spinners/SquareLoader";

const landingDescriptionAnim = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};

const Landing = ({loading, setLoading}) => {
  

  return (
    <div className="flex justify-center">
      <div className="container flex flex-col-reverse justify-center items-center  gap-8 lg:flex-row min-h-screen lg:justify-center lg:gap-8">
        <motion.div
          className={
            loading ? "hidden" : "w-full p-5 flex flex-col gap-6 lg:w-96"
          }
          variants={landingDescriptionAnim}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-5xl text-center font-mono lg:text-left">
            dingoding.
          </h1>
          <p className="font-roboto text-justify lg:text-left">
            Sebelum kamu terjun lebih dalam ke dunia ngoding, yuk sini kita
            ajarin dasar-dasar pemrograman supaya kamu bisa ngoding dengan
            lancar ! 😃
          </p>
          <Link
            className="text-center text-white bg-orange py-3 px-4 rounded-xl shadow-lg transition duration-200 ease-in-out hover:bg-lessdark lg:w-36"
            to="/"
          >
            Pergi ke Materi
          </Link>
          <p className="font-roboto text-center lg:text-left">
            Masih penasaran? Scroll ke bawah
            <br />
            &darr;
          </p>
        </motion.div>
        <SquareLoader size={150} color={"#ff6900"} loading={loading} />
        <motion.img
          src={landingImg}
          alt="Landing"
          className={loading ? "hidden" : "w-96 h-auto mt-16 lg:mt-0 lg:w-1/3"}
          variants={landingDescriptionAnim}
          initial="hidden"
          animate="visible"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

export default Landing;
