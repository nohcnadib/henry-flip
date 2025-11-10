import { useEffect, useState } from "react";

import lucas from "../assets/lucas.png";
import amaru from "../assets/amaru.png";
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
    <div
      className="relative flex justify-center items-center bg-black w-full"
      style={{ height: "200vh" }}
    >
      {/* Contenedor principal (sin overflow) */}
      <div className="absolute top-0 h-[100vh] w-full">
        {/* Fila superior (3 imágenes) */}
        <div className="absolute h-screen w-full justify-center flex gap-12">
          <img
            src={emi}
            alt="Emi"
            className="absolute object-cover rounded-2xl shadow-lg mt-16"
            style={{
              width: "40%",
              marginTop: "-2rem",
              transform: `translate(-70%, ${scrollY * 0.2}px)`,
              filter: "hue-rotate(280deg) brightness(1.1)", // violeta
            }}
          />
          <img
            src={amaru}
            alt="Amaru"
            className="absolute object-cover rounded-2xl shadow-lg"
            style={{
              width: "50%",
              transform: `translate(0%, ${scrollY * 0.5}px)`,
              filter: "hue-rotate(0deg)", // rojo
            }}
          />
          <img
            src={gonza}
            alt="Gonza"
            className="absolute object-cover rounded-2xl shadow-lg"
            style={{
              width: "50%",
              marginTop: "-2rem",
              transform: `translate(45%, ${scrollY * 0.2}px)`,
              filter: "hue-rotate(120deg) brightness(1.2)", // verde brillante
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
              width: "45%",
              marginTop: "14rem",
              transform: `translate(-45%, ${scrollY * 0.3}px)`,
              filter: "hue-rotate(240deg)", // azul
            }}
          />
          <img
            src={fran}
            alt="Fran"
            className="absolute object-cover rounded-2xl shadow-lg z-10"
            style={{
              width: "40%",
              marginTop: "18rem",
              transform: `translate(45%, ${scrollY * 0.3}px)`,
              filter: "hue-rotate(60deg) brightness(1.3)", // amarillo brillante
            }}
          />
        </div>
      </div>
    </div>
  );
}
