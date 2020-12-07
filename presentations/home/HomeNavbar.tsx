import Image from "next/image";

export default function HomeNavbar() {
  return (
    <div className="flex bg-white h-14 border overflow-visible items-center justify-center sticky top-0 shadow">
      <div className="h-28 border flex flex-col justify-center bg-white shadow">
        <Image
          className="animate__animated animate__fadeInUp"
          src="/assets/images/gozo-logo.png"
          width={200}
          height={75}
        />
      </div>
    </div>
  );
}
