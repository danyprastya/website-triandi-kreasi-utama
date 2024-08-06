"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import jempol from "../../public/jempol.png";
import lampu from "../../public/lampu.png";
import safety from "../../public/safety.svg";
import quality from "../../public/quality.png";
import time from "../../public/time.svg";
import trust from "../../public/trust.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyUs = () => {
  const whyusControls = useAnimation();
  const { ref: whyusRef, inView: whyusInView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const garisControls = useAnimation();
  const { ref: garisRef, inView: garisInView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    if (whyusInView) {
      whyusControls.start({
        fontSize: "30px",
        opacity: 1,
        transition: { duration: 0.8, delay: 0.3 },
      });
    }
  }, [whyusInView, whyusControls]);

  useEffect(() => {
    if (garisInView) {
      garisControls.start({
        width: "160px",
        opacity: 1,
        transition: { duration: 1, delay: 1 },
      });
    }
  }, [garisInView, garisControls]);

  return (
    <div className="xl:py-[50px] sm:py-[20px]">
      <div className="flex flex-col justify-center items-center">
        <motion.p
          ref={whyusRef}
          className="xl:text-[30px] font-semibold"
          initial={{ fontSize: "0px", opacity: 0 }}
          animate={whyusControls}
        >
          Mengapa Kami ?
        </motion.p>
        <motion.div
          className="bg-black h-[4px] w-[130px] mb-[40px]"
          ref={garisRef}
          initial={{ width: 0, opacity: 0 }}
          animate={garisControls}
        />
      </div>
      <div className="flex flex-col lg:gap-y-[50px]">
        <div className="flex flex-row xl:gap-x-[60px] sm:gap-x-[50px] md:gap-x-[60px] lg:gap-x-[80px] justify-center items-center">
          <div className="flex flex-col justify-center items-center sm:w-[150px] sm:h-[280px] lg:w-[250px] lg:h-[280px] sm:gap-y-[5px] xl:w-[420px] xl:h-[400px]">
            <div className="relative xl:w-[120px] xl:h-[120px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px]">
              <Image src={jempol} alt="" width={120} height={110} />
            </div>
            <p className="font-[500] xl:text-[25px] lg:text-[22px] sm:text-[18px]">
              Profesional
            </p>
            <p className="xl:w-[400px] sm:w-[180px] lg:w-[300px] text-center xl:text-[20px] lg:text-[18px] sm:text-[14px] font-[500] text-[#9F9F9F] text-opacity-85">
              Kami bekerja dengan standar profesional tinggi, memastikan setiap
              proyek dikelola oleh tim ahli yang berpengalaman dan berdedikasi.
            </p>
            <div className="bg-[#9F9F9F] xl:flex lg:flex sm:hidden bg-opacity-85 xl:w-[420px] lg:w-[400px] sm:w-[180px] xl:h-[5px] sm:h-[2px] xl:my-[20px] sm:mb-[10px] sm:mt-[17px] rounded-full" />
          </div>
          <div className="flex flex-col justify-center xl:gap-y-[10px] sm:gap-y-[5px] items-center sm:w-[150px] sm:h-[300px] lg:w-[250px] lg:h-[300px] xl:w-[420px] xl:h-[400px]">
            <div className="relative xl:w-[120px] xl:h-[120px] sm:w-[55px] sm:h-[55px] lg:w-[80px] lg:h-[80px] sm:mb-[10px]">
              <Image src={lampu} alt="" width={100} height={100} />
            </div>
            <p className="font-[500] xl:text-[25px] lg:text-[22px] sm:text-[18px]">Inovatif</p>
            <p className="xl:w-[400px] sm:w-[150px] lg:w-[300px] text-center xl:text-[20px] lg:text-[18px] sm:text-[14px] xl:mb-[20px] sm:mb-[10px] lg:mb-[60px] font-[500] text-[#9F9F9F] text-opacity-85">
              Kami selalu mencari cara baru dan kreatif untuk memberikan solusi
              konstruksi dan desain yang modern dan efisien.
            </p>
            <div className="bg-[#9F9F9F] xl:flex sm:hidden bg-opacity-85 xl:w-[420px] sm:w-[180px] xl:h-[5px] sm:h-[2px] xl:mb-[30px] sm:mb-[27px] xl:mt-[15px] sm:mt-[0px] rounded-full" />
          </div>
          <div className="flex flex-col justify-center items-center sm:w-[200px] sm:h-[180px] lg:w-[250px] lg:h-[180px] xl:w-[420px] xl:h-[400px] sm:gap-y-[5px]">
            <div className="relative xl:w-[120px] xl:h-[120px] sm:w-[55px] sm:h-[55px]">
              <Image src={safety} alt="" width={120} height={110} />
            </div>
            <p className="font-[500] xl:text-[25px] lg:text-[22px] sm:text-[18px]">Aman</p>
            <p className="xl:w-[400px] sm:w-[180px] lg:w-[300px] text-center xl:text-[20px] lg:text-[18px] sm:text-[14px] font-[500] text-[#9F9F9F] text-opacity-85">
              Keamanan adalah prioritas utama kami. Setiap proyek dilakukan
              dengan perhatian khusus pada keselamatan kerja dan kualitas bahan.
            </p>
            <div className="bg-[#9F9F9F] xl:flex sm:hidden bg-opacity-85 xl:w-[420px] sm:w-[180px] xl:h-[5px] sm:h-[2px] xl:my-[20px] sm:mt-[10px] sm:mb-[25px] rounded-full" />
          </div>
        </div>


        <div className="flex flex-row xl:gap-x-[60px] sm:gap-x-[50px] lg:gap-x-[80px] justify-center items-center lg:pb-[40px]">
          <div className="flex flex-col justify-center items-center sm:w-[200px] lg:w-[250px] lg:h-[180px] sm:h-[180px] xl:w-[420px] xl:h-[200px]">
            <div className="relative xl:w-[120px] xl:h-[120px] sm:w-[55px] sm:h-[55px] lg:w-[80px] lg:h-[80px]">
              <Image src={quality} alt="" width={120} height={120} />
            </div>
            <p className="font-[500] xl:text-[25px] sm:text-[18px] lg:text-[22px]">Kualitas</p>
            <p className="xl:w-[400px] lg:w-[300px] sm:w-[180px] text-center lg:text-[18px] xl:text-[20px] sm:text-[14px] font-[500] text-[#9F9F9F] text-opacity-85">
              Kami berkomitmen untuk memberikan hasil berkualitas tinggi pada
              setiap proyek, dengan perhatian mendetail pada setiap aspek
              konstruksi dan desain.
            </p>
          </div>
          <div className="flex flex-col relative justify-center items-center sm:w-[200px] sm:h-[180px] lg:w-[250px] lg:h-[180px] xl:w-[420px] xl:h-[200px] sm:left-[-30px] lg:left-0">
            <div className="relative xl:w-[120px] xl:h-[120px] sm:w-[55px] sm:h-[55px] lg:w-[80px] lg:h-[80px]">
              <Image src={time} alt="" width={100} height={100} />
            </div>
            <p className="font-[500] xl:text-[25px] sm:text-[18px] lg:text-[22px]">Tepat Waktu</p>
            <p className="xl:w-[400px] sm:w-[180px] lg:w-[300px] text-center xl:text-[20px] lg:text-[18px] sm:text-[14px] font-[500] text-[#9F9F9F] text-opacity-85">
              Kami menghargai waktu Anda dan berusaha untuk menyelesaikan setiap
              proyek sesuai dengan jadwal yang telah disepakati tanpa
              mengorbankan kualitas.
            </p>
          </div>
          <div className="relative flex flex-col justify-center items-center lg:w-[250px] lg:h-[180px] xl:w-[420px] xl:h-[200px] sm:left-[-40px] lg:left-0">
            <div className="relative xl:w-[120px] xl:h-[120px] sm:w-[55px] sm:h-[55px] lg:w-[80px] lg:h-[80px]">
              <Image src={trust} alt="" width={120} height={120} />
            </div>
            <p className="font-[500] xl:text-[25px] sm:text-[18px] lg:text-[22px]">Dipercaya</p>
            <p className="xl:w-[400px] sm:w-[180px] lg:w-[300px] lg:text-[18px] text-center xl:text-[20px] sm:text-[14px] font-[500] text-[#9F9F9F] text-opacity-85">
              Dengan reputasi yang solid dan banyak klien yang puas, kami adalah
              mitra terpercaya dalam mewujudkan visi konstruksi dan desain Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
