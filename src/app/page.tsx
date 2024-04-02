import { Metadata } from "next";
import Pagelayout from "@/components/Layouts/PageLayout";
import DemoSlider from "@/components/swiper/Silder";
import dataSilder from "./_data/silder-data.json";
import SilderPerView from "@/components/swiper/SilderPerView";
import "./style.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PLAYTO | Play Therapy",
  description: "Play Therapy การเล่นบำบัด",
};

export default function Home() {
  return (
    <>
      <Pagelayout>
        <DemoSlider data={dataSilder} />
        <div className="flex flex-col items-center justify-center gap-5 py-16">
          <h1 className="text-3xl">Book an Appointment</h1>
          <h3>สมารถเลือกบริการ วันและเวลาที่ต้องการนัดหมายได้เลยค่ะ</h3>
          <div className="flex w-full flex-col items-center gap-3 md:w-[120%]">
            <h1 className="text-2xl">เวลาเปิดทำการ</h1>
            <div className="flex w-full items-center justify-around rounded-xl border-[2px] border-slate-400 py-10">
              <div className="flex flex-col items-center gap-3">
                <h1 className="border-b-2 border-slate-400 pb-3">
                  Monday - Friday
                </h1>
                <h3>Closed</h3>
              </div>
              <div className="flex flex-col items-center gap-3">
                <h1 className="border-b-2 border-slate-400 pb-3">
                  Saturday - Sunday
                </h1>
                <h3>09:00 - 18:00</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
            <div className="mb-10 flex flex-col items-center justify-center text-xl md:text-3xl">
              <div>สำหรับเด็กอายุ 3-12 ปี</div>
              <div>ผู้ปกครองกรุณาทำแบบวัด SDQ</div>
            </div>
            <div className="flex h-[72px] w-full items-center justify-center rounded-xl bg-blue-400 text-3xl text-white md:w-[310px]">
              SDQ TEST
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 md:flex-row">
            <div className="flex h-[120px] w-full items-center justify-center gap-5 rounded-xl shadow-lg md:w-[300px]">
              <div className="border-back-2 flex h-[50px] w-[50px] items-center justify-center rounded-full border-2">
                ICON
              </div>
              <div>
                <h1>31/39 The Bangkok 61</h1>
                <h1>Klongtonnua Bkk</h1>
              </div>
            </div>
            <div className="flex h-[120px] w-full items-center justify-center gap-5 rounded-xl shadow-lg md:w-[300px]">
              <div className="border-back-2 flex h-[50px] w-[50px] items-center justify-center rounded-full border-2">
                ICON
              </div>
              <div>
                <h1>Tel.</h1>
                <h1>(+66) 81-820-7303</h1>
              </div>
            </div>
            <div className="flex h-[120px] w-full items-center justify-center gap-5 rounded-xl shadow-lg md:w-[300px]">
              <div className="border-back-2 flex h-[50px] w-[50px] items-center justify-center rounded-full border-2">
                ICON
              </div>
              <div>
                <h1>Add Friend</h1>
                <h1>@playto</h1>
              </div>
            </div>
            <div className="flex h-[120px] w-full items-center justify-center gap-5 rounded-xl shadow-lg md:w-[300px]">
              <div className="border-back-2 flex h-[50px] w-[50px] items-center justify-center rounded-full border-2">
                ICON
              </div>
              <div>
                <h1>Email:</h1>
                <h1>smartmomtoys@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="service-bg mt-10 flex flex-col items-center justify-center gap-5 py-10 text-slate-100 md:text-white">
          <h3 className="text-3xl">บริการของเรา</h3>
          <h1 className="flex items-center justify-center px-5 text-center md:px-25 md:text-xl">
            หลังจากคลุกคลีกับงานด้านการศึกษามาได้เจอคุณครูมาปรึกษาเกี่ยวกับปัญหาเรื่องพฤติกรรมของเด็ก
            การปรับตัวในโรงเรียน ครูพี่โบนัสจึงได้ศึกษาต่อด้าน Play Therapy
            หลักสูตรจากประเทศอังกฤษ เพื่อจะได้เข้าใจปัญหาได้อย่างมีประสิทธิภาพ
          </h1>
          <div className="block h-[300px] md:hidden">
            <SilderPerView perpage={1} />
          </div>
          <div className="hidden h-[250px] md:block">
            <SilderPerView perpage={3} />
          </div>
        </div>
        <div className="w-full px-5 py-5 md:px-25 md:py-25">
          <div className="flex justify-between">
            <h3 className="text-3xl">บทความน่าอ่าน</h3>
            <div className=" flex w-[100px] cursor-pointer items-center justify-center rounded-lg border-2 border-orange-500 text-orange-500 transition-all hover:bg-orange-500 hover:text-white">
              SEE ALL
            </div>
          </div>
          <div className="flex flex-col gap-10 pt-10 md:flex-row">
            <div className="h-[600px] shadow-md md:w-[500px]">
              <div>
                <Image
                  src={"/images/whatis.gif"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="whatis"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="px-5 pt-5">
                <h1 className="pb-5 text-2xl">
                  มาทำความรู้จักกับ Selective Mutism กัน
                </h1>
                <h3 className="pb-5">
                  เด็กๆ ที่พูดคุยได้ปกติที่บ้าน แต่ไม่ยอมพูดที่โรงเรียน
                  หรือเวลาต้องเจอกับสถานการณ์ใหม่ๆ แบบนี้เด็กๆ มีปัญหาอะไรนะ?
                  แล้วจะช่วยเด็กๆ ได้ยังไงบ้าง? Selective Mutism
                  เป็นอาการที่เด็กไม่พูดเมื่ออยู่ในสถานการณ์ที่เปลี่ยนไป
                  แต่เมื่ออยู่ที่บ้านหรือที่คุ้นเคยก็สามารถพูดจาได้ปกติ […]
                </h3>
              </div>
            </div>
            <div className="h-[600px] shadow-md md:w-[500px]">
              <div>
                <Image
                  src={"/images/whatis.gif"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="whatis"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="px-5 pt-5">
                <h1 className="pb-5 text-2xl">
                  มาทำความรู้จักกับ Selective Mutism กัน
                </h1>
                <h3 className="pb-5">
                  เด็กๆ ที่พูดคุยได้ปกติที่บ้าน แต่ไม่ยอมพูดที่โรงเรียน
                  หรือเวลาต้องเจอกับสถานการณ์ใหม่ๆ แบบนี้เด็กๆ มีปัญหาอะไรนะ?
                  แล้วจะช่วยเด็กๆ ได้ยังไงบ้าง? Selective Mutism
                  เป็นอาการที่เด็กไม่พูดเมื่ออยู่ในสถานการณ์ที่เปลี่ยนไป
                  แต่เมื่ออยู่ที่บ้านหรือที่คุ้นเคยก็สามารถพูดจาได้ปกติ […]
                </h3>
              </div>
            </div>
            <div className="h-[600px] shadow-md md:w-[500px]">
              <div>
                <Image
                  src={"/images/whatis.gif"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="whatis"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="px-5 pt-5">
                <h1 className="pb-5 text-2xl">
                  มาทำความรู้จักกับ Selective Mutism กัน
                </h1>
                <h3 className="pb-5">
                  เด็กๆ ที่พูดคุยได้ปกติที่บ้าน แต่ไม่ยอมพูดที่โรงเรียน
                  หรือเวลาต้องเจอกับสถานการณ์ใหม่ๆ แบบนี้เด็กๆ มีปัญหาอะไรนะ?
                  แล้วจะช่วยเด็กๆ ได้ยังไงบ้าง? Selective Mutism
                  เป็นอาการที่เด็กไม่พูดเมื่ออยู่ในสถานการณ์ที่เปลี่ยนไป
                  แต่เมื่ออยู่ที่บ้านหรือที่คุ้นเคยก็สามารถพูดจาได้ปกติ […]
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Pagelayout>
    </>
  );
}
