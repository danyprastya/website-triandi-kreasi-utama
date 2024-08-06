import React from "react";
import Link from "next/link";

const Closing = () => {
  return (
    <div className="flex flex-col pt-[290px] justify-center items-center gap-x-[80px]">
      <p className="font-semibold text-[50px] pb-[60px]">
        Kami Siap Melayani Kebutuhan Anda
      </p>
      <div className="flex flex-row gap-x-[80px]">
        <Link
          href="../contactus"
          className="w-[290px] h-[100px] border-[2.5px] justify-center items-center flex border-[#3B3B3B] rounded-full p-[15px] px-[30px] text-opacity-70 text-black border-opacity-80 text-center text-[25px] font-[700] hover:bg-[#4473C5] hover:border-[#4473C5] hover:text-white"
        >
          Lakukan <br />
          Pemesanan
        </Link>
        <Link
          href="../jasa"
          className="w-[290px] h-[100px] border-[2.5px] border-[#3B3B3B] flex justify-center items-center rounded-full p-[15px] px-[30px] text-opacity-70 text-black border-opacity-80 text-center text-[20px] font-[700] hover:bg-[#4473C5] hover:border-[#4473C5] hover:text-white"
        >
          Lihat Layanan Jasa <br />
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default Closing;
