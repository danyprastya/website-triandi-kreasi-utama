import React from "react";
import Image from "next/image";
import orang1 from "../../public/orang1.png"
import orang2 from "../../public/orang2.png"
import orang3 from "../../public/orang3.png"

const Team = () => {
  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      <div className="flex flex-col justify-center items-center text-center py-[40px]">
        <p className="font-bold text-[40px]">Meet The Team</p>
        <p className="text-[#9F9F9F] text-[25px] font-[650] text-opacity-60 mt-[20px]">
          Lorem ipsum dolor sit amet consectetur.<br/> Suspendisse ut tincidunt sed
          non eget ac eget.
        </p>
      </div>
      <div className="flex flex-row gap-x-[60px] px-[80px] pb-[60px] leading-tight">
        <div className="flex flex-col">
            <Image
            src={orang1}
            alt=""
            width={450}
            height={450}
            objectFit="contain"
            className="border-2"
            />
            <div className="flex flex-col mt-[30px]">
                <p className="font-[700] text-[40px]">
                    Nama Direksi
                </p>
                <p className="font-[550] text-[30px]">
                    Jabatan
                </p>
            </div>
        </div>
        <div className="flex flex-col">
            <Image
            src={orang2}
            alt=""
            width={450}
            height={450}
            objectFit="contain"
            className="border-2"
            />
            <div className="flex flex-col mt-[30px]">
                <p className="font-[700] text-[40px]">
                    Nama Direksi
                </p>
                <p className="font-[550] text-[30px]">
                    Jabatan
                </p>
            </div>
        </div>
        <div className="flex flex-col">
            <Image
            src={orang3}
            alt=""
            width={450}
            height={450}
            objectFit="contain"
            className="border-2"
            />
            <div className="flex flex-col mt-[30px]">
                <p className="font-[700] text-[40px]">
                    Nama Direksi
                </p>
                <p className="font-[550] text-[30px]">
                    Jabatan
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
