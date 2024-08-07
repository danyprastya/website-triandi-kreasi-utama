'use client'
import React from "react";
import { motion } from "framer-motion";

const Motto = () => {
  return (
    <div className="flex flex-col flex-wrap xl:pt-[80px] sm:pt-[30px] md:pt-[40px] lg:pt-[50px] pt-[20px] w-full h-fit bg-[#F5F5F5] bg-opacity-80 justify-center items-center">
      <div className="flex flex-row justify-center items-center xl:gap-x-[400px] sm:gap-x-[180px] md:gap-x-[200px] lg:gap-x-[380px] gap-x-[140px] xl:px-[70px] lg:px-[60px] md:px-[50px] sm:px-[30px] px-[20px] xl:pb-[40px] lg:pb-[40px] md:pb-[30px] sm:pb-[30px] pb-[20px]">
        <div className="relative flex flex-col w-[55%]">
          <p className="text-[#4473C5] font-[700] xl:text-[70px] sm:text-[35px] md:text-[45px] lg:text-[55px] text-[28px] pt-[10px] sm:pt-[0px] sm:top-[-50px] lg:top-[-30px] leading-tight">
            Layanan
          </p>
          <div className="bg-[#4473C5] h-[3px] relative xl:w-[290px] sm:w-[150px] md:w-[200px] lg:w-[250px] mb-[50px] md:mb-[70px] lg:mb-[100px]" />
        </div>
        <div className="flex flex-col relative xl:pb-[40px] w-full md:w-[45%]">
          <motion.p
            className="relative xl:w-[550px] sm:w-[300px] md:w-[330px] lg:w-[330px] w-[220px] text-[#9F9F9F] font-medium xl:text-[28px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[14px] h-[220px] lg:top-[30px] sm:top-[40px] top-[50px] text-opacity-85 leading-tight"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            &quot;Di Triandi Kreasi Utama, kami menawarkan berbagai layanan konstruksi dan desain arsitektur yang dirancang untuk memenuhi kebutuhan Anda.&quot;
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Motto;
