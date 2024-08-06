import React from "react";
import Image from "next/image";
import team from "../../public/team.png";
import kantor from "../../public/kantor.png";

const AboutUs = () => {
  return (
    <div className="flex justify-center gap-x-[10px] items-center flex-row py-[80px] bg-[#F5F5F5]">
      <div className="flex  flex-col px-[30px]">
        <div className="flex flex-col gap-y-[20px] pb-[100px]">
          <p className="font-[650] text-[60px]">Triandi Kreasi Utama</p>
          
        </div>
        <Image src={team} alt="" width={570} height={400} />
      </div>
      <div className="relative top-[10px]">
        <Image src={kantor} alt="" layout="intrisic" width={750} height={680} />
        <div className="flex flex-col gap-y-[20px]  mt-[40px]">
          <p className="font-[650] text-[60px]">Tentang Kami</p>
          <p className=" w-[760px] text-[#9F9F9F] text-[26px] font-[500] text-opacity-90 leading-tight">
            Kami adalah perusahaan yang memiliki pengalaman bertahun-tahun dalam
            menghadirkan solusi pembangunan berkualitas tinggi. Kami spesialis
            dalam konstruksi bangunan, desain interior, renovasi, dan perawatan
            rumah. Dengan tim yang berpengalaman dan komitmen dalam menyelesaikan
            setiap proyek dengan standar kualitas yang tinggi. Kami siap mewujudkan visi Anda
            menjadi kenyataan. Hubungi kami untuk informasi lebih lanjut dan
            mulai perjalanan konstruksi dan desain Anda bersama kami.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
