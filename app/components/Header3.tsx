'use client'
import React from "react";
import { motion } from "framer-motion";

const Motto = () => {
  return (
    <div className="flex flex-col pt-[80px] w-full h-fit bg-[#F5F5F5] bg-opacity-80 justify-center items-center">
      <div className="flex flex-row justify-center items-center xl:gap-x-[600px] sm:gap-x-[180px] md:gap-x-[300px] lg:gap-x-[380px] xl:px-[70px] sm:px-[10px] pb-[40px]">
        <div className="relative flex flex-col xl:w-[55%] sm:w-[45%]">
          <p className="text-[#4473C5] font-[700] xl:text-[70px] sm:text-[35px] md:text-[45px] lg:text-[55px] pt-[10px] sm:pt-[0px] sm:top-[-40px] lg:top-[-30px] leading-tight">
            Projek
          </p>
          <div className="bg-[#4473C5] h-[3px] relative xl:w-[220px] sm:w-[150px] md:w-[200px] lg:w-[250px] mb-[50px] md:mb-[70px] lg:mb-[100px]" />
        </div>
        <div className="flex flex-col relative right-10 xl:pb-[40px] xl:w-[45%] sm:w-full md:w-[45%]">
          <motion.p
            className="relative xl:w-[550px] sm:w-[300px] md:w-[330px] lg:w-[330px] text-[#9F9F9F] font-medium xl:text-[29px] sm:text-[16px] md:text-[18px] lg:text-[20px] h-[220px] lg:top-[30px] sm:top-[50px] text-opacity-85 leading-tight"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            &quot;Setiap proyek di sini adalah bukti dari keahlian kami dan
            dedikasi kami untuk mewujudkan keinginan anda.&quot;
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Motto;
