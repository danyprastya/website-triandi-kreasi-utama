import React from "react";
import Link from "next/link";

const Closing = () => {
  return (
    <div className="flex flex-col xl:pt-[290px] sm:pt-[120px] md:pt-[130px] lg:pt-[180px] pt-[100px] justify-center items-center gap-y-[10px]">
      <p className="font-semibold xl:text-[50px] sm:text-[30px] lg:text-[40px] text-[25px] pb-[20px]  md:pb-[35px] xl:pb-[60px] sm:pb-[30px] lg:pb-[40px]">
        Kami Siap Melayani Kebutuhan Anda
      </p>
      <div className="flex flex-row xl:gap-x-[80px] sm:gap-x-[50px] md:gap-x-[40px] lg:gap-x-[70px] gap-x-[30px]">
        <Link
          href="../contactus"
          className="xl:w-[290px] sm:w-[220px] md:w-[240px] lg:w-[270px] w-[200px] xl:h-[100px] h-[50px] sm:h-[70px] md:h-[80px] lg:h-[90px] border-[2.5px] justify-center items-center flex border-[#3B3B3B] rounded-full xl:p-[15px] p-[5px] xl:px-[30px] px-[5px] text-opacity-70 text-black border-opacity-80 text-center xl:text-[25px] lg:text-[23px] sm:text-[14px] text-[12px] font-[700] hover:bg-[#4473C5] hover:border-[#4473C5] hover:text-white"
        >
          Lakukan <br />
          Pemesanan
        </Link>
        <Link
          href="../jasa"
          className="xl:w-[290px] sm:w-[220px] md:w-[240px] md:h-[80px] xl:h-[100px] lg:w-[270px] w-[200px] h-[50px] sm:h-[70px] lg:h-[90px] border-[2.5px] border-[#3B3B3B] flex justify-center items-center rounded-full xl:p-[15px] p-[5px] xl:px-[30px] px-[5px] text-opacity-70 text-black border-opacity-80 text-center xl:text-[20px] lg:text-[20px] sm:text-[14px] text-[12px] font-[700] hover:bg-[#4473C5] hover:border-[#4473C5] hover:text-white"
        >
          Lihat Layanan Jasa <br />
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default Closing;
