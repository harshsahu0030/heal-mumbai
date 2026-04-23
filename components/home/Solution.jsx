"use client";

import Image from "next/image";
import React from "react";
import Solutions01 from "@/public/solution01.png";
import Solutions02 from "@/public/solution02.png";
import Solutions03 from "@/public/solution03.png";
import Solutions04 from "@/public/solution04.png";
import Link from "next/link";

const Solution = () => {
  const IntroduceYou = [
    {
      name: "Long-term relief from recurring problems",
      url: Solutions01,
    },
    {
      name: "Improved immunity and overall health",
      url: Solutions02,
    },
    {
      name: "Better lifestyle and confidence",
      url: Solutions04,
    },
    {
      name: "Reduced dependency on repeated medication",
      url: Solutions03,
    },
  ];
  return (
    <section className="container h-fit w-full bg-(--bg-dark) py-20 text-(--text-white)">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-5">
        {/* left  */}
        <div className="w-full flex flex-col gap-10">
          <div className="w-full h-full overflow-hidden">
            <Image
              src={Solutions01}
              alt="healing hub homoeopathic clinic"
              width={600}
              height={600}
              className="h-full w-full object-cover rounded-lg hover:scale-125 transition-all ease-in-out duration-500"
            />
          </div>

          <div className="w-full  grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="flex flex-col gap-2">
              <span className="text-6xl font-semibold">95%</span>
              <span className="uppercase">
                Satisfaction <br /> Rate
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-6xl font-semibold">7+</span>
              <span className="uppercase">
                Years of <br /> Experience
              </span>
            </div>
            <div className="flex flex-col gap-2 ">
              <span className="text-6xl font-semibold">25k</span>
              <span className="uppercase">
                Trusted by <br /> Patients
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-6xl font-semibold">4.9</span>
              <span className="uppercase">
                Patient Experience <br /> Rating
              </span>
            </div>
          </div>
        </div>

        {/* right  */}
        <div className="h-full w-full flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap1">
              <h3 className="font-medium text-lg">Introduce Us</h3>

              <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                Here’s How We Fix It
              </h2>
            </div>

            <p className="">
              At HealingHub Multi-Speciality Homoeopathic Clinic, Dr. Mohd Aadil
              K. Khan focuses on identifying the root cause of your condition
              and treating it with natural homeopathy. Instead of just
              suppressing symptoms, we take a personalized approach to
              understand your body, lifestyle, and medical history — delivering
              safe, effective, and long-lasting results without harmful side
              effects.
            </p>

            <Link
              href="/our-treatments/skin-diseases"
              className="btn bg-(--bg-mint) text-(--text-dark)  text-sm"
            >
              Read More
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {IntroduceYou?.map((item, index) => (
              <div
                key={index}
                className="relative h-full w-full rounded-lg overflow-hidden"
              >
                <Image
                  src={item.url}
                  alt="healing hub homoeopathic clinic"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover col-span-5 hover:scale-125 transition-all ease-in-out duration-500"
                />

                <p className="absolute  bg-(--primary-forest)/30 backdrop-blur-sm right-5 bottom-5 left-5  rounded-lg p-2 text-lg text-(--text-white) font-medium text-wrap w-fit">
                  {item?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
