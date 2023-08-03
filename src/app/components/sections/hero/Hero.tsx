import Image from "next/image";
import app from "../../../../../public/images/herosvg.svg";
import miPata2 from "../../../../../public/images/phone-miPata.png";

import { ButtonSocial } from "../../buttons/buttonSocial";

export default function Hero() {
  return (
    <div className="dark:bg-zinc-900 mb-10">
      <div className="flex flex-col gap-3 px-4 py-8 lg:px-48 md:px-24 md:flex-row md:py-24">
        <div className="flex flex-col justify-center md:w-1/2">
          <h1 className="text-5xl text-orange-600 md:text-4xl lg:text-5xl xl:text-7xl">
            La comunidad más grande de mascotas y quienes las amamos
          </h1>
          <div className="flex items-center my-10 gap-2  mb-3 md:mb-0 md:pl-2 md:justify-start">
            <ButtonSocial
              icon="playstore"
              title="GET IT ON"
              title2="Google Play"
              link="https://play.google.com/store/apps/details?id=pe.mipata.mipata&hl=es"
            />
            <ButtonSocial
              icon="apple"
              title="Download on the"
              title2="App Store"
              link="https://apps.apple.com/pa/app/mi-pata-mascotas/id1534249237"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10 md:w-1/2">
          <Image
            src={miPata2}
            alt="imagen de la aplicación miPata"
            height={650}
            width={350}
            className="xxl:h-[580px]  drop-shadow-2xl phone"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
