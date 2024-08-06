'use client'
import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"

const AnimatedLink = motion(Link); // Membungkus Link dengan motion untuk animasi

const Stats = () => {
  return (
    <div className= 'w-full h-fit flex justify-center items-center flex-col'>
        
        <div className='flex flex-row justify-center items-center gap-x-[40px] pb-[50px] pt-[10px]'>
            <Link href="../projek" className='w-[290px] h-[100px] border-[2.5px] border-[#3B3B3B] rounded-full p-[15px] px-[30px] text-opacity-70 text-black border-opacity-80 text-center text-[25px] font-[700] hover:bg-[#4473C5] hover:border-[#4473C5] hover:text-white'>
                Contoh Portofolio <br/>Projek
            </Link>
            <Link href="../jasa" className='w-[290px] h-[100px] border-[2.5px] border-[#3B3B3B] rounded-full p-[15px] px-[30px] text-opacity-70 text-black border-opacity-80 text-center text-[25px] font-[700] hover:bg-[#4473C5] hover:border-[#4473C5] hover:text-white'>
                Layanan <br/>Jasa
            </Link>
            <Link href="../jasa" className='w-[290px] h-[100px] border-[2.5px] border-[#3B3B3B] rounded-full p-[15px] px-[30px] text-opacity-70 text-black border-opacity-80 text-center text-[25px] font-[700] hover:bg-[#4473C5] hover:border-[#4473C5] hover:text-white'>
                Testimoni <br/>Klien
            </Link>
            <Link href="" className='w-[290px] h-[100px] border-[2.5px] border-[#3B3B3B] rounded-full p-[15px] px-[30px] text-opacity-70 text-black border-opacity-80 text-center text-[25px] font-[700] hover:bg-[#4473C5] hover:border-[#4473C5] hover:text-white'>
                Lakukan <br/>Pemesanan
            </Link>
        </div>
    </div>
  )
}

export default Stats