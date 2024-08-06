'use client'
import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"

const AnimatedLink = motion(Link); // Membungkus Link dengan motion untuk animasi

const Stats = () => {
  return (
    <div className= 'w-full h-fit flex justify-center items-center flex-col'>
        
        <div className='flex flex-row justify-center items-center xl:gap-x-[40px] lg:gap-x-[40px] sm:gap-x-[20px] md:gap-x-[30px] pb-[50px] pt-[60px] relative sm:top-[-40px]'>
            <Link href="../projek" className='justify-center items-center sm:w-[120px] md:w-[140px] lg:w-[200px] xl:w-[290px] sm:h-[50px] lg:h-[70px] xl:h-[100px] border-[2.5px] border-[#3B3B3B] rounded-full p-[15px] sm:p-[5px] lg:p-[8px] px-[30px] text-opacity-70 text-black border-opacity-80 text-center sm:text-[11px] md:text-[12px] lg:text-[17px] xl:text-[25px] font-[700] hover:bg-[#4473C5] hover:border-[#4473C5] hover:text-white'>
                Contoh Portofolio <br/>Projek
            </Link>
            <Link href="../jasa" className='justify-center items-center sm:w-[120px] md:w-[140px] lg:w-[200px] xl:w-[290px] sm:h-[50px] lg:h-[70px] xl:h-[100px] border-[2.5px] border-[#3B3B3B] rounded-full p-[15px] sm:p-[5px] lg:p-[8px] px-[30px] text-opacity-70 text-black border-opacity-80 text-center sm:text-[12px] md:text-[12px] lg:text-[17px] xl:text-[25px] font-[700] hover:bg-[#4473C5] hover:border-[#4473C5] hover:text-white'>
                Layanan <br/>Jasa
            </Link>
            <Link href="../jasa" className='justify-center items-center sm:w-[120px] md:w-[140px] lg:w-[200px] xl:w-[290px] sm:h-[50px] lg:h-[70px] xl:h-[100px] border-[2.5px] border-[#3B3B3B] rounded-full p-[15px] sm:p-[5px] lg:p-[8px] px-[30px] text-opacity-70 text-black border-opacity-80 text-center sm:text-[12px] md:text-[12px] lg:text-[17px] xl:text-[25px] font-[700] hover:bg-[#4473C5] hover:border-[#4473C5] hover:text-white'>
                Testimoni <br/>Klien
            </Link>
            <Link href="" className='justify-center items-center sm:w-[120px] md:w-[140px] lg:w-[200px] xl:w-[290px] sm:h-[50px] lg:h-[70px] xl:h-[100px] border-[2.5px] border-[#3B3B3B] rounded-full p-[15px] sm:p-[5px] lg:p-[8px] px-[30px] text-opacity-70 text-black border-opacity-80 text-center sm:text-[12px] md:text-[12px] lg:text-[17px] xl:text-[25px] font-[700] hover:bg-[#4473C5] hover:border-[#4473C5] hover:text-white'>
                Lakukan <br/>Pemesanan
            </Link>
        </div>
    </div>
  )
}

export default Stats