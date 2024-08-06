'use client'
import React from "react";
import {motion} from "framer-motion"

const Motto = () => {
  return (
    <div className="flex flex-col xl:pt-[80px] sm:pt-[80px] lg:pt-[80px] w-full h-fit bg-[#F5F5F5] bg-opacity-80 justify-start items-center">
      <div className="flex flex-row justify-start items-center xl:px-[70px] lg:px-[50px] sm:px-[40px] w-full">
        <div className="flex flex-col">
          <motion.p className="text-[#4473C5] font-[700] xl:text-[70px] lg:text-[50px] sm:text-[35px] xl:pt-[10px] lg:pt-[8px] sm:pt-[5px] leading-tight"
          initial={{x:-90, opacity:0.1}}
          animate={{x:0, opacity:1}}
          transition={{duration:1}}
          >
            Hubungi Kami
          </motion.p>
          <motion.div className="bg-[#4473C5] xl:w-[220px] sm:w-[100px] lg:w-[180px] xl:h-[3px] lg:h-[3px] sm:h-[3px] xl:mb-[100px] lg:mb-[90px] sm:mb-[80px]"
          initial={{width:"10px", opacity:0}}
          animate={{width:"100%", opacity:1}}
          transition={{duration:1.5}}
          />
        </div>
      </div>
    </div>
  );
};

export default Motto;
