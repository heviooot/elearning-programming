import Navbar from "./components/navbar/Navbar";
import React from "react";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Examples from "./components/examples/Examples";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="font-roboto">
      <Navbar />
      <Landing />
      <About />
      <Examples />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
