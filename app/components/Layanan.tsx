import React from "react";
import Image from "next/image";
import konstruksi from "../../public/konstruksimesjid.jpg";
import interior from "../../public/interior.png";
import renovasi from "../../public/renovasirumah.png";
import perawatan from "../../public/maintenance.png";
import pemasaran from "../../public/perdaganganumum.jpg";
import infrastruktur from "../../public/infrastruktur.png";
import desainperencanaan from "../../public/desainperencanaan.png";

const WhyUs = () => {
  return (
    <div className="xl:py-[50px] lg:py-[40px] md:py-[30px] sm:py-[20px] py-[10px]">
      <div className="flex flex-col">
        <div className="flex flex-row sm:my-[-60px] md:my-[-70px] lg:my-[-80px] xl:my-[80px] xl:gap-x-[60px] lg:gap-x-[40px] mx-auto sm:gap-x-[20px] md:gap-x-[40px] gap-x-[10px] justify-center items-center">


          <div className="flex flex-col justify-center items-center xl:w-[420px] xl:h-[700px] lg:w-[250px] lg:h-[600px] md:w-[230px] md:h-[550px] sm:w-[210px] sm:h-[500px] w-[150px] h-[500px] ">
            <div className="relative xl:size-[400px] lg:size-[250px] md:size-[220px] sm:size-[200px] size-[150px]">
              <Image src={konstruksi} alt="" width={400} height={400} />
            </div>
            <p className="font-[700] xl:text-[40px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] py-[20px] text-start xl:w-[400px] lg:w-[250px] md:w-[230px] sm:w-[200px] w-[150px]">
              Konstruksi
            </p>
            <p className="xl:w-[400px] lg:w-[250px] md:w-[230px] sm:w-[200px] w-[150px] text-start xl:text-[20px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] lg:pb-[15px] font-[500] text-[#9F9F9F] text-opacity-85">
              Memberikan layanan pembangunan dengan pondasi yang kokoh,
              memberikan anda rasa aman.
            </p>
            <div className="bg-[#9F9F9F] bg-opacity-85 xl:w-[420px] sm:w-[200px] lg:w-[250px] xl:h-[5px] sm:h-[2px] lg:h-[3px] lg:mt-[30px] my-[20px] rounded-full" />
          </div>

          <div className="flex flex-col relative justify-center items-center xl:w-[420px] xl:h-[700px] lg:w-[250px] lg:h-[600px] md:w-[230px] md:h-[550px] sm:w-[210px] sm:h-[500px] w-[150px] h-[500px] top-[3px] sm:top-[-1px] xl:gap-y-[8px] ">
            <div className="relative xl:size-[400px] lg:size-[250px] md:size-[220px] sm:size-[200px] size-[150px] sm:top-[5px] ">
              <Image src={interior} alt="" width={400} height={400} />
            </div>
            <p className="font-[700] xl:text-[40px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] py-[20px] text-start xl:w-[400px] lg:w-[250px] md:w-[230px] sm:w-[200px] w-[150px]">
              Desain Interior
            </p>
            <p className="xl:w-[400px] lg:w-[250px] md:w-[230px] sm:w-[200px] w-[150px] text-start xl:text-[20px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] font-[500] text-[#9F9F9F] text-opacity-85 pb-[8px]">
              Membuat ruangan anda terasa nyaman serta menambahkan nilai
              estetika yang cocok dengan kriteria anda.
            </p>
            <div className="bg-[#9F9F9F] bg-opacity-85 xl:w-[420px] sm:w-[200px] lg:w-[250px] xl:h-[5px] lg:h-[3.5px] sm:h-[2px] lg:mb-[25px] mb-[20px] mt-[15px] rounded-full" />
          </div>

          <div className="flex flex-col relative justify-center items-center xl:w-[420px] xl:h-[700px] lg:w-[250px] lg:h-[600px] md:w-[230px] md:h-[550px] sm:w-[210px] sm:h-[500px] w-[150px] h-[500px] top-[-12px] sm:top-[0px]">
            <div className="relative xl:size-[400px] lg:size-[250px] md:size-[220px] sm:size-[200px] size-[150px] sm:top-[-10px]">
              <Image src={renovasi} alt="" layout="fill" objectFit="cover" />
            </div>
            <p className="font-[700] xl:text-[40px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] py-[20px] text-start xl:w-[400px] lg:w-[250px] md:w-[230px] sm:w-[200px] w-[150px]">
              Renovasi
            </p>
            <p className="xl:w-[400px] lg:w-[250px] md:w-[230px] sm:w-[200px] w-[150px] text-start xl:text-[20px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] sm:mb-[20px] font-[500] text-[#9F9F9F] text-opacity-85">
              Melakukan perubahan pada bagian fungsional atau estetika bangunan
              atau fasilitas umum.
            </p>
            <div className="bg-[#9F9F9F] bg-opacity-85 xl:w-[420px] lg:w-[250px] sm:w-[200px] xl:h-[5px] sm:h-[2.5px] lg:h-[3px] my-[20px] rounded-full" />
          </div>
        </div>


        <div className="flex flex-row sm:my-[100px] md:my-[-70px] lg:my-[-80px] xl:my-[-80px] xl:gap-x-[60px] lg:gap-x-[40px] relative top-[-100px] sm:top-[-80px] md:top-[70px] mx-auto sm:gap-x-[20px] md:gap-x-[40px] gap-x-[10px] justify-center items-center">
          <div className="flex flex-col relative justify-center items-center xl:w-[420px] xl:h-[650px] lg:w-[250px] lg:h-[600px] md:w-[230px] md:h-[550px] sm:w-[210px] sm:h-[500px] w-[150px] h-[500px] sm:gap-y-[10px] top-[-8px]">
            <div className="relative xl:size-[400px] lg:size-[250px] md:size-[220px] sm:size-[200px] size-[150px]">
              <Image src={perawatan} alt="" layout="fill" objectFit="cover" />
            </div>
            <p className="font-[700] xl:text-[40px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[20px] py-[20px] text-start xl:w-[400px] lg:w-[250px] md:w-[230px] sm:w-[200px] w-[150px]">
              Maintenance
            </p>
            <p className="xl:w-[400px] lg:w-[250px] md:w-[230px] sm:w-[200px] w-[150px] text-start xl:text-[20px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] font-[500] text-[#9F9F9F] text-opacity-85">
              Melakukan perbaikan dan merawat bangunan baik dari segi estetika
              maupun fungsi agar dapat dipergunakan kembali dengan baik dan
              normal.
            </p>
            <div className="bg-[#9F9F9F] bg-opacity-85 xl:w-[420px] sm:w-[200px] xl:h-[5px] lg:w-[250px] lg:h-[3px] sm:h-[2px] my-[20px] rounded-full" />
          </div>
          
          <div className="flex flex-col relative justify-center items-center xl:w-[420px] xl:h-[650px] lg:w-[250px] lg:h-[600px] md:w-[230px] md:h-[550px] sm:w-[210px] sm:h-[500px] w-[150px] h-[500px] top-[15px] sm:top-[-8px]">
            <div className="relative xl:size-[400px] lg:size-[250px] md:size-[220px] sm:size-[200px] size-[150px]">
              <Image src={pemasaran} alt="" layout="fill" objectFit="cover" />
            </div>
            <p className="font-[700] xl:text-[40px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[18px] py-[20px] text-start xl:w-[400px] lg:w-[250px] md:w-[230px] sm:w-[200px] w-[150px]">
              Perdagangan Umum
            </p>
            <p className="xl:w-[400px] lg:w-[250px] md:w-[230px] sm:w-[200px] w-[150px] text-start xl:text-[20px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] font-[500] text-[#9F9F9F] text-opacity-85">
              Melayani kebutuhan pelengkap bangunan atau interior, seperti
              pembuatan akrilik poster dinding, banner iklan, penyediaan
              kebutuhan kantor.
            </p>
            <div className="bg-[#9F9F9F] bg-opacity-85 xl:w-[420px] lg:w-[250px] sm:w-[200px] xl:h-[5px] lg:h-[3px] sm:h-[2px] my-[20px] rounded-full" />
          </div>

          <div className="flex flex-col justify-center items-center relative xl:w-[420px] xl:h-[650px] lg:w-[250px] lg:h-[600px] md:w-[230px] md:h-[550px] sm:w-[210px] sm:h-[500px] w-[150px] h-[500px] sm:top-[-8px] ">
            <div className="relative xl:size-[400px] lg:size-[250px] md:w-[220px] sm:size-[200px] size-[150px]">
              <Image
                src={infrastruktur}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="font-[700] xl:text-[35px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[18px] py-[20px] text-start xl:w-[400px] lg:w-[250px] md:w-[230px] sm:w-[200px] w-[150px] sm:mb-[35px] ">
              Infrastruktur
            </p>
            <p className="xl:w-[400px] lg:w-[250px] md:w-[230px] sm:w-[200px] w-[150px] text-start xl:text-[20px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] font-[500] text-[#9F9F9F] text-opacity-85">
              Pekerjaan yang meliputi bidang seperti pengerasan aspal atau
              beton. Baik perbaikan maupun pembuatan jalan baru sesuai keinginan
              anda.
            </p>
            <div className="bg-[#9F9F9F] bg-opacity-85 xl:w-[420px] lg:w-[250px] sm:w-[200px] lg:h-[3px] xl:h-[5px] sm:h-[2px] my-[20px] rounded-full" />
          </div>
        </div>


        <div className="flex flex-row justify-center items-center sm:mt-[10px] top-[-170px] sm:top-[-210px] md:top-[70px] xl:top-[0px] xl:mt-[170px] relative">  
          <div className="flex flex-col justify-center items-center xl:w-[420px] xl:h-[750px] lg:w-[250px] lg:h=[600px] md:w-[230px] md:h-[550px] sm:w-[210px] sm:h-[500px] w-[150px] h-[500px] relative sm:top-[-20px]  ">
            <div className="relative xl:w-[400px] xl:h-[400px] sm:size-[200px] lg:size-[250px] size-[150px] object-cover xl:mt-[50px]">
              <Image
                src={desainperencanaan}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="font-[700] xl:text-[35px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-[18px] py-[20px] text-start xl:w-[400px] lg:w-[250px] md:w-[230px] sm:w-[200px] w-[150px]">
              Desain dan perencanaan
            </p>
            <p className="xl:w-[400px] lg:w-[250px] md:w-[230px] sm:w-[200px] w-[150px] text-start xl:text-[20px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] font-[500] text-[#9F9F9F] text-opacity-85">
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
