import { useEffect, useState } from "react";

import lucas from "../assets/lucas.png";
import amaru from "../assets/amaru2.png";
import emi from "../assets/emi.png";
import gonza from "../assets/gonza.png";
import fran from "../assets/fran.png";

export default function IntegrantesParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex justify-center items-center bg-black w-full" style={{ height: "200vh" }}>
      {/* Contenedor principal (sin overflow) */}
      <div className="absolute top-0 h-[100vh] w-full">
        {/* Fila superior (3 imágenes) */}
        <div className="absolute h-screen w-full justify-center gap-12">
          <img
            src={emi}
            alt="Emi"
            className="absolute object-cover rounded-2xl shadow-lg"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          />
          <img
            src={amaru}
            alt="Amaru"
            className="absolute object-cover rounded-2xl shadow-lg"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
          <img
            src={fran}
            alt="Fran"
            className="absolute object-cover rounded-2xl shadow-lg z-10"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
        </div>

        {/* Fila inferior (2 imágenes) */}
        <div className="absolute w-full flex justify-center gap-24">
          <img
            src={lucas}
            alt="Lucas"
            className="absolute object-cover rounded-2xl shadow-lg z-20"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
          <img
            src={gonza}
            alt="Gonza"
            className="absolute object-cover rounded-2xl shadow-lg"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
