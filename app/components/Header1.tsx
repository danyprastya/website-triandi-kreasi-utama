"use client";
import React from "react";
import { motion } from "framer-motion";

const Motto = () => {
  return (
    <div className="flex flex-col pt-[80px] w-full h-fit bg-[#F5F5F5] bg-opacity-80 justify-center items-center">
      <div className="flex flex-row justify-center items-center gap-x-[370px] px-[70px]">
        <div className="flex flex-col w-[55%]">
          <p className="text-[#4473C5] font-[700] text-[70px] pt-[10px] leading-tight">
            Tentang Kami
          </p>
          <div className="bg-[#4473C5] w-[250px] h-[3px] mb-[100px]" />
        </div>
        <div className="flex flex-col relative right-[-20px] bottom-[40px] w-[45%]">
          <motion.p
            className=" w-[550px]  text-[#9F9F9F] font-medium text-[22px] text-opacity-85 leading-tight justify-center items-center"
            initial={{ y:-30, opacity:0 }}
            animate={{ y:0, opacity: 1 }}
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
