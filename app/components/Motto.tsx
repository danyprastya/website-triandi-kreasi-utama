"use client";
import React from "react";
import Image from "next/image";
import mesjid from "../../public/mesjid.jpg"
import konstruksi from "../../public/konstruksi.png";
import { motion } from "framer-motion";

const Motto = () => {
  return (
    <div className="flex flex-wrap flex-col pt-[80px] w-[100%] h-fit bg-[#F5F5F5]">
      <div className="flex flex-row justify-center items-center gap-x-[400px] px-[70px] pb-[40px]">
        <div className="flex flex-col">
          <p className="text-[#4473C5] font-[700] text-[70px] pt-[10px] leading-tight">
            Motto <br /> Perusahaan
          </p>
          <div 
          className="bg-[#4473C5] h-[3px]"
          />
        </div>
        <div className="flex flex-wrap flex-col relative right-10">
          <motion.div className="bg-[#BFBFBF] w-[300px] h-[5px] mb-[15px] rounded-full"
          initial={{width:'0px'}}
          animate={{width:'300px'}}
          transition={{duration:1}}
          />
          <motion.p className=" w-[550px] h-[220px] text-[#9F9F9F] font-medium text-[32px]"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1}}
          >
            &quot;Membangun bisnis sukses yang lebih baik melalui konstruksi yang unggul dan penuh dengan kreasi serta inovasi&quot;
          </motion.p>
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-center overflow-hidden gap-x-[110px] items-center w-full h-fit relative pb-[80px]">
        <Image
          src={mesjid}
          alt="da"
          width={540}
          height={200}
          objectFit="cover"
        />
        <Image
          src={konstruksi}
          alt="da"
          width={800}
          height={180}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Motto;
