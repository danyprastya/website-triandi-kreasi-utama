import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-x-[300px] w-[100%] h-[140px]" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 1)" }}>
      <div className="flex relative flex-wrap justify-center items-center left-[50px]">
        <Link href="../landingpage">
          <Image src={logo} alt="da" width="162" height="100" />
        </Link>
      </div>
      <div className="flex flex-row flex-wrap relative left-[20px] gap-x-[40px] justify-center items-center text-black font-semibold text-[20px]">
        <Link className="hover:text-[#4473C5]" href="../landingpage">Home</Link>
        <Link className="hover:text-[#4473C5]" href="../aboutus">Tentang Kami</Link>
        <Link className="hover:text-[#4473C5]" href="../jasa">Layanan</Link>
        <Link className="hover:text-[#4473C5]" href="../projek">Projek</Link>
      </div>
      <div className="bg-[#4473C5] hover:text-black rounded-full flex relative w-[205px] h-[70px] text-white text-[20px] font-[650] right-[60px] justify-center items-center">
        <Link href="../contactus">Hubungi Kami</Link>
      </div>
    </div>
  );
};

export default Navbar;
