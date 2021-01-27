import React from "react";
import githubImg from "./../../../images/socialMedias/github.svg";
import linkedinImg from "./../../../images/socialMedias/linkedin.svg";
import googleImg from "./../../../images/socialMedias/google.svg";

const ContactCard = ({ name, img, desc, contacts }) => {
  const links = [contacts.github, contacts.linkedIn, contacts.google];
  const images = [githubImg, linkedinImg, googleImg];
  return (
    <div className="font-roboto w-72 md:w-96 bg-white flex flex-col gap-5 items-center py-5 px-5 rounded-2xl shadow-lg">
      <img
        src={img}
        alt=""
        className="relative w-36 md:w-48 object-cover h-auto rounded-full"
      />
      <h1 className="text-xl md:text-3xl font-semibold text-center font-medium">
        {name}
      </h1>
      <p className="text-md md:text-md text-center px-5">{desc}</p>
      <div className="flex justify-center gap-4">
        {links.map((link, index) => {
          return (
            <a
              key={link}
              href={link}
              className="flex items-center justify-center px-3 py-2 bg-orange rounded-2xl shadow-md transition duration-200 ease-in-out hover:bg-lessdark"
              target="__blank"
            >
              <img src={images[index]} alt="" className="w-6 h-auto" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default ContactCard;
