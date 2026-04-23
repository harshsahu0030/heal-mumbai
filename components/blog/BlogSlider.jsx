"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import BlogCard from "./BlogCard";

const BlogSlider = () => {
  return (
    <section className="container flex flex-col gap-5 py-10">
      <h3 className="font-medium text-lg">Our Blog</h3>

      <div className="grid md:grid-cols-2 gap-5">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Health Tips & Homeopathy Insights
        </h2>

        <div className="flex flex-col gap-5">
          <p className="">
            At HealingHub Multi-Speciality Homoeopathic Clinic, we share
            valuable insights on homeopathy, common health conditions, and
            natural healing methods. Our goal is to help you understand your
            health better and make informed decisions for long-term wellness.
          </p>
          <Link
            href="/"
            className="btn bg-(--primary-forest) text-(--text-white)"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="w-full h-full pt-10">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-fit w-[90vw] xl:w-full"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide className="h-full w-full">
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide className="h-full w-full">
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide className="h-full w-full">
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide className="h-full w-full">
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide className="h-full w-full">
            <BlogCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSlider;
