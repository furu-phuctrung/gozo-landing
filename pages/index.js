import Image from "next/image";
import { useWindupString } from "windups";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { useEffect } from "react";

export default function Home() {
  const [text] = useWindupString("QUẢN LÝ MUA BÁN SỐ ĐA NỀN TẢNG", {
    pace: (char) => 75,
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Brand */}
      <div className="container mx-auto py-36">
        <div className="flex justify-between h-full pt-20">
          <div className="px-10 flex-grow">
            <div className="w-2/3 mx-auto shadow-xl animate__animated animate__slideInLeft">
              <img src="/assets/images/dashboard.png" />
            </div>
          </div>
          <div className="pt-5">
            <div className="w-56 rounded p-5 ring-8 ring-blue-100 mb-5 animate__animated animate__fadeIn">
              <h1 className="text-3xl text-gray-800 font-black leading-normal text-center">
                {text}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* End Brand */}
      <div className="flex h-20 border overflow-visible items-center justify-center sticky top-0 shadow">
        <div className="h-28 border flex flex-col justify-center bg-white shadow">
          <Image
            className="animate__animated animate__fadeInUp"
            src="/assets/images/gozo-logo.png"
            width={200}
            height={75}
          />
        </div>
      </div>
      <div className="mt-10 h-screen"></div>
    </div>
  );
}
