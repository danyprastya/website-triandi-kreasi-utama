"use client";
import React from "react";
import Image from "next/image";
import mesjid from "../../public/mesjid.jpg";
import konstruksi from "../../public/konstruksi.png";
import { motion } from "framer-motion";

const Motto = () => {
  return (
    <div className="flex flex-wrap flex-col pt-[80px] sm:pt-[30px] w-[100%] h-fit bg-[#F5F5F5]">
      <div className="flex flex-row justify-center items-center xl:gap-x-[400px] sm:gap-x-[200px] md:gap-x-[240px] lg:gap-x-[380px] px-[70px] pb-[40px]">
        <div className="flex flex-col">
          <p className="text-[#4473C5] relative font-[700] xl:text-[70px] sm:text-[35px] md:text-[45px] lg:text-[55px] pt-[10px] sm:pt-[0px] sm:top-[-50px] lg:top-[-30px] leading-tight">
            Motto <br /> Perusahaan
          </p>
          <div className="bg-[#4473C5] h-[3px] relative sm:top-[-50px] lg:top-[-30px]" />
        </div>
        <div className="flex flex-wrap flex-col relative right-10 xl:pb-[40px]">
          <motion.div
            className="bg-[#BFBFBF] w-[300px] sm:w-[160px] md:w-[140px] lg:w-[250px] xl:h-[5px] sm:h-[4px] mb-[15px] rounded-full"
            initial={{ width: "0px" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
          />
          <motion.p
            className=" xl:w-[550px] sm:w-[160px] md:w-[230px] lg:w-[330] h-[220px] text-[#9F9F9F] font-medium xl:text-[32px] sm:text-[14px] md:text-[18px] lg:text-[20px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            &quot;Membangun bisnis sukses yang lebih baik melalui konstruksi
            yang unggul dan penuh dengan kreasi serta inovasi&quot;
          </motion.p>
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-center sm:top-[-80px] md:top-[-60px] lg:top-[-20px] xl:top-[0px] overflow-hidden xl:gap-x-[130px] sm:gap-x-[30px] lg:gap-x-[120px] sm:flex-row items-center w-full h-fit relative pb-[80px]">
        <div className="relative sm:w-[262px] sm:h-[150px] md:w-[282px] md:h-[190px] lg:w-[412px] lg:h-[240px] xl:w-[540px] xl:h-[380px] sm:left-[-30px] border-none">
          <Image src={mesjid} alt="da" layout="fill" objectFit="contain" />
        </div>
        <div className="relative sm:w-[340px] sm:h-[170px] md:w-[380px] md:h-[190px] lg:w-[480px] lg:h-[240px] xl:w-[800px] xl:h-[380px] xl:right-[-15px] " >
          <Image
            src={konstruksi}
            alt="da"
            objectFit="contain"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Motto;
