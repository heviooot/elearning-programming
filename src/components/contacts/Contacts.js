import React from "react";
import cat from "./../../images/cat.png";
import ContactCard from "./contactcard/ContactCard";
import wave from "./../../images/separators/separatororange.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: {
    scaleY: 0,
    opacity: 0,
  },
  visible: {
    scaleY: 1,
    opacity: 1,
  },
};

const Contacts = () => {
  const team = [
    {
      id: 0,
      name: "Reinaldo Usadani",
      img: cat,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odit et neque repellendus id eius doloremque ex recusandae fugiat sapiente!",
      contacts: {
        github: "reigithub",
        linkedIn: "reilinkedin",
        google: "reigoogle",
      },
    },
    {
      id: 1,
      name: "Harold Ulaen",
      img: cat,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odit et neque repellendus id eius doloremque ex recusandae fugiat sapiente!",
      contacts: {
        github: "haroldgithub",
        linkedIn: "haroldlinkedin",
        google: "haroldgoogle",
      },
    },
  ];

  const [headerRef, headerRefInView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -150px 0px",
  });

  const [cardRef, cardRefInView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -300px 0px",
  });

  return (
    <>
      <img src={wave} alt="" className="w-screen max-h-72 relative top-1" />
      <div
        id="contacts"
        className="font-roboto bg-orange flex justify-center items-center"
      >
        <div className="container flex flex-col items-center rounded-xl">
          <motion.h1
            className="px-10 text-7xl md:text-7xl font-bold text-white mt-10 text-center"
            ref={headerRef}
            initial={{ y: -50, opacity: 0 }}
            animate={headerRefInView ? { y: 0, opacity: 1 } : {}}
          >
            Kenalan Yuk !
          </motion.h1>
          <motion.div
            className="w-full flex flex-wrap justify-evenly gap-10 mt-5 px-0 py-10 md:mt-10 md:px-10"
            ref={cardRef}
            variants={containerVariants}
            initial="hidden"
            animate={cardRefInView ? "visible" : "hidden"}
          >
            {team.map((member) => (
              <motion.div
                className="relative"
                variants={cardVariants}
                key={member.id}
              >
                <ContactCard
                  img={member.img}
                  name={member.name}
                  desc={member.desc}
                  contacts={member.contacts}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
