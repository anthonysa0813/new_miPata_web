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
    <div className="md:px-24 px-4 h-[500px] ">
      <div className="flex items-center h-full rounded-lg bg-slate-100 bgvector">
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
        >
          <SwiperSlide>
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
                &ldquo;He estado usando esta app durante un tiempo y ha sido un
                gran recurso para el cuidado de mi gato. He recibido consejos de
                nutrición y cuidado de mascotas que realmente han mejorado su
                calidad de vida.&quot;
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                &ldquo;Mi perro se escapó de la casa y pensé que lo había
                perdido para siempre. Gracias a miPata, pude publicar su foto y
                ubicación en tiempo real, y alguien lo encontró y lo devolvió a
                casa sano y salvo.&quot;
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                &ldquo;Soy voluntario en un refugio de animales y la app ha sido
                muy útil para encontrar hogares para nuestros perros y gatos.
                Hemos recibido más solicitudes de adopción y encontrado más
                hogares para animales necesitados.&quot;
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
