"use client";
import React from "react";
import { motion } from "framer-motion";

const Motto = () => {
  return (
    <div className="flex flex-col pt-[80px] w-full h-fit bg-[#F5F5F5] bg-opacity-80 justify-center items-center">
      <div className="flex flex-row justify-center items-center xl:gap-x-[400px] sm:gap-x-[180px] md:gap-x-[200px] lg:gap-x-[380px] px-[70px] pb-[40px]">
        <div className="relative flex flex-col w-[55%] sm:top-[-20px]">
          <p className="text-[#4473C5] font-[700] xl:text-[70px] sm:text-[35px] md:text-[45px] lg:text-[55px] pt-[10px] sm:pt-[0px] sm:top-[-50px] lg:top-[-30px] leading-tight">
            Tentang Kami
          </p>
          <div className="bg-[#4473C5] h-[3px] relative w-[150px] md:w-[200px] lg:w-[250px] mb-[50px] md:mb-[70px] lg:mb-[100px]" />
        </div>
        <div className="flex flex-col relative right-10 xl:pb-[40px] w-full md:w-[45%]">
          <motion.p
            className="relative xl:w-[550px] sm:w-[300px] md:w-[330px] lg:w-[330px] text-[#9F9F9F] font-medium xl:text-[28px] sm:text-[14px] md:text-[18px] lg:text-[20px] h-[220px] lg:top-[-30px] text-opacity-85 leading-tight"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            &quot;Disini Anda akan mengetahui lebih banyak tentang
            siapa kami, nilai-nilai yang kami junjung, dan bagaimana kami
            bekerja untuk mewujudkan impian Anda. Temui tim
            profesional kami dan pelajari tentang dedikasi kami dalam setiap
            proyek yang kami kerjakan.&quot;
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Motto;
