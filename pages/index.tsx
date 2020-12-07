import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import HomeTopicList from "../presentations/home/HomeTopicList";
import HomeIntro from "../presentations/home/HomeIntro";
import HomeNavbar from "../presentations/home/HomeNavbar";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Intro */}
      <HomeIntro />
      {/* End Intro */}
      {/* Navbar */}
      <HomeNavbar />
      {/* End Navbar */}
      <div className="mt-32">
        {/* Home Topics */}
        <HomeTopicList />
        {/* End Home Topics */}
      </div>
    </div>
  );
}
