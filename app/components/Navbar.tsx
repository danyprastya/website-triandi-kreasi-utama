import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center sm:gap-x-[80px] md:gap-x-[60px] lg:gap-x-[150px] xl:gap-x-[300px] w-[100%] h-[140px]" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 1)" }}>
      <div className="flex flex-wrap justify-center items-center relative left-0 md:left-[0px] border-none">
      <Link href="/landingpage">
        <div className="relative w-[162px] h-[100px] sm:w-[100px] sm:h-[46px] md:w-[120px] md:h-[66px] lg:w-[140px] lg:h-[86px] xl:w-[162px] xl:h-[100px] border-none">
          <Image src={logo} alt="da" layout="fill" objectFit="contain" />
        </div>
      </Link>
    </div>
      <div className="flex flex-row flex-wrap relative left-[20px] sm:left-[0px] sm:gap-x-[20px] md:gap-x-[30px] lg:gap-x-[50px] justify-center items-center text-black font-semibold xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px]">
        <Link className="hover:text-[#4473C5]" href="../landingpage">Home</Link>
        <Link className="hover:text-[#4473C5]" href="../aboutus">Tentang Kami</Link>
        <Link className="hover:text-[#4473C5]" href="../jasa">Layanan</Link>
        <Link className="hover:text-[#4473C5]" href="../projek">Projek</Link>
      </div>
      <div className="bg-[#4473C5] hover:text-black rounded-full flex relative xl:w-[205px] xl:h-[70px] sm:w-[100px] sm:h-[35px] md:w-[120px] md:h-[45px] lg:w-[140px] lg:h-[60px] text-white sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] sm:font-[450] md:font-[550] lg:font-[650] xl:font-[650] sm:right-[0px] md:right-0 xl:right-[60px] justify-center items-center">
        <Link href="../contactus">Hubungi Kami</Link>
      </div>
    </div>
  );
};

export default Navbar;
