"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import infrastruktur from "../../public/infrastruktur.png";
import konstruksirumah from "../../public/konstruksirumah.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Project = () => {
  const infrastrukturControls = useAnimation();
  const { ref: infrastrukturRef, inView: infrastrukturInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const pelayananControls = useAnimation();
  const { ref: pelayananRef, inView: pelayananInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const konstruksiControls = useAnimation();
  const { ref: konstruksiRef, inView: konstruksiInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (infrastrukturInView) {
      infrastrukturControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8 },
      });
    }
  }, [infrastrukturInView, infrastrukturControls]);

  useEffect(() => {
    if (pelayananInView) {
      pelayananControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8 },
      });
    }
  }, [pelayananInView, pelayananControls]);

  useEffect(() => {
    if (konstruksiInView) {
      konstruksiControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8 },
      });
    }
  }, [konstruksiInView, konstruksiControls]);

  return (
    <div className="">
      <div className="flex flex-col p-[40px] bg-[#4473C5] text-white justify-center items-center">
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-[200px] sm:gap-x-[100px] md:gap-x-[140px] lg:gap-x-[180px] justify-center items-center text-white">
            <motion.p
              className="w-[64%] font-[500] xl:text-[35px] sm:text-[22px] md:text-[27px] lg:text-[35px]"
              ref={pelayananRef}
              initial={{ x: -60, opacity: 0 }}
              animate={pelayananControls}
            >
              Pelayanan dengan Tingkat Presisi Yang Akurat dan Terpercaya.
            </motion.p>
            <p className="w-[30%] font-[400] xl:text-[23px] sm:text-[16px] md:text-[19px] lg:text-[23px]">
              Berikut adalah beberapa contoh dari projek yang telah kami
              kerjakan.
            </p>
          </div>
          <div className="flex flex-row pt-[60px] justify-between items-center">
            <div className="flex flex-row justify-center items-center gap-x-[10px]">
              <div className="xl:w-[60px] sm:w-[30px] md:w-[40px] lg:w-[60px] h-[3px] bg-white" />
              <p className="xl:text-[30px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-[470]">
                Projek Kami
              </p>
            </div>
            <Link
              href="../projek"
              className="xl:w-[240px] sm:w-[180px] md:w-[220px] lg:w-[240px] xl:h-[75px] sm:h-[50px] md:h-[65px] lg:h-[75px] flex justify-center items-center bg-white rounded-full p-[15px] px-[30px] text-black text-center xl:text-[22px] sm:text-[16px] md:text-[19px] lg:text-[22px] font-[700] hover:bg-[#2E4F89] hover:text-white"
            >
              Lihat <br />
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row relative z-0 bg-[#4473C5] xl:h-[260px] lg:h-[220px] sm:h-[180px] w-screen">
        <div className="flex w-screen flex-row mt-[40px] justify-center items-center xl:gap-x-[80px] sm:gap-x-[30px] lg:gap-x-[50px]">
          <motion.div
            ref={infrastrukturRef}
            className="relative z-10 xl:top-[118px] lg:top-[76px] md:top-[76px] sm:top-[76px]"
            initial={{ x: -60, opacity: 0 }}
            animate={infrastrukturControls}
          >
            <div className="relative sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] h:w-[400px] xl:w-[500px] xl:h-[500px]">
              <Image
                className=""
                src={infrastruktur}
                alt=""
                width={550}
                height={550}
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-50 sm:h-[210px] md:h-[240px] lg:h-[300px] xl:h-[377px]" />
            <div className="flex flex-col absolute inset-0 z-20 xl:top-[270px] sm:top-[130px] md:top-[160px] lg:top-[210px] xl:left-[20px] sm:left-[5px] md:left-[8px] lg:left-[12px] p-4 w-fit h-fit">
              <p className="text-white xl:text-[40px] sm:text-[23px] md:text-[27px] lg:text-[30px] font-[700] text-opacity-80">
                &quot;Infrastruktur&quot;
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={konstruksiRef}
            className="relative z-10 top-[75px] xl:w-[510px] xl:h-[411px]"
            initial={{ x: 60, opacity: 0 }}
            animate={konstruksiControls}
          >
            <div className="relative sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] h:w-[400px] xl:w-[510px] xl:h-[500px]">
              <Image
                className="object-cover"
                src={konstruksirumah}
                alt=""
                width={510}
                height={411}
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-30 sm:h-[210px] md:h-[240px] lg:h-[300px] xl:h-[380px]" />
            <div className="flex flex-col absolute inset-0 z-20 xl:top-[270px] sm:top-[130px] md:top-[160px] lg:top-[210px] xl:left-[20px] sm:left-[5px] md:left-[8px] lg:left-[12px] p-4 w-fit h-fit">
              <p className="text-white xl:text-[40px] sm:text-[23px] md:text-[27px] lg:text-[30px] font-[700] text-opacity-80">
                &quot;Konstruksi&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
