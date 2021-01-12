import Navbar from "./components/navbar/Navbar";
import React from "react";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Examples from "./components/examples/Examples";
import Contacts from "./components/contacts/Contacts";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Examples />
      <Contacts />
    </>
  );
};

export default App;
