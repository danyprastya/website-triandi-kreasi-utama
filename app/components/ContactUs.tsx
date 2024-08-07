import React from "react";
import Image from "next/image";
import logo_email from "../../public/logo_email.svg";
import logo_wa from "../../public/logo_wa.svg";
import Link from "next/link";

const contactus = () => {
  return (
    <div className="flex flex-col justify-center w-full mx-auto items-center xl:py-[50px] lg:py-[50px] md:py-[40px] sm:py-[30px] py-[20px]">
      <p className="xl:text-[40px] sm:text-[30px] md:text-[35px] lg:text-[38px] text-[22px] font-semibold text-center">
        Konsultasikan Kebutuhan Anda <br /> Dengan Kami
      </p>
      <div className="flex flex-col sm:flex-row xl:gap-[60px] justify-center items-center lg:gap-[50px] md:gap-[40px] sm:gap-[30px] gap-[10px] xl:py-[40px] lg:py-[40px] md:py-[35px] sm:py-[30px] py-[20px] ">
      <div
          className="flex flex-col justify-start items-center sm:jus xl:w-[400px] sm:w-[250px] md:w-[300px] lg:w-[400px] w-[280px] text-start p-[20px] gap-y-[8px]"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="xl:size-[70px] size-[50px] p-[10px] w-full relative bottom-[10px] sm:bottom-[0px]">
            <Image src={logo_email} alt="" objectFit="contain" layout="fill" />
          </div>
          <div className="text-start leading-[2] justify-center flex flex-col xl:bottom-[-15px] sm:bottom-[-10px] md:bottom-[-15px] lg:bottom-[-18px] relative w-full md:gap-y-[10px] xl:gap-y-[10px] sm:gap-y-[10px] lg:gap-y-[12px] gap-y-[5px]">
            <p className="xl:text-[20px] md:text-[18px] lg:text-[20px] sm:text-[16px] text-[14px] font-[550]">Kirim Pesan Via Email</p>
            <p className="xl:text-[15px] md:text-[14px] lg:text-[14px] sm:text-[13px] text-[10px] font-[400] text-opacity-80">
              Kirim Pesan Ke Email Berikut:
            </p>
            <p className="xl:text-[19px] md:text-[17px] lg:text-[19px] sm:text-[17px] text-[12px] underline underline-offset-[2px] font-[450]">triandi.irone@yahoo.co.id</p>
            
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-center xl:w-[400px] md:w-[360px] lg:w-[400px] sm:w-[260px] w-[280px] text-start p-[20px] gap-y-[14px]"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="xl:size-[70px] size-[50px] p-[10px] w-full relative bottom-[10px] sm:bottom-[0px]">
            <Image src={logo_wa} alt="" objectFit="contain" layout="fill" />
          </div>
          <div className="text-start leading-[2] justify-center sm:gap-y-[10px] flex flex-col w-full sm:py-[10px]">
            <p className="xl:text-[20px] md:text-[18px] lg:text-[20px] sm:text-[16px] text-[14px] font-[550]">Kirim Pesan Via WhatsApp</p>
            <p className="xl:text-[15px] md:text-[14px] lg:text-[15px] sm:text-[13px] text-[12px] font-[400] text-opacity-80">
              Kirim Pesan Ke Nomor Berikut:
            </p>
            <p className="xl:text-[17px] md:text-[16px] lg:text-[17px] sm:text-[14px] text-[14px] font-[450]">+628 1863 2877 (Irwan Triandi)</p>
            <p className="text-opacity-60 text-center xl:text-[15px] md:text-[13px] lg:text-[15px] sm:text-[12px] text-[10px] text-black xl:mt-[20px] mt-[20px] sm:my-[10px]">
              Atau Klik Tombol Berikut
            </p>
            <div className=" w-full flex justify-center items-center">
              <div className="bg-[#4473C5] hover:text-black rounded-full flex xl:w-[190px] sm:w-[170px] md:w-[180px] md:h-[60px] lg:w-[190px] w-[150px] h-[40px] lg:h-[70px] xl:h-[70px] sm:h-[50px] text-white xl:text-[16px] md:text-[14px] lg:text-[16px] sm:text-[12px] text-[12px] font-[650] justify-center items-center">
                <Link href="https://api.whatsapp.com/send?phone=62818632877">Kirim Pesan</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactus;
