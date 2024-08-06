import React from "react";
import Image from "next/image";
import team from "../../public/team.png";
import kantor from "../../public/kantor.png";

const AboutUs = () => {
  return (
    <div className="flex justify-center gap-x-[10px] flex-row py-[80px] mx-[40px]">
      <div className="flex flex-col w-[47%] mx-[30px]">
        <div className="flex flex-col gap-y-[20px] pb-[90px]">
          <p className="w-[95%] text-[#9F9F9F] text-[27px] font-[500] text-opacity-90 leading-tight">
            Selamat datang di Triandi Kreasi Utama. Kami adalah perusahaan yang
            berbasis di Bandung, dengan pengalaman luas dalam bidang konstruksi
            dan desain.
          </p>
        </div>
        <Image src={team} alt="" width={570} height={400} />
      </div>
      <div className="w-[49%] relative">
        <Image src={kantor} alt="" layout="intrisic" width={850} height={680} />
        <div className="flex flex-col gap-y-[20px] pb-[90px] mt-[40px]">
          <p className="w-[95%] text-[#9F9F9F] text-[27px] font-[500] text-opacity-90 leading-tight">
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
