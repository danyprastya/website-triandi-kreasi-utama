"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[160px] mx-auto flex flex-row items-center justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center sm:gap-x-[40px] md:gap-x-[60px] lg:gap-x-[100px] xl:gap-x-[200px] gap-x-[30px] px-4 sm:px-0 md:px-0 lg:px-8 shadow-md bg-white">
      <div className="relative w-[110px] h-[65px] sm:w-[120px] sm:h-[65px] md:w-[140px] md:h-[70px] lg:w-[160px] lg:h-[70px] xl:w-[180px] xl:h-[90px]">
        <Link href="/landingpage">
          <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
        </Link>
      </div>
      <div className="sm:hidden text-center flex-grow justify-center items-center flex">
        <p className="text-[#4473C5] font-bold text-[25px]">Triandi Kreasi Utama</p>
      </div>
      <div className="hidden sm:flex md:flex lg:flex xl:flex flex-row sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[20px] items-center gap-x-8 sm:gap-x-[20px] md:gap-x-[25px] lg:gap-x-[40px] xl:gap-x-[60px] text-black font-semibold">
        <Link className="hover:text-[#4473C5]" href="/landingpage">
          Home
        </Link>
        <Link className="hover:text-[#4473C5]" href="/aboutus">
          Tentang Kami
        </Link>
        <Link className="hover:text-[#4473C5]" href="/jasa">
          Layanan
        </Link>
        <Link className="hover:text-[#4473C5]" href="/projek">
          Projek
        </Link>
      </div>
      <div className="hidden sm:flex md:flex lg:flex xl:flex flex-row items-center text-black font-semibold">
        <Link
          className="bg-[#4473C5] hover:text-black text-white text-center justify-center items-center flex rounded-full px-4 py-2 sm:w-[140px] sm:h-[40px] md:w-[160px] md:h-[50px] xl:w-[205px] xl:h-[70px] xl:text-[20px] sm:text-[14px] md:text-[16px]"
          href="/contactus"
        >
          Hubungi Kami
        </Link>
      </div>
      <div className="sm:hidden w-[40px]">
        <button onClick={toggleSidebar} className="text-[28px]">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 w-2/4 h-full bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden`}
      >
        <div className="flex flex-col items-end justify-start p-4 space-y-4 text-black text-[22px] font-semibold">
          <button onClick={toggleSidebar} className="text-2xl mb-2">
            <FaTimes />
          </button>
          <Link
            className="hover:text-[#4473C5]"
            href="/landingpage"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            className="hover:text-[#4473C5]"
            href="/aboutus"
            onClick={toggleSidebar}
          >
            Tentang Kami
          </Link>
          <Link
            className="hover:text-[#4473C5]"
            href="/jasa"
            onClick={toggleSidebar}
          >
            Layanan
          </Link>
          <Link
            className="hover:text-[#4473C5]"
            href="/projek"
            onClick={toggleSidebar}
          >
            Projek
          </Link>
          <Link
            className="hover:text-[#4473C5]"
            href="/contactus"
            onClick={toggleSidebar}
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
