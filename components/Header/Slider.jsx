"use client";

import Link from "next/link";
import { IoCall, IoCloseSharp } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLocationDot, FaYoutube } from "react-icons/fa6";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { siteConfig } from "@/lib/data";
import { FaClock } from "react-icons/fa";
import { createElement } from "react";

const Slider = ({ onClose, navRef }) => {
  const {
    social: socialLinks,
    contact,
    addressInOneline,
    googleMap,
    doctor,
    hours,
  } = siteConfig;

  const social = [
    { icon: AiFillInstagram, url: socialLinks.instagram },
    { icon: FaFacebookF, url: socialLinks.facebook },
    { icon: FaYoutube, url: socialLinks.youtube },
    { icon: IoLogoWhatsapp, url: socialLinks.whatsapp },
  ];

  return (
    <section
      ref={navRef}
      className="fixed top-0 -right-full h-screen overflow-y-auto w-full bg-(--bg-dark) text-(--text-white) z-99 flex flex-col gap-10 md:gap-16 p-4"
    >
      <button className="flex w-full justify-end text-4xl" onClick={onClose}>
        <IoCloseSharp />
      </button>

      <div className="flex flex-col w-full">
        <span className="w-full flex justify-center uppercase text-[14vw] leading-[15vw] font-bold tracking-wide">
          Healinghub
        </span>

        <hr className="border border-(--bg-mint)/40" />

        <span className="w-full tracking-wide flex justify-center uppercase text-[4vw]">
          Multi-Speciality Homoeopathic Clinic
        </span>
        <span className="w-full tracking-wide flex justify-center text-[4vw]">
          {doctor}
        </span>
      </div>

      <div className="flex flex-col gap-5">
        <ul className="flex flex-col items-center gap-4 text-4xl md:text-6xl font-medium ">
          {siteConfig?.navLinks?.map((link, index) => (
            <li
              key={link.url}
              className="w-full gap-2 flex flex-col items-center"
              onClick={onClose}
            >
              <Link href={link.url}>{link.label}</Link>
              {index === siteConfig?.navLinks.length - 1 ? (
                ""
              ) : (
                <hr className="w-full border border-(--bg-mint)/40" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-3 text-(--text-dark) text-2xl md:text-4xl">
        {social?.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            className="p-2 bg-(--bg-mint) rounded-full hover:scale-110 transition"
          >
            {createElement(item.icon)}
          </a>
        ))}
      </div>

      <hr className="w-full border border-(--bg-mint)/40" />

      {/* Content */}
      <div className="flex flex-col xl:flex-row gap-5 w-full">
        <div className="flex xl:flex-3 flex-col gap-5">
          {/* Contact */}
          <div className="flex flex-col gap-2 xl:w-[70%]">
            <p className="flex items-center gap-2">
              <FaLocationDot />
              <a href={googleMap} target="_blank">
                {addressInOneline}
              </a>
            </p>

            <p className="flex items-center gap-2">
              <FaClock />
              {hours}
            </p>

            <p className="flex items-center gap-2">
              <IoCall />
              <a href={`tel:${contact.code}${contact.phone}`}>
                {contact.code}-{contact.phone}
              </a>
            </p>

            <p className="flex items-center gap-2">
              <IoIosMail />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
