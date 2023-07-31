"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./components/sections/header/Header";
import Hero from "./components/sections/hero/Hero";

import CharacterSection from "./components/sections/characters/Characters";
import miPata from "../../public/images/new_frame.svg";

import Testimonials from "./components/sections/testimonials/Testimonials";
import FooterSection from "./components/sections/footer/Footer";
import LoadingMiPata from "./components/loadingMiPata/LoadingMiPata";

// export const inter = Nunito({ subsets: ["latin"] });

export default function Home() {
  const [loadingStatus, setLoadingStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingStatus(false);
    }, 2000);
  }, []);

  return (
    <main className="min-h-screen ">
      {loadingStatus ? (
        <LoadingMiPata />
      ) : (
        <div className="flex flex-col gap-10">
          <Hero />
          <CharacterSection />
          <div className=" md:h-[500px] h-[400px] w-full  md:px-24 px-4 hidden md:block">
            <Image
              src={miPata}
              alt="imagen de las aplicaciones"
              height={500}
              width={500}
              className="object-contain w-full h-full rounded-lg md:object-cover drop-shadow-2xl"
              priority={true}
            />
          </div>
          <Testimonials />
        </div>
      )}
    </main>
  );
}
