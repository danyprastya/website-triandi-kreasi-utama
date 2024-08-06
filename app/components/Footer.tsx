import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-fit w-full bg-[#4473C5] mt-[40px]">
      <div className="flex flex-row px-[60px] py-[40px] mt-[50px] justify-evenly gap-x-[150px] items-center w-screen">
        <div className="flex flex-col text-white w-1/3 gap-y-[30px] pl-[35px]">
          <p className="font-semibold text-[38px]">Triandi Kreasi Utama</p>
          <p className="text-[16px]">
            Spesialis dalam konstruksi, desain interior, renovasi, dan
            perawatan rumah di Bandung. Dengan pengalaman bertahun-tahun dan
            komitmen terhadap kualitas dan ketepatan waktu, kami siap mewujudkan
            setiap proyek dengan profesionalisme dan keahlian. Hubungi kami di
            melalui bagian kontak untuk informasi lebih lanjut.
          </p>
        </div>
        <div className="flex flex-col text-white w1/3">
          <p className="font-[450] text-[33px]">Jasa</p>
          <div className="w-[190px] h-[4px] bg-white" />
          <ul className="list-disc pl-[20px] pt-[28px] text-[16px] font-[350] pb-[30px]">
            <li>Infrastruktur</li>
            <li>Konstruksi</li>
            <li>Renovasi</li>
            <li>Desain Interior</li>
            <li>Perawatan</li>
          </ul>
        </div>
        <div className="flex flex-col text-white pr-[35px] w1/3">
          <p className="font-medium text-[33px]">Kontak</p>
          <div className="w-[190px] h-[4px] bg-white" />
          <ul className="list-none pt-[20px] text-[16px] font-[350] leading-loose">
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
      <div className="text-white font-[350] text-[18px]  pl-[30px] justify-start items-center py-[30px]">
        ©️ Copyright 2024
      </div>
    </div>
  );
};

export default Footer;
