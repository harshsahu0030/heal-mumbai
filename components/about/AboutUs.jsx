"use client";

import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { FaCheckDouble } from "react-icons/fa6";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutUs = () => {
  const conRef = useRef();

  const Choose = [
    "Personalized treatment for every patient",
    "Natural and safe medicines with no side effects",
    "Focus on root cause, not just symptoms",
    "Trusted by local patients in Govandi, Mumbai",
    "Comfortable and patient-friendly environment",
  ];

  useGSAP(
    () => {
      if (!conRef.current) return;
    },
    { scope: conRef },
  );
  return (
    <section ref={conRef} className="container py-10 flex flex-col">
      {/* Top  */}
      <h3 className="font-medium text-lg">About Us</h3>

      <div className="grid md:grid-cols-2 gap-5">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Trusted Homeopathy Care Focused on Root Cause Healing
        </h2>

        <p className="">
          At HealingHub Multi-Speciality Homoeopathic Clinic, we believe that
          true healing begins by understanding the root cause, not just
          suppressing symptoms. Led by Dr. Mohd Aadil K. Khan, our clinic
          provides safe, natural, and personalized homeopathy treatment designed
          for long-term relief and overall well-being.
          <br />
          Located in Govandi, Mumbai, we are committed to helping patients
          regain their health with gentle, side-effect-free solutions that work
          with the body’s natural healing process.
        </p>
      </div>

      {/* Bottom*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {/* left  */}
        <div className="flex flex-col justify-between gap-10">
          <p className="text-lg font-medium">
            You feel better for a while, but the same health problem keeps
            coming back again and again
          </p>

          <div className="flex flex-col gap-4">
            <p className="text-lg font-medium">
              Book Your Consultation Today and Start Your Journey Towards
              Natural Healing
            </p>

            <Link
              href="/"
              className="btn bg-(--primary-forest) text-(--text-white)"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* right  */}
        <ul className="h-full">
          {Choose?.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <FaCheckDouble /> {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
