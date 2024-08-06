'use client'
import React from "react";
import {motion} from "framer-motion"

const Motto = () => {
  return (
    <div className="flex flex-col pt-[80px] w-full h-fit bg-[#F5F5F5] bg-opacity-80 justify-center items-center">
      <div className="flex flex-row justify-center items-center gap-x-[600px] px-[70px]">
        <div className="flex flex-col w-[55%]">
          <p className="text-[#4473C5] font-[700] text-[70px] pt-[10px] leading-tight">
            Projek
          </p>
          <div className="bg-[#4473C5] w-[220px] h-[3px] mb-[100px]" />
        </div>
        <div className="flex flex-col right-[-30px] w-[45%] relative top-[25px]">
          <motion.p className=" w-[550px] h-[220px] text-[#9F9F9F] text-opacity-95 leading-tight font-medium text-[29px]"
          initial={{x:40,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:1}}
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
