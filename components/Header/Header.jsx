import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot, FaYoutube } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { siteConfig } from "@/lib/data";
import { createElement } from "react";

const Header = () => {
  const { social: socialLinks, contact, googleMap, name } = siteConfig;

  const social = [
    { icon: AiFillInstagram, url: socialLinks.instagram },
    { icon: FaFacebookF, url: socialLinks.facebook },
    { icon: FaYoutube, url: socialLinks.youtube },
    { icon: IoLogoWhatsapp, url: socialLinks.whatsapp },
  ];

  return (
    <header className="sticky container top-0 left-0container w-full h-10 flex items-center justify-between bg-(--primary-forest)  text-sm font-medium z-55">
      {/* Left */}
      <div className="flex items-center gap-4 text-(--text-white) ">
        <a
          href={googleMap}
          target="_blank"
          className="items-center gap-1 hidden md:flex"
        >
          <FaLocationDot />
          Mumbai, Maharashtra
        </a>

        <a
          href={`tel:${contact.code}${contact.phone}`}
          className="flex items-center gap-"
        >
          <IoCall />
          {contact.code}-{contact.phone}
        </a>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 text-(--text-dark)">
        {social?.map((item, index) => (
          <a
            key={index}
            href={item?.url}
            target="_blank"
            className="p-1 bg-(--bg-mint) rounded-full hover:scale-110 transition"
          >
            {createElement(item?.icon)}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
