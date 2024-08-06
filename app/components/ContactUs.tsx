import React from "react";
import Image from "next/image";
import logo_email from "../../public/logo_email.svg";
import logo_wa from "../../public/logo_wa.svg";
import Link from "next/link";

const contactus = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center py-[50px]">
      <p className="text-[40px] font-semibold text-center">
        Konsultasikan Kebutuhan Anda <br /> Dengan Kami
      </p>
      <div className="flex flex-row gap-[60px] py-[40px]">
      <div
          className="flex flex-col justify-start items-center w-[400px] text-start p-[20px] gap-y-[8px]"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="size-[70px] p-[10px] w-full relative bottom-[10px]">
            <Image src={logo_email} alt="" width={70} height={70} />
          </div>
          <div className="text-start leading-[2] justify-center flex flex-col w-full">
            <p className="text-[20px] font-[550]">Kirim Pesan Via Email</p>
            <p className="text-[15px] font-[400] text-opacity-80">
              Kirim Pesan Ke Email Berikut:
            </p>
            <p className="text-[17px] underline underline-offset-[2px] font-[450]">triandi.irone@yahoo.co.id</p>
            
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-center w-[400px] text-start p-[20px] gap-y-[8px]"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="size-[70px] p-[10px] w-full relative bottom-[10px]">
            <Image src={logo_wa} alt="" width={70} height={70} />
          </div>
          <div className="text-start leading-[2] justify-center flex flex-col w-full">
            <p className="text-[20px] font-[550]">Kirim Pesan Via WhatsApp</p>
            <p className="text-[15px] font-[400] text-opacity-80">
              Kirim Pesan Ke Nomor Berikut:
            </p>
            <p className="text-[17px] font-[450]">+628 1863 2877 (Irwan Triandi)</p>
            <p className="text-opacity-60 text-center text-[15px] text-black mt-[20px]">
              Atau Klik Tombol Berikut
            </p>
            <div className=" w-full flex justify-center items-center">
              <div className="bg-[#4473C5] hover:text-black rounded-full flex w-[170px] h-[50px] text-white text-[12px] font-[650] justify-center items-center">
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
