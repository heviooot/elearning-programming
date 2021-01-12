import React from "react";
import ExampleCard from "./examplecard/ExampleCard";

const Examples = () => {
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
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vel.",
      link: "Lihat Materi",
    }
  ];

  return (
    <div className="font-roboto flex justify-center items-center">
      <div className="container min-h-screen flex flex-col items-center">
        <h1 className="mt-24 px-10 text-5xl font-bold text-center">Kita Akan Membahas</h1>
        <div className="mt-10 w-full grid grid-cols-1 gap-4 p-4 place-items-center gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {exampleLessons.map((lesson) => (
              <ExampleCard title={lesson.title} description={lesson.description} link={lesson.link}/>
          ))}
        </div>
        <h1 className="mt-10 px-10 text-4xl font-bold text-center md:text-5xl">Dan Masih Banyak Lagi ! 🧐</h1>
      </div>
    </div>
  );
};

export default Examples;
