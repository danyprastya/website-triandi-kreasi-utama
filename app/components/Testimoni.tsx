"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { testimonials } from "@/datas/testimonials";

/**
 * Related to the React Slick
 */
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

/**
 * Related to the React Icons
 */
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

/**
 * Custom Components
 */
import CenterAligner from "./CenterAligner";

export default function Testimonial() {
  const sliderRef = useRef<any>();
  /**
   * Settings Related to the React Slick
   */
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <CenterAligner className="bg-[#FFFFFF] px-5 py-10">
      <h1 className="text-center text-[45px] font-bold pb-8">
        Testimonial
      </h1>
      {/* Container for the Slider */}
      <section className="max-w-[1100px] mx-auto w-full justify-center relative overflow-hidden">
        {/* Main Section */}
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((single, index) => {
            return (
              <div key={index} className="h-full">
                <section className="mx-auto bg-[#4473C5] flex flex-col text-white p-5 sm:p-12  grid-cols-1 sm:grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr] items-center gap-5 md:gap-8 overflow-hidden">
                  {/* Left Section */}
                  <p className="leading-[30px] font-[500] text-[35px]">
                    &quot;{single.layanan}&quot;
                  </p>
                  {/* Right Section */}
                  <div className="text-[14px] sm:text-[16px] text-center justify-center items-center flex flex-col">
                    <p className="leading-[30px] font-[400]">
                    &quot;{single.testimonial}&quot;
                    </p>
                    <div className="space-y-5 text-center">
                      {/* Other */}
                      <div>
                        <h2 className="text-xl font-medium mt-[20px]">{single.name}</h2>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </Slider>

        {/* Custom Buttons */}
        <button
          className="absolute top-[50%] left-[10px] z-10 text-[25px] text-white"
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <MdOutlineArrowBackIos />
        </button>
        <button
          className="absolute top-[50%] right-[10px] z-10 text-[25px] text-white"
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </section>
    </CenterAligner>
  );
}
