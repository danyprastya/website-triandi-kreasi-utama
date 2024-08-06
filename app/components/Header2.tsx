'use client'
import React from "react";
import {motion} from "framer-motion"


const Motto = () => {
  return (
    <div className="flex flex-col pt-[80px] w-full h-fit bg-[#F5F5F5] bg-opacity-80 justify-center items-center">
      <div className="flex flex-row justify-center items-center gap-x-[500px] px-[70px]">
        <div className="flex flex-col w-[55%]">
          <p className="text-[#4473C5] font-[700] text-[70px] pt-[10px] leading-tight">
            Layanan
          </p>
          <div className="bg-[#4473C5] w-[290px] h-[3px] mb-[100px]"/>
        </div>
        <div className="flex flex-col right-10 w-[45%] relative top-[25px]">
          <motion.p className=" w-[550px] h-[220px] text-[#9F9F9F] text-opacity-85 leading-tight relative right-[-90px] font-medium text-[25px]"
          initial={{x:40,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.8}}
          >
            &quot;Di Triandi Kreasi Utama, kami menawarkan berbagai layanan konstruksi dan desain arsitektur yang dirancang untuk memenuhi kebutuhan Anda.&quot;
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Motto;
