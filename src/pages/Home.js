import React, { useState } from "react";
import About from "../components/about/About";
import Contacts from "../components/contacts/Contacts";
import Examples from "../components/examples/Examples";
import Footer from "../components/footer/Footer";
import Landing from "../components/landing/Landing";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Navbar />
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
        <Footer />
      </div>
    </>
  );
};

export default Home;
