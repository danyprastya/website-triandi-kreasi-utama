'use client'
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
    threshold: 0.5
  });

  const pelayananControls = useAnimation();
  const { ref: pelayananRef, inView: pelayananInView } = useInView({
    triggerOnce: true, 
    threshold: 0.5
  });

  const konstruksiControls = useAnimation();
  const { ref: konstruksiRef, inView: konstruksiInView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  useEffect(() => {
    if (infrastrukturInView) {
      infrastrukturControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8},
      });
    }
  }, [infrastrukturInView, infrastrukturControls]);

  useEffect(() => {
    if (pelayananInView) {
      pelayananControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8},
      });
    }
  }, [pelayananInView, pelayananControls]);

  useEffect(() => {
    if (konstruksiInView) {
      konstruksiControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8},
      });
    }
  }, [konstruksiInView, konstruksiControls]);

  return (
    <div className="">
      <div className="flex flex-col p-[40px] bg-[#4473C5] text-white justify-center items-center">
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-[200px] justify-center items-center text-white">
            <motion.p className="w-[64%] font-[500] text-[35px]"
            ref={pelayananRef}
            initial={{ x: -60, opacity: 0 }}
            animate={pelayananControls}
            >
              Pelayanan dengan Tingkat Presisi Yang Akurat dan Terpercaya.
            </motion.p>
            <p className="w-[30%] font-[400] text-[23px]">
              Berikut adalah beberapa contoh dari projek yang telah kami
              kerjakan.
            </p>
          </div>
          <div className="flex flex-row pt-[60px] justify-between items-center">
            <div className="flex flex-row justify-center items-center gap-x-[10px]">
              <div className="w-[60px] h-[3px] bg-white" />
              <p className="text-[30px] font-[470]">Projek Kami</p>
            </div>
            <Link
              href="../projek"
              className="w-[240px] h-[75px] flex justify-center items-center bg-white rounded-full p-[15px] px-[30px] text-black text-center text-[22px] font-[700] hover:bg-[#2E4F89] hover:text-white"
            >
              Lihat <br />
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row relative z-0 bg-[#4473C5] h-[260px] w-screen">
        <div className="flex w-screen flex-row mt-[40px] justify-center items-center gap-x-[50px]">
          <motion.div
            ref={infrastrukturRef}
            className="relative z-10 top-[75px]"
            initial={{ x: -60, opacity: 0 }}
            animate={infrastrukturControls}
          >
            <Image
              className=""
              src={infrastruktur}
              alt=""
              width={550}
              height={550}
            />
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="flex flex-col absolute inset-0 z-20 top-[250px] left-[20px] p-4 w-fit h-fit">
              <p className="text-white text-[40px] font-[700] text-opacity-80">
                &quot;Infrastruktur&quot;
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={konstruksiRef}
            className="relative z-10 top-[75px] w-[510px] h-[411px]"
            initial={{ x: 60, opacity: 0 }}
            animate={konstruksiControls}
          >
            <Image
              className="object-cover"
              src={konstruksirumah}
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-30" />
            <div className="flex flex-col absolute inset-0 z-20 top-[250px] left-[20px] p-4 w-fit h-fit">
              <p className="text-white text-[40px] font-[700] text-opacity-80">
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
