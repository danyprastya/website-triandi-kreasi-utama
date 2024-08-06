import React from "react";
import Image from "next/image";
import konstruksi from "../../public/konstruksimesjid.jpg";
import interior from "../../public/interior.png";
import renovasi from "../../public/renovasirumah.png";
import perawatan from "../../public/maintenance.png";
import pemasaran from "../../public/perdaganganumum.jpg";
import infrastruktur from "../../public/infrastruktur.png";
import desainperencanaan from "../../public/desainperencanaan.png"

const WhyUs = () => {
  return (
    <div className="py-[50px]">
      <div className="flex flex-col">
        <div className="flex flex-row gap-x-[60px] justify-center items-center">
          <div className="flex flex-col justify-center items-center w-[420px] h-[700px]">
            <Image src={konstruksi} alt="" width={400} height={400} />
            <p className="font-[700] text-[40px] py-[20px] text-start w-[400px]">
              Konstruksi
            </p>
            <p className="w-[400px] text-start text-[20px] font-[500] text-[#9F9F9F] text-opacity-85">
              Memberikan layanan pembangunan dengan pondasi yang kokoh,
              memberikan anda rasa aman.
            </p>
            <div className="bg-[#9F9F9F] bg-opacity-85 w-[420px] h-[5px] my-[20px] rounded-full" />
          </div>
          <div className="flex flex-col justify-center items-center w-[420px] h-[700px]">
            <Image src={interior} alt="" width={400} height={400} />
            <p className="font-[700] text-[40px] py-[20px] text-start w-[400px]">
              Desain Interior
            </p>
            <p className="w-[400px] text-start text-[20px] font-[500] text-[#9F9F9F] text-opacity-85 pb-[8px] ">
              Membuat ruangan anda terasa nyaman serta menambahkan nilai
              estetika yang cocok dengan kriteria anda.
            </p>
            <div className="bg-[#9F9F9F] bg-opacity-85 w-[420px] h-[5px] mb-[20px] mt-[15px] rounded-full" />
          </div>
          <div className="flex flex-col justify-center items-center w-[420px] h-[700px]">
            <div className="relative w-[400px] h-[385px] object-cover">
              <Image src={renovasi} alt="" layout="fill" objectFit="cover" />
            </div>
            <p className="font-[700] text-[40px] py-[20px] text-start w-[400px]">
              Renovasi
            </p>
            <p className="w-[400px] text-start text-[20px] font-[500] text-[#9F9F9F] text-opacity-85">
              Melakukan perubahan pada bagian fungsional atau estetika bangunan
              atau fasilitas umum.
            </p>
            <div className="bg-[#9F9F9F] bg-opacity-85 w-[420px] h-[5px] my-[20px] rounded-full" />
          </div>
        </div>
        <div className="flex flex-row gap-x-[60px] justify-center items-center">
          <div className="flex flex-col justify-center items-center w-[420px] h-[650px] ">
            <div className="relative w-[400px] h-[385px] object-cover">
              <Image src={perawatan} alt="" layout="fill" objectFit="cover" />
            </div>
            <p className="font-[700] text-[40px] py-[20px] text-start w-[400px]">
              Maintenance
            </p>
            <p className="w-[400px] text-start text-[20px] font-[500] text-[#9F9F9F] text-opacity-85">
              Melakukan perbaikan dan merawat bangunan baik dari segi estetika
              maupun fungsi agar dapat dipergunakan kembali dengan baik dan
              normal
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[420px] h-[650px]">
            <div className="relative w-[400px] h-[385px] object-cover">
              <Image src={pemasaran} alt="" layout="fill" objectFit="cover" />
            </div>
            <p className="font-[700] text-[40px] py-[20px] text-start w-[400px]">
              Perdagangan Umum
            </p>
            <p className="w-[400px] text-start text-[20px] font-[500] text-[#9F9F9F] text-opacity-85">
              Melayani kebutuhan pelengkap bangunan atau interior, seperti
              pembuatan akrilik poster dinding, banner iklan, penyediaan
              kebutuhan kantor
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[420px] h-[650px] ">
            <div className="relative w-[400px] h-[385px] object-cover">
              <Image
                src={infrastruktur}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="font-[700] text-[35px] py-[20px] text-start w-[400px]">
              Infrastruktur
            </p>
            <p className="w-[400px] text-start text-[20px] font-[500] text-[#9F9F9F] text-opacity-85">
              Pekerjaan yang meliputi bidang seperti pengerasan aspal atau
              beton. Baik perbaikan maupun pembuatan jalan baru sesuai keinginan
              anda.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center w-[420px] h-[750px] ">
            <div className="bg-[#9F9F9F] bg-opacity-85 w-[420px] h-[5px] my-[20px] rounded-full" />
            <div className="relative w-[400px] h-[400px] object-cover mt-[50px]">
              <Image src={desainperencanaan} alt="" layout="fill" objectFit="cover" />
            </div>
            <p className="font-[700] text-[30px] py-[20px] text-start w-[400px]">
              Desain dan perencanaan
            </p>
            <p className="w-[400px] text-start text-[20px] font-[500] text-[#9F9F9F] text-opacity-85">
              Menciptakan desain yang estetis dan fungsional. Kami merancang
              konsep yang detail dan praktis dengan kualitas tinggi dalam setiap
              aspek
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
