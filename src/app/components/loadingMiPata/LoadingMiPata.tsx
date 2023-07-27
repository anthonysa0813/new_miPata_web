"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Loadingmipata.module.css";
import { gsap } from "gsap";

const LoadingMiPata = () => {
  const logo = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    gsap.from(logo.current, { scale: 0.1, opacity: 0 });

    // Utiliza GSAP para animar la escala y el desvanecimiento
    gsap.to(logo.current, { scale: 1, opacity: 1, duration: 1.5 });
  }, []);
  return (
    <div className={`${styles.container} bg-orange-500 z-50`}>
      <div className={styles.imageContainer} ref={logo}>
        <Image
          alt="Logo de miPata"
          src="/images/logoBlanco.png"
          width={80}
          height={80}
          className={`animate__animated animate__fadeIn img`}
        />
      </div>
    </div>
  );
};

export default LoadingMiPata;
