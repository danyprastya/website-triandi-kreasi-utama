'use client'
import React from "react";
import {motion} from "framer-motion"

const Motto = () => {
  return (
    <div className="flex flex-col pt-[80px] w-full h-fit bg-[#F5F5F5] bg-opacity-80 justify-start items-center">
      <div className="flex flex-row justify-start items-center px-[70px] w-full">
        <div className="flex flex-col w-[55%]">
          <motion.p className="text-[#4473C5] font-[700] text-[70px] pt-[10px] leading-tight"
          initial={{x:-40, opacity:0.2}}
          animate={{x:0, opacity:1}}
          transition={{duration:1}}
          >
            Hubungi Kami
          </motion.p>
          <motion.div className="bg-[#4473C5] w-[220px] h-[3px] mb-[100px]"
          initial={{width:10, opacity:0 }}
          animate={{width:220, opacity:1}}
          transition={{duration:1.5}}
          />
        </div>
      </div>
    </div>
  );
};

export default Motto;
