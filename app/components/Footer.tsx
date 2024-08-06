import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-fit w-full bg-[#4473C5] mt-[40px]">
      <div className="flex flex-row px-[60px] xl:py-[40px] sm:py-[20px] xl:mt-[50px] sm:mt-[20px] justify-evenly xl:gap-x-[150px] lg:gap-x-[80px] sm:gap-x-[40px] items-center w-screen">
        <div className="flex flex-col text-white w-1/3 xl:gap-y-[30px] sm:gap-y-[5px] lg:gap-y-[20px] pl-[35px]">
          <p className="font-semibold xl:text-[38px] sm:text-[12px] lg:text-[24px]">Triandi Kreasi Utama</p>
          <p className="xl:text-[16px] sm:text-[8px] lg:text-[14px] md:pb-[20px] lg:pb-[30px]">
            Spesialis dalam konstruksi, desain interior, renovasi, dan
            perawatan rumah di Bandung. Dengan pengalaman bertahun-tahun dan
            komitmen terhadap kualitas dan ketepatan waktu, kami siap mewujudkan
            setiap proyek dengan profesionalisme dan keahlian. Hubungi kami di
            melalui bagian kontak untuk informasi lebih lanjut.
          </p>
        </div>
        <div className="flex flex-col text-white w1/3">
          <p className="font-[450] xl:text-[33px] sm:text-[14px] lg:text-[28px]">Jasa</p>
          <div className="xl:w-[190px] lg:w-[150px] sm:w-[60px] xl:h-[4px] lg:h-[4px] sm:h-[2px] bg-white" />
          <ul className="list-disc xl:pl-[20px] sm:pl-[5px] xl:pt-[28px] lg:pt-[24px] sm:pt-[10px] xl:text-[16px] sm:text-[8px] lg:text-[14px] font-[350] xl:pb-[30px] lg:pb-[120px] sm:pb-[55px]">
            <li>Infrastruktur</li>
            <li>Konstruksi</li>
            <li>Renovasi</li>
            <li>Desain Interior</li>
            <li>Perawatan</li>
          </ul>
        </div>
        <div className="flex flex-col text-white pr-[35px] w1/3">
          <p className="font-[450] xl:text-[33px] sm:text-[14px] lg:text-[28px] ">Kontak</p>
          <div className="xl:w-[190px] lg:w-[190px] sm:w-[100px] xl:h-[4px] lg:h-[4px] sm:h-[2px] bg-white" />
          <ul className="list-none xl:pt-[20px] lg:pt-[20px] sm:pt-[10px] xl:text-[16px] lg:text-[14px] sm:text-[8px] xl:pb-[30px] sm:pb-[50px] lg:pb-[62px] font-[350] leading-loose">
            <li>No Telp: +62 8186 32877 (Irwan Triandi)</li>
            <li>No Telp: +62 8131 2742 229 (Agus Suparman)</li>
            <li>Email: triandi.irone@yahoo.co.id</li>
            <li>
              Alamat: Jl. Leuwi Anyar VII No. G-5, Bandung
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white w-screen h-[2px] " />
      <div className="text-white font-[350] xl:text-[18px] lg:text-[18px] sm:text-[12px]  pl-[30px] justify-start items-center xl:py-[30px] lg:py-[30px] sm:py-[15px]">
        ©️ Copyright 2024
      </div>
    </div>
  );
};

export default Footer;
