import React from "react";
import cat from "./../../images/cat.png";
import ContactCard from "./contactcard/ContactCard";
import wave from "./../../images/separators/separatororange.svg";

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

  return (
    <>
      <img src={wave} alt="" className="w-screen max-h-72 relative top-1" />
      <div id="contacts" className="font-roboto bg-orange flex justify-center items-center">
        <div className="container flex flex-col items-center rounded-xl">
          <h1 className="px-10 text-7xl md:text-7xl font-bold text-white mt-10 text-center">
            Kenalan Yuk !
          </h1>
          <div className="w-full flex flex-wrap justify-evenly gap-10 mt-5 px-0 py-10 md:mt-10 md:px-10">
            {team.map((member) => (
              <ContactCard
                key={member.id}
                img={member.img}
                name={member.name}
                desc={member.desc}
                contacts={member.contacts}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
