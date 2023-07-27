"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../../public/images/logo.png";
import { isMacOs, isIOS, osName } from "react-device-detect";
import Link from "next/link";

export default function Header() {
  const [currentSys, setcurrentSys] = useState(true);
  useEffect(() => {
    if (osName === "Windows" || osName === "Android") {
      setcurrentSys(true);
    } else if (isMacOs || isIOS) {
      setcurrentSys(false);
    }
  }, []);

  return (
    <div className="h-[80px] shadow-lg bg-white lg:px-24 px-4 sticky top-0 z-40 ">
      <div className="flex items-center justify-between h-full ">
        <Link href="/" className="">
          <Image src={logo} alt="Logo de miPata" height={50} width={50} />
        </Link>
        <div className="flex items-center h-full transition-all ease-in cursor-pointer text-blue-950 hover:bg-orange-600 hover:text-white hover:px-2">
          <Link
            href={
              currentSys
                ? "https://play.google.com/store/apps/details?id=pe.mipata.mipata&hl=es"
                : "https://apps.apple.com/pa/app/mi-pata-mascotas/id1534249237"
            }
            target="_blank"
            className="flex items-center justify-center h-full text-2xl"
          >
            Descargar App
          </Link>
        </div>
      </div>
    </div>
  );
}
