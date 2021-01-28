import React from "react";
import Sidebar from "./Sidebar";
import useFetch from "./../../hooks/useFetch";

import ExampleCard from "./../home/examplecard/ExampleCard";
// import wave from "./../../images/separators/separatorwhite.svg";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const Lessons = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8000/lessons");
  return (
    <div className="rowC">
      <Sidebar lessons={data} isLoading={isLoading} error={error} />
      <Test />
    </div>
  );
  //
};

const Question = () => {
  return (
    <div className="w-64 h-screen bg-lessdark shadow-md font-roboto z-10 p-4 text-white">
      <p>question</p>
    </div>
  );
};
const Test = () => {
  return (
    <div className="w-screen h-screen bg-white shadow-md font-roboto z-10 p-10 text-black">
      <h1 className="text-4xl pb-1 pt-1 mt-1 mb-4">Explanation</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>

      <h1 className="text-4xl pb-1 pt-1 mt-3 mb-4">Input</h1>

      <div className="w-auto font-mono rounded-xl mx-auto pb-3 pt-2 px-2 mt-4 mb-6 block bg-black text-white">
        ini input
      </div>

      <h1 className="text-4xl pb-1 pt-1 mt-3 mb-4">Editor</h1>

      <div className="w-auto font-mono rounded-xl mx-auto pb-3 pt-2 px-2 mt-4 mb-6 block bg-black text-white">
        ini editor
      </div>

      <div className="w-48 font-mono text-center rounded-xl mx-auto pb-3 pt-2 px-2 mt-4 mb-6 block bg-orange">
        compile
      </div>

      <h1 className="text-4xl pb-1 pt-1 mt-3 mb-4">Output</h1>

      <div className="w-auto font-mono rounded-xl mx-auto pb-3 pt-2 px-2 mt-4 mb-6 block bg-black text-white">
        ini output
      </div>
    </div>
  );
};

export default Lessons;
