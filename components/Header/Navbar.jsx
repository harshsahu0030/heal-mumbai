"use client";

import Image from "next/image";
import Logo from "@/public/logo-trans-hor.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowRoundUp } from "react-icons/io";
import { CgMenuRightAlt } from "react-icons/cg";
import Slider from "./Slider";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { siteConfig } from "@/lib/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navRef = useRef();

  // gsap
  useGSAP(
    () => {
      const tl = gsap.timeline();

      if (isOpen) {
        document.body.classList.add("overflow-hidden");

        tl.to(navRef.current, {
          right: 0,
          duration: 0.5,
        });
      } else {
        document.body.classList.remove("overflow-hidden");

        tl.to(navRef.current, {
          right: "-100%",
          duration: 0.5,
        });
      }
    },
    {
      dependencies: [isOpen],
    },
  );

  return (
    <>
      <nav className="container sticky top-10 z-50 w-full  backdrop-blur-md">
        <div className="h-20 w-full flex items-center justify-between">
          {/* Logo */}
          <div className="h-full flex items-center w-[50%] xl:w-[30%]">
            <Link href="/" className="h-full">
              <Image
                src={Logo}
                alt="healing hub homoeopathic clinic"
                width={500}
                height={500}
                className="h-full w-auto object-contain hover:scale-105 transition"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex w-[60%] justify-center">
            <ul className="flex items-center gap-6 px-6 py-2 rounded-full font-medium bg-(--primary-forest) text-(--text-white)">
              {siteConfig?.navLinks?.map((link) => {
                const isActive =
                  pathname === link.path ||
                  pathname.startsWith(link.path + "/");

                return (
                  <li key={link.url}>
                    <Link
                      href={link.url}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative px-2 py-1 transition ${
                        isActive ? "text-(--accent-clay) " : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right CTA + Mobile Menu */}
          <div className="flex items-center justify-end w-[50%] xl:w-[30%] gap-3 group/nav">
            {/* CTA */}
            <Link href="/appointment" className="hidden xl:flex items-center">
              <span className="px-4 py-2 rounded-full bg-(--primary-forest) text-(--text-white) font-medium transition group-hover/nav:scale-95">
                Get Appointment
              </span>

              <span className="p-3 rounded-full bg-(--primary-forest) text-(--text-white) transition group-hover/nav:scale-105">
                <IoMdArrowRoundUp className="rotate-45" />
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              aria-label="Open menu"
              aria-controls="mobile-menu"
              className="xl:hidden p-2"
              onClick={() => setIsOpen(true)}
            >
              <CgMenuRightAlt className="text-3xl" />
            </button>
          </div>
        </div>
      </nav>

      <Slider navRef={navRef} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
