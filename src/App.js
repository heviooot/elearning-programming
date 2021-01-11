import Navbar from "./components/navbar/Navbar";
import React from "react";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
    </>
  );
};

export default App;
