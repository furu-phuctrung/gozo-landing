import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Pace, WindupChildren } from "windups";

export default function HomeIntro() {
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="px-10 lg:col-span-3">
          <div className="mx-auto shadow-xl animate__animated animate__slideInLeft">
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
                <span className="text-center">
                  {"Giải pháp số hoá quản lý mua bán đa nền tảng"}
                </span>
              </Pace>
            </WindupChildren>
            <div className="text-center">
              <button className="w-2/3 mt-20 rounded-full bg-blue-500 py-2 text-xl text-white font-bold">
                Pre-register
              </button>
            </div>
          </div>
        </div>
      </div>
      <span
        className="absolute text-3xl text-blue-400 animate-bounce"
        style={{
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </span>
    </div>
  );
}
