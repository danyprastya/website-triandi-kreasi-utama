'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import jempol from "../../public/jempol.png";
import lampu from "../../public/lampu.png";
import safety from "../../public/safety.svg";
import quality from "../../public/quality.png";
import time from "../../public/time.svg";
import trust from "../../public/trust.svg";
import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer";

const WhyUs = () => {

  const whyusControls = useAnimation();
  const { ref: whyusRef, inView: whyusInView } = useInView({
    triggerOnce: true, 
    threshold: 1
  });

  const garisControls = useAnimation();
  const { ref: garisRef, inView: garisInView } = useInView({
    triggerOnce: true, 
    threshold: 1
  });

  useEffect(() => {
    if (whyusInView) {
      whyusControls.start({
        fontSize:'30px',
        opacity: 1,
        transition: { duration: 0.8, delay:0.3},
      });
    }
  }, [whyusInView, whyusControls]);

  useEffect(() => {
    if (garisInView) {
      garisControls.start({
        width:'160px',
        opacity: 1,
        transition: { duration: 1, delay:1},
      });
    }
  }, [garisInView, garisControls]);

  return (
    <div className="py-[50px]">
      <div className="flex flex-col justify-center items-center">
        <motion.p
        ref={whyusRef}
        className="text-[30px] font-semibold"
        initial={{fontSize:'0px', opacity:0}}
        animate={whyusControls}
        >Mengapa Kami ?</motion.p>
        <motion.div className="bg-black h-[4px] w-[130px] mb-[40px]" 
        ref={garisRef}
        initial={{width:0,opacity:0}}
        animate={garisControls}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-x-[60px] justify-center items-center">
          <div className="flex flex-col justify-center items-center w-[420px] h-[400px]">
            <Image src={jempol} alt="" width={120} height={110} />
            <p className="font-[500] text-[25px]">Profesional</p>
            <p className="w-[400px] text-center text-[20px] font-[500] text-[#9F9F9F] text-opacity-85">
              Kami bekerja dengan standar profesional tinggi, memastikan setiap
              proyek dikelola oleh tim ahli yang berpengalaman dan berdedikasi.
            </p>
            <div className="bg-[#9F9F9F] bg-opacity-85 w-[420px] h-[5px] my-[20px] rounded-full" />
          </div>
          <div className="flex flex-col justify-center gap-y-[10px] items-center w-[420px] h-[400px]">
            <Image src={lampu} alt="" width={100} height={100} />
            <p className="font-[500] text-[25px]">Inovatif</p>
            <p className="w-[400px] text-center text-[20px] font-[500] text-[#9F9F9F] text-opacity-85">
              Kami selalu mencari cara baru dan kreatif untuk memberikan solusi
              konstruksi dan desain yang modern dan efisien.
            </p>
            <div className="bg-[#9F9F9F] bg-opacity-85 w-[420px] h-[5px] mb-[20px] mt-[15px] rounded-full" />
          </div>
          <div className="flex flex-col justify-center items-center w-[420px] h-[400px]">
            <Image src={safety} alt="" width={120} height={110} />
            <p className="font-[500] text-[25px]">Aman</p>
            <p className="w-[400px] text-center text-[20px] font-[500] text-[#9F9F9F] text-opacity-85">
            Keamanan adalah prioritas utama kami. Setiap proyek dilakukan dengan perhatian khusus pada keselamatan kerja dan kualitas bahan.
            </p>
            <div className="bg-[#9F9F9F] bg-opacity-85 w-[420px] h-[5px] my-[20px] rounded-full" />
          </div>
        </div>
        <div className="flex flex-row gap-x-[60px] justify-center items-center">
          <div className="flex flex-col justify-center items-center w-[420px] h-[200px]">
            <Image src={quality} alt="" width={120} height={120} />
            <p className="font-[500] text-[25px]">Kualitas</p>
            <p className="w-[400px] text-center text-[20px] font-[500] text-[#9F9F9F] text-opacity-85">
            Kami berkomitmen untuk memberikan hasil berkualitas tinggi pada setiap proyek, dengan perhatian mendetail pada setiap aspek konstruksi dan desain.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[420px] h-[200px]">
            <Image src={time} alt="" width={100} height={100} />
            <p className="font-[500] text-[25px]">Tepat Waktu</p>
            <p className="w-[400px] text-center text-[20px] font-[500] text-[#9F9F9F] text-opacity-85">
            Kami menghargai waktu Anda dan berusaha untuk menyelesaikan setiap proyek sesuai dengan jadwal yang telah disepakati tanpa mengorbankan kualitas.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[420px] h-[200px]">
            <Image src={trust} alt="" width={120} height={120} />
            <p className="font-[500] text-[25px]">Dipercaya</p>
            <p className="w-[400px] text-center text-[20px] font-[500] text-[#9F9F9F] text-opacity-85">
            Dengan reputasi yang solid dan banyak klien yang puas, kami adalah mitra terpercaya dalam mewujudkan visi konstruksi dan desain Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
