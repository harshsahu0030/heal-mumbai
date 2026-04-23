"use client";

import { createElement, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { siteConfig } from "@/lib/data";
import { FaYoutube } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

const Contact = () => {
  const {
    social: socialLinks,
    contact,
    addressInOneline,
    googleMap,
    hours,
  } = siteConfig;

  const social = [
    { icon: AiFillInstagram, url: socialLinks.instagram },
    { icon: FaFacebookF, url: socialLinks.facebook },
    { icon: FaYoutube, url: socialLinks.youtube },
    { icon: IoLogoWhatsapp, url: socialLinks.whatsapp },
  ];

  const [phone, setPhone] = useState();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phone) return alert("Enter valid phone number");

    const whatsappUrl = `https://wa.me/${phone.replace(
      "+",
      "",
    )}?text=Hello, my name is ${name}. I want consultation. ${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="container w-full grid grid-cols-1 xl:grid-cols-2 gap-5 py-10">
      {/* left  */}
      <div className="h-full w-full flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap1">
            <h3 className="font-medium text-lg">Contact Us</h3>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Book Your Consultation Today
            </h2>
          </div>

          <p className="">
            Struggling with recurring health problems? Get natural, safe, and
            long-term relief with personalized homeopathy treatment in Govandi,
            Mumbai.
          </p>
        </div>

        <div className="flex flex-col gap-2">
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
            <a href={`tel:${contact?.code}${contact?.phone}`}>
              {contact?.code}-{contact?.phone}
            </a>
          </p>

          <p className="flex items-center gap-2">
            <IoIosMail />

            <a href={`mailto:${contact?.email}`}>{contact?.email}</a>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 text-(--text-white) text-2xl">
          {social.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-(--primary-forest) rounded-full hover:scale-110 transition"
            >
              {createElement(item.icon)}
            </a>
          ))}
        </div>
      </div>

      {/* right  */}
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-lg focus:bg-(--bg-white)"
            required
          />

          {/* Phone Input with All Country Codes */}
          <PhoneInput
            international
            defaultCountry="IN"
            value={phone}
            onChange={setPhone}
            className="border p-3 rounded-lg"
          />

          {/* Message */}
          <textarea
            placeholder="Your Problem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-3 rounded-lg"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-(--primary-forest) text-white py-3 rounded-full"
          >
            Book via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
