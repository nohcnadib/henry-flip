import { useEffect, useRef, useState } from "react";

import lucas from "../assets/lucas.png";
import amaru from "../assets/amaru.png";
import emi from "../assets/emi.png";
import gonza from "../assets/gonza.png";
import fran from "../assets/fran.png";

export default function IntegrantesParallaxArribaTransparente() {
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const div = scrollRef.current;
    if (!div) return;

    const handleScroll = () => setScrollY(div.scrollTop);
    div.addEventListener("scroll", handleScroll);
    return () => div.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex justify-center items-center bg-black w-full">
      {/* Contenedor scrolleable */}
      <div
        ref={scrollRef}
        className="sticky h-[100vh] overflow-auto w-full"
        style={{ marginLeft: "110px" }}
      >
        {/* Fila superior (3 imágenes) */}
        <div className="absolute h-screen w-full justify-center gap-12">
          <img
            src={emi}
            alt="Emi"
            className="absolute object-cover rounded-2xl shadow-lg"
            style={{
              transform: `translateY(${150 - scrollY * 0.2}px)`,
              opacity: Math.min(scrollY / 150, 1),
              transition: "transform 0.1s linear",
            }}
          />
          <img
            src={amaru}
            alt="Amaru"
            className="absolute object-cover rounded-2xl shadow-lg"
            style={{
              transform: `translateY(${200 - scrollY * 0.5}px)`,
              opacity: Math.min(scrollY / 200, 1),
              transition: "transform 0.1s linear",
            }}
          />
          <img
            src={fran}
            alt="Fran"
            className="absolute object-cover rounded-2xl shadow-lg"
            style={{
              transform: `translateY(${180 - scrollY * 0.6}px)`,
              opacity: Math.min(scrollY / 180, 1),
              transition: "transform 0.1s linear",
            }}
          />
        </div>

        {/* Fila inferior (2 imágenes) */}
        <div className="absolute w-full flex justify-center gap-24">
          <img
            src={lucas}
            alt="Lucas"
            className="absolute object-cover rounded-2xl shadow-lg"
            style={{
              transform: `translateY(${220 - scrollY * 0.3}px)`,
              opacity: Math.min(scrollY / 220, 1),
              transition: "transform 0.1s linear",
            }}
          />
          <img
            src={gonza}
            alt="Gonza"
            className="absolute object-cover rounded-2xl shadow-lg"
            style={{
              transform: `translateY(${250 - scrollY * 0.4}px)`,
              opacity: Math.min(scrollY / 250, 1),
              transition: "transform 0.1s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
