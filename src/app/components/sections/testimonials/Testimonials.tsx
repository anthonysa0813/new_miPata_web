"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import {} from "swiper";
// Import Swiper styles
import "swiper/css";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import carla from "../../../../../public/images/carla.jpeg";
import gabriel from "../../../../../public/images/gabriel.jpeg";
import luis from "../../../../../public/images/luis.jpeg";
import { Gabriela } from "next/font/google";

export default function Testimonials() {
  return (
    <div className="md:px-24 px-4 h-[500px]  mb-10 dark:bg-zinc-900">
      <div className="flex items-center h-full rounded-lg bg-slate-100 dark:bg-zinc-800 bgvector">
        <Swiper
          effect="cards"
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          loop={true}
          modules={[EffectCards]}
          className=""
        >
          <SwiperSlide className="dark:bg-zinc-900">
            <div className="p-3 text-center ">
              <div className="flex justify-center">
                <Image
                  src={carla}
                  alt="foto de Carla"
                  height={60}
                  width={60}
                  className="object-cover rounded-full "
                />
              </div>
              <h1>Carla</h1>
              <p className="text-gray-400 ">
                &ldquo;Mi perro se escapó de la casa y gracias a miPata pude
                avisar a la comunidad inmediatamente. Felizmente alguien lo
                encontró, escaneó su QR y me llegó toda su información en tiempo
                real.&quot;
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="dark:bg-zinc-900">
            <div className="p-3 text-center">
              <div className="flex justify-center">
                <Image
                  src={gabriel}
                  alt="foto de gabriel"
                  height={60}
                  width={60}
                  className="object-cover rounded-full "
                />
              </div>
              <h1>Gabriel</h1>
              <p className="text-gray-400 ">
                &ldquo;He usado miPata por un tiempo y me he divertido y
                aprendido mucho. He recibido consejos de nutrición y cuidado de
                mascotas que realmente han mejorado la calidad de vida de mi
                gata. &quot;
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="dark:bg-zinc-900">
            <div className="p-3 text-center">
              <div className="flex justify-center">
                <Image
                  src={luis}
                  alt="foto de Luis"
                  height={60}
                  width={60}
                  className="object-cover rounded-full "
                />
              </div>
              <h1>Luis</h1>
              <p className="text-gray-400 ">
                &ldquo;Soy voluntario en un refugio de animales y miPata ha sido
                muy útil para encontrar casa para nuestros perros y gatos. Hemos
                conseguido adoptantes responsables de varios lugares del país y
                estamos súper contentos de poder seguir ayudando. &quot;
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
