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

const OurTreatment = () => {
  const conRef = useRef();

  const Choose = [
    "Visible improvement in symptoms over time",
    "Increased energy and confidence",
    "Balanced lifestyle and improved health stability",
    "Trusted by local patients in Govandi, Mumbai",
    "Better control over chronic conditions",
  ];

  useGSAP(
    () => {
      if (!conRef.current) return;
    },
    { scope: conRef },
  );
  return (
    <section
      ref={conRef}
      className="container py-20 flex flex-col bg-(--bg-dark) text-(--text-white)"
    >
      {/* Top  */}
      <h3 className="font-medium text-lg">Our Treatment Approach</h3>

      <div className="grid md:grid-cols-2 gap-5">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Natural Treatments for Long-Term Relief
        </h2>

        <p className="">
          At HealingHub, we believe that healing starts with understanding the
          complete picture. We take time to evaluate your symptoms, medical
          history, triggers, lifestyle habits, and overall health before
          recommending a personalized treatment plan. This root-cause approach
          helps us focus on sustainable recovery instead of just suppressing
          symptoms.
        </p>
      </div>

      {/* Bottom*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {/* left  */}
        <div className="flex flex-col justify-between gap-10">
          <p className="text-lg font-medium">
            With the right diagnosis and homeopathic guidance, patients can
            experience long-term relief from recurring problems, improved
            immunity, reduced dependency on repeated medication, and better
            overall health. Our treatment plans are designed to support your
            body’s natural healing process and help you lead a healthier
            lifestyle with confidence.
          </p>

          <div className="flex flex-col gap-4">
            <p className="text-lg font-medium">
              Book Your Consultation Today and Start Your Journey Towards
              Natural Healing
            </p>

            <Link
              href="/contact-us"
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

export default OurTreatment;
