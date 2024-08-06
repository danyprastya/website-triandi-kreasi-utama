import React from "react";
import Link from "next/link";

const Closing = () => {
  return (
    <div className="flex flex-col xl:pt-[290px] sm:pt-[160px] justify-center items-center gap-x-[80px]">
      <p className="font-semibold xl:text-[50px] sm:text-[30px] lg:text-[40px] xl:pb-[60px] sm:pb-[30px] lg:pb-[40px]">
        Kami Siap Melayani Kebutuhan Anda
      </p>
      <div className="flex flex-row xl:gap-x-[80px] sm:gap-x-[40px]">
        <Link
          href="../contactus"
          className="xl:w-[290px] sm:w-[220px] lg:w-[270px] xl:h-[100px] sm:h-[70px] lg:h-[90px] border-[2.5px] justify-center items-center flex border-[#3B3B3B] rounded-full p-[15px] px-[30px] text-opacity-70 text-black border-opacity-80 text-center xl:text-[25px] lg:text-[23px] sm:text-[14px] font-[700] hover:bg-[#4473C5] hover:border-[#4473C5] hover:text-white"
        >
          Lakukan <br />
          Pemesanan
        </Link>
        <Link
          href="../jasa"
          className="xl:w-[290px] sm:w-[220px] xl:h-[100px] lg:w-[270px] sm:h-[70px] lg:h-[90px] border-[2.5px] border-[#3B3B3B] flex justify-center items-center rounded-full p-[15px] px-[30px] text-opacity-70 text-black border-opacity-80 text-center xl:text-[20px] lg:text-[20px] sm:text-[14px] font-[700] hover:bg-[#4473C5] hover:border-[#4473C5] hover:text-white"
        >
          Lihat Layanan Jasa <br />
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default Closing;
