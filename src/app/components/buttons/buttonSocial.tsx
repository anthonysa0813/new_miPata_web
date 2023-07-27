import Image from "next/image";
import React from "react";
import appleLogo from "../../../../public/images/applepng.png";
import playStore from "../../../../public/images/playstorepng.png";
import Link from "next/link";

interface Prop {
  icon: string;
  title: string;
  title2: string;
  link: string;
}

export const logosSocials = {
  google: appleLogo,
  apple: playStore,
};

export const ButtonSocial = ({ icon, title, title2, link }: Prop) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-gray-950 flex text-white h-12 gap-2 rounded-lg px-3 py-1 max-w-[180px]"
    >
      <div className="flex items-center h-full">
        <Image
          src={icon === "playstore" ? playStore : appleLogo}
          alt={`Logo de ${icon}`}
          height={30}
          width={30}
        />
      </div>
      <div className="flex flex-col justify-center h-full">
        <p className="  p-0  text-start text-xs">{title}</p>
        <p className="  p-0 text-[20px] text-sm">{title2}</p>
      </div>
    </Link>
  );
};
