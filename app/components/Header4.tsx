'use client'
import React from "react";
import { motion } from "framer-motion";

const Motto = () => {
  return (
    <div className="flex flex-col flex-wrap xl:pt-[80px] sm:pt-[80px] md:pt-[80px] lg:pt-[80px] pt-[50px] w-full h-fit bg-[#F5F5F5] bg-opacity-80 justify-center items-center">
      <div className="flex flex-row justify-center items-center xl:gap-x-[400px] sm:gap-x-[180px] md:gap-x-[200px] lg:gap-x-[380px] xl:px-[70px] lg:px-[60px] md:px-[50px] sm:px-[30px] px-[20px] xl:pb-[40px] lg:pb-[40px] md:pb-[30px] sm:pb-[30px] pb-[20px]">
        <div className="relative flex flex-col w-[100%] justify-start items-start left-[-60px] sm:left-[-180px] md:left-[-180px] lg:left-[-320px] xl:left-[-460px] ">
          <motion.p 
            className="text-[#4473C5] font-[700] xl:text-[70px] sm:text-[35px] md:text-[45px] lg:text-[55px] text-[25px] pt-[10px] sm:pt-[20px] sm:top-[-20px] lg:top-[0px] leading-tight  relative"
            initial={{ x: -90, opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hubungi Kami
          </motion.p>
          <motion.div 
            className="bg-[#4473C5] h-[3px] relative xl:w-[290px] sm:w-[150px] sm:top-[-20px] md:w-[200px] lg:w-[250px] lg:top-0 mb-[50px] md:mb-[70px] lg:mb-[100px]"
            initial={{ width: "10px", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Motto;
