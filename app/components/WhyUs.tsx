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

  // Function to get font size based on screen width
  const getFontSize = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      return "30px"; // xl
    } else if (width >= 1024) {
      return "30px"; // lg
    } else if (width >= 768) {
      return "25px"; // md
    } else if (width >= 640) {
      return "20px"; // sm
    } else {
      return "20px"; // default
    }
  };

  const getLineWidth = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      return "130px"; // xl
    } else if (width >= 1024) {
      return "130px"; // lg
    } else if (width >= 768) {
      return "100px"; // md
    } else if (width >= 640) {
      return "90px"; // sm
    } else {
      return "80px"; // default
    }
  };

  useEffect(() => {
    if (whyusInView) {
      whyusControls.start({
        opacity: 1,
        fontSize: getFontSize(),
        transition: { duration: 0.8, delay: 0.3 },
      });
    }
  }, [whyusInView, whyusControls]);

  useEffect(() => {
    if (garisInView) {
      garisControls.start({
        width: getLineWidth(),
        opacity: 1,
        transition: { duration: 1, delay: 1 },
      });
    }
  }, [garisInView, garisControls]);

  return (
    <div className="xl:py-[50px] sm:py-[20px] md:py-[30px] lg:py-[40px] py-[20px]">
      <div className="flex flex-col justify-center items-center">
        <motion.p
          ref={whyusRef}
          className="xl:text-[30px] sm:text-[16px] md:text-[20px] lg:text-[30px] text-[16px] font-semibold"
          initial={{ fontSize: "0px", opacity: 0 }}
          animate={whyusControls}
        >
          Mengapa Kami ?
        </motion.p>
        <motion.div
          className="bg-black h-[4px] xl:w-[130px] w-[60px] mb-[40px]"
          ref={garisRef}
          initial={{ width: 0, opacity: 0 }}
          animate={garisControls}
        />
      </div>
      <div className="flex flex-col lg:gap-y-[70px] md:gap-y-[20px] sm:gap-y-[60px] xl:gap-y-[70px] gap-y-[20px]">
        <div className="flex flex-row xl:gap-x-[60px] sm:gap-x-[50px] md:gap-x-[30px] lg:gap-x-[80px] gap-x-[20px] justify-center items-center">

          <div className="flex flex-col justify-center items-center w-[150px] h-[280px] p-[5px] sm:w-[150px] sm:h-[280px] lg:w-[250px] md:w-[220px] md:h-[280px] lg:h-[280px] sm:gap-y-[5px] gap-y-[5px] xl:w-[420px] xl:h-[400px]">
            <div className="relative xl:w-[120px] xl:h-[120px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] md:w-[70px] md:h-[70px] h-[60px] w-[60px] ">
              <Image src={jempol} alt="" width={120} height={110} />
            </div>
            <p className="font-[500] xl:text-[25px] lg:text-[22px] sm:text-[18px] md:text-[20px] text-[18px] ">
              Profesional
            </p>
            <p className="xl:w-[420px] sm:w-[150px] lg:w-[250px] md:w-[220px] w-[150px] text-center xl:text-[20px] lg:text-[18px] sm:text-[14px] md:text-[16px] text-[12px] font-[500] text-[#9F9F9F] text-opacity-85">
              Kami bekerja dengan standar profesional tinggi, memastikan setiap
              proyek dikelola oleh tim ahli yang berpengalaman dan berdedikasi.
            </p>
            <div className="bg-[#9F9F9F] xl:flex lg:flex sm:hidden bg-opacity-85 xl:w-[420px] lg:w-[400px] sm:w-[180px] xl:h-[5px] sm:h-[2px] xl:my-[20px] sm:mb-[10px] sm:mt-[17px] rounded-full" />
          </div>

          <div className="flex flex-col justify-center w-[150px] h-[280px] xl:gap-y-[17px] md:gap-y-[12px] sm:gap-y-[5px] gap-y-[5px] items-center md:w-[220px] md:h-[280px] sm:w-[150px] sm:h-[300px] lg:w-[250px] lg:h-[300px] xl:w-[420px] xl:h-[400px] sm:mb-[20px]">
            <div className="relative xl:w-[120px] xl:h-[120px] sm:w-[55px] sm:h-[55px] lg:w-[80px] lg:h-[80px] sm:mb-[10px] lg:mb-[10px] mb-[15px] size-[55px]">
              <Image src={lampu} alt="" width={100} height={100} />
            </div>
            <p className="font-[500] xl:text-[25px] lg:text-[22px] sm:text-[18px] text-[18px] ">Inovatif</p>
            <p className="xl:w-[420px] sm:w-[150px] w-[150px] lg:w-[250px] md:w-[220px] text-center xl:text-[20px] lg:text-[18px] sm:text-[14px] text-[12px] xl:mb-[20px] sm:mb-[10px] mb-[25px] md:mb-[32px] lg:mb-[40px] font-[500] text-[#9F9F9F] text-opacity-85">
              Kami selalu mencari cara baru dan kreatif untuk memberikan solusi
              konstruksi dan desain yang modern dan efisien.
            </p>
            <div className="bg-[#9F9F9F] xl:flex sm:hidden bg-opacity-85 xl:w-[420px] sm:w-[180px] xl:h-[5px] sm:h-[2px] xl:mb-[30px] sm:mb-[27px] xl:mt-[15px] sm:mt-[0px] rounded-full" />
          </div>

          <div className="flex flex-col justify-center items-center w-[150px] h-[280px] md:w-[220px] md:gap-y-[12px] xl:gap-y-[12px] md:h-[280px] sm:w-[150px] sm:h-[180px] lg:w-[250px] lg:h-[180px] xl:w-[420px] xl:h-[400px] sm:mt-[20px] xl:mt-[0px]">
            <div className="relative xl:w-[120px] xl:h-[120px] sm:w-[55px] sm:h-[55px] size-[55px] lg:size-[80px]">
              <Image src={safety} alt="" width={120} height={110} />
            </div>
            <p className="font-[500] xl:text-[25px] lg:text-[22px] sm:text-[18px] text-[18px]">Aman</p>
            <p className="xl:w-[420px] sm:w-[150px] md:w-[220px] lg:w-[250px] w-[150px] text-center xl:text-[20px] lg:text-[18px] sm:text-[14px] md:mb-[40px] text-[12px] lg:mb-[65px] xl:mb-[5px] font-[500] text-[#9F9F9F] text-opacity-85">
              Keamanan adalah prioritas utama kami. Setiap proyek dilakukan
              dengan perhatian khusus pada keselamatan kerja dan kualitas bahan.
            </p>
            <div className="bg-[#9F9F9F] xl:flex sm:hidden bg-opacity-85 xl:w-[420px] sm:w-[180px] xl:h-[5px] sm:h-[2px] sm:mt-[10px] xl:mt-[0px] sm:mb-[25px] rounded-full" />
          </div>
        </div>

        <div className="flex flex-row xl:gap-x-[60px] sm:gap-x-[50px] md:gap-x-[30px] lg:gap-x-[80px] gap-x-[20px] justify-center items-center lg:pb-[40px]">
          <div className="flex flex-col justify-center items-center w-[150px] h-[280px] sm:w-[150px] md:w-[220px] md:h-[280px] lg:w-[250px] lg:h-[180px] sm:h-[180px] xl:w-[420px] xl:h-[200px]">
            <div className="relative xl:w-[120px] xl:h-[120px] sm:w-[55px] sm:h-[55px] lg:w-[80px] lg:h-[80px] size-[55px]">
              <Image src={quality} alt="" width={120} height={120} />
            </div>
            <p className="font-[500] xl:text-[25px] sm:text-[18px] lg:text-[22px] text-[18px]">Berkualitas</p>
            <p className="xl:w-[420px] sm:w-[150px] lg:w-[250px] w-[150px] md:w-[220px] text-[12px] text-center xl:text-[20px] lg:text-[18px] sm:text-[14px] font-[500] text-[#9F9F9F] text-opacity-85">
              Kami berkomitmen untuk memberikan hasil yang berkualitas tinggi.
              Setiap detail diperhatikan untuk memastikan kepuasan klien.
            </p>
          </div>
          <div className="flex flex-col w-[150px] h-[280px] justify-center items-center sm:w-[150px] sm:h-[180px] md:w-[220px] md:h-[280px] lg:w-[250px] lg:h-[180px] xl:w-[420px] xl:h-[200px]">
            <div className="relative xl:w-[120px] xl:h-[120px] sm:w-[55px] sm:h-[55px] lg:w-[80px] lg:h-[80px] size-[55px]">
              <Image src={time} alt="" width={120} height={120} />
            </div>
            <p className="font-[500] xl:text-[25px] sm:text-[18px] lg:text-[22px] text-[18px] ">Efisien</p>
            <p className="xl:w-[420px] sm:w-[150px] lg:w-[250px] md:w-[220px] w-[150px] text-center xl:text-[20px] lg:text-[18px] sm:text-[14px] text-[12px] font-[500] text-[#9F9F9F] text-opacity-85">
              Kami memahami pentingnya waktu. Kami selalu berupaya menyelesaikan
              proyek tepat waktu tanpa mengorbankan kualitas.
            </p>
          </div>
          <div className="flex flex-col w-[150px] h-[280px] relative justify-center items-center sm:w-[150px] sm:h-[180px] md:w-[220px] md:h-[280px] lg:w-[250px] lg:h-[180px] xl:w-[420px] xl:h-[200px]">
            <div className="relative xl:w-[120px] xl:h-[120px] sm:w-[55px] sm:h-[55px] lg:w-[80px] lg:h-[80px] size-[55px] ">
              <Image src={trust} alt="" width={120} height={120} />
            </div>
            <p className="font-[500] xl:text-[25px] sm:text-[18px] lg:text-[22px] text-[18px] ">Terpercaya</p>
            <p className="xl:w-[420px] sm:w-[150px] lg:w-[250px] w-[150px] md:w-[220px] text-center xl:text-[20px] lg:text-[18px] sm:text-[14px] text-[12px] font-[500] text-[#9F9F9F] text-opacity-85">
              Kepercayaan adalah dasar dari hubungan kami dengan klien. Kami
              selalu menjaga integritas dan kejujuran dalam setiap proyek.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
