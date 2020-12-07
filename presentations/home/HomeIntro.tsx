import React from "react";
import { WindupChildren, Pace } from "windups";

export default function HomeIntro() {
  return (
    <div className="container mx-auto py-52">
      <div className="grid grid-cols-4 gap-4">
        <div className="px-10 col-span-3">
          <div className="w-2/3 mx-auto shadow-xl animate__animated animate__slideInLeft">
            <img src="/assets/images/dashboard.png" />
          </div>
        </div>
        <div>
          <div className="p-5 flex flex-col justify-center animate__animated animate__fadeInUp">
            <WindupChildren>
              <Pace ms={50}>
                <h1 className="text-3xl text-gray-800 font-black leading-normal text-center">
                  {"GOZO SELLER"}
                </h1>
                <span>{"Giải pháp số hoá quản lý mua bán đa nền tảng"}</span>
              </Pace>
            </WindupChildren>
            <button className="mt-20 rounded-full bg-blue-500 py-3 text-2xl text-white font-bold">
              Pre-register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
