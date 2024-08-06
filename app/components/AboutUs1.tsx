import React from "react";
import Image from "next/image";
import team from "../../public/team.png";
import kantor from "../../public/kantor.png";

const AboutUs = () => {
  return (
    <div className="flex justify-center gap-x-[10px] flex-row xl:py-[80px] sm:py-[30px] lg:py-[50px] mx-[40px]">
      <div className="flex flex-col w-[47%] mx-[30px]">
        <div className="flex flex-col gap-y-[20px] xl:pb-[90px] lg:pb-[70px] sm:pb-[30px]">
          <p className="w-[95%] text-[#9F9F9F] xl:text-[27px] lg:text-[27px] sm:text-[17px] font-[500] text-opacity-90 xl:leading-tight lg:leading-normal sm:leading-normal">
            Selamat datang di Triandi Kreasi Utama. Kami adalah perusahaan yang
            berbasis di Bandung, dengan pengalaman luas dalam bidang konstruksi
            dan desain.
          </p>
        </div>
        <Image src={team} alt="" width={570} height={400} />
      </div>
      <div className="w-[49%] relative">
        <Image src={kantor} alt="" layout="intrisic" width={850} height={680} />
        <div className="flex flex-col gap-y-[20px] xl:pb-[90px] sm:pb-[30px] xl:mt-[40px] sm:mt-[20px]">
          <p className="w-[95%] text-[#9F9F9F] xl:text-[27px] lg:text-[25px] sm:text-[15px] font-[500] text-opacity-90 xl:leading-tight sm:leading-normal">
            Kami adalah perusahaan yang memiliki pengalaman bertahun-tahun dalam
            menghadirkan solusi pembangunan berkualitas tinggi. Kami spesialis
            dalam konstruksi bangunan, desain interior, renovasi, dan perawatan
            rumah. Dengan tim yang berpengalaman dan komitmen dalam
            menyelesaikan setiap proyek dengan standar kualitas yang tinggi.
            Kami siap mewujudkan visi Anda menjadi kenyataan. Hubungi kami untuk
            informasi lebih lanjut dan mulai perjalanan konstruksi dan desain
            Anda bersama kami.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
