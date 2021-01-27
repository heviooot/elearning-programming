import React, { useState } from "react";
import About from "./About";
import Contacts from "./Contacts";
import Examples from "./Examples";
import Footer from "./Footer";
import Landing from "./Landing";
import Navbar from "./Navbar";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const about = document.getElementById("about");
    window.scrollTo({ top: about.offsetTop-75, behavior: "smooth" });
  };

  const scrollToExamples = () => {
    const example = document.getElementById("examples");
    window.scrollTo({ top: example.offsetTop, behavior: "smooth" });
  };
  const scrollToContacts = () => {
    const contacts = document.getElementById("contacts");
    window.scrollTo({ top: contacts.offsetTop-75, behavior: "smooth" });
  };
  return (
    <>
      <Navbar scrollToTop={scrollToTop} scrollToAbout={scrollToAbout} scrollToExamples={scrollToExamples} scrollToContacts={scrollToContacts}/>
      <Landing loading={loading} setLoading={setLoading} />
      <div className={loading ? "hidden" : ""}>
        <About />
      </div>
      <div className={loading ? "hidden" : ""}>
        <Examples />
      </div>
      <div className={loading ? "hidden" : ""}>
        <Contacts />
      </div>
      <div className={loading ? "hidden" : ""}>
        <Footer scrollToAbout={scrollToAbout} scrollToContacts={scrollToContacts}/>
      </div>
    </>
  );
};

export default Home;
