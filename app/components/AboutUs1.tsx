import React from "react";
import Image from "next/image";
import team from "../../public/team.png";
import kantor from "../../public/kantor.png";

const AboutUs = () => {
  return (
    <div className="w-screen flex justify-center gap-x-[35px] sm:gap-x-[35px] flex-row xl:py-[80px] sm:py-[30px] py-[30px] lg:py-[50px] xl:mx-[10px] sm:mx-[15px] mx-auto">
      <div className="flex flex-col w-[47%] xl:mx-[0px]">
        <div className="flex flex-col xl:gap-y-[20px] gap-x-[15px] xl:pb-[90px] lg:pb-[70px] sm:pb-[30px] pb-[20px]">
          <p className="w-[90%] text-[#9F9F9F] xl:text-[27px] lg:text-[27px] sm:text-[17px] text-[17px] font-[500] text-opacity-90 leading-normal xl:leading-tight lg:leading-normal sm:leading-normal">
            Selamat datang di Triandi Kreasi Utama. Kami adalah perusahaan yang
            berbasis di Bandung, dengan pengalaman luas dalam bidang konstruksi
            dan desain.
          </p>
        </div>
        <Image src={team} alt="team" width={570} height={400} />
      </div>
      <div className="w-[49%] relative">
        <Image src={kantor} alt="kantor" layout="intrinsic" width={850} height={680} />
        <div className="flex flex-col xl:gap-y-[20px] gap-y-[15px] xl:pb-[90px] sm:pb-[30px] pb-[20px] xl:mt-[40px] sm:mt-[20px] mt-[10px] sm:max-h-[400px] sm:overflow-y-auto">
          <p className="w-[100%] text-[#9F9F9F] xl:text-[27px] lg:text-[25px] sm:text-[15px] text-[13px] font-[500] leading-normal text-opacity-90 xl:leading-tight sm:leading-normal">
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
