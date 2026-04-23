"use client";

import Image from "next/image";
import React, { useRef } from "react";
import HeroImage01 from "@/public/hero-image01.jpeg";
import Link from "next/link";
import DoctorImage from "@/public/doctor-01.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const Hero = ({ treatments }) => {
  const conRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({});
      let split = SplitText.create(".heading", {
        type: "chars, words, lines",
      });

      tl.from(
        ".holistic",
        {
          y: 100,
          opacity: 0,
          duration: 1,
        },
        "text",
      )
        .from(
          split.chars,
          {
            y: 50,
            autoAlpha: 0,
            stagger: 0.02,
            opacity: 0,
          },
          "text",
        )
        .fromTo(
          ".bb",
          {
            y: 10,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            stagger: 0.2,
          },
        );
    },

    {
      scope: conRef,
    },
  );

  return (
    <section ref={conRef} className="container h-fit xl:h-screen">
      <div className="relative h-full w-full rounded-2xl overflow-hidden p-5 xl:p-20">
        <Image
          src={HeroImage01}
          alt="Hero"
          layout="fill"
          objectFit="cover object-right"
          className="brightness-50 absolute top-0 left-0 w-full h-full -z-1"
          placeholder="blur"
        />

        <span className="holistic absolute  left-1/2 -translate-x-1/2 bottom-0 xl:-bottom-[10%]  text-[20vw] font-bold text-(--secondary-sage) uppercase tracking-wide opacity-50 -z-1">
          HOLISTIC
        </span>

        <div className="w-full h-full grid grid-cols-1 xl:grid-cols-12 gap-20">
          {/* left  */}
          <div className="xl:col-span-8 flex flex-col gap-10 justify-between">
            <h1 className="heading text-2xl xl:text-5xl font-semibold text-(--text-white) leading-snug">
              Tired of Recurring Health Problems?
              <br /> Treat the Root Cause Naturally —
              <br /> Not Just the Symptoms
            </h1>

            <div className="hidden md:flex flex-wrap gap-5 text-(--text-white) font-medium">
              {treatments?.treatments?.nodes?.slice(0, 4)?.map((treatment) => (
                <Link
                  key={treatment?.slug}
                  href={`/our-treatments/${treatment?.slug}`}
                  className="btn bg-(--bg-white)/30 backdrop-blur-md text-sm bb"
                >
                  {treatment?.title}
                </Link>
              ))}
              <Link
                href={`/our-treatments`}
                className="btn bg-(--bg-white)/30 backdrop-blur-md text-sm bb"
              >
                View All
              </Link>
            </div>
          </div>

          {/* right  */}
          <div className="xl:col-span-4 flex flex-col justify-center gap-5 text-(--text-white)">
            <Link
              href="/contact-us"
              className="btn bg-(--bg-mint) text-(--text-dark) uppercase text-sm"
            >
              Book a Consultation
            </Link>

            <p className="text-lg">
              Get safe, personalized homeopathic treatment at HealingHub
              Multi-Speciality Homoeopathic Clinic — designed for long-term
              relief without side effects.
            </p>

            <hr className="border border-(--text-white)" />

            <div className="opacity-80 grid grid-cols-12 gap-5 md:w-100 items-center h-50 bg-(--bg-white) rounded-lg overflow-hidden p-2">
              <Image
                src={DoctorImage}
                alt="healing hub homoeopathic clinic"
                width={600}
                height={600}
                className="h-full w-full object-cover col-span-5"
                priority
              />
              <div className="flex flex-col h-full justify-center col-span-7 gap-1 text-(--text-dark)">
                <p className="xl:text-lg font-semibold">
                  Dr. Mohd Aadil K. Khan
                </p>
                <i className="">
                  Your health is treated individually — not generically.
                </i>
                <Link
                  href="/about-us"
                  className="text-sm text-(--primary-forest) hover:underline  font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
