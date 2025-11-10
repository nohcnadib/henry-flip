import React, { useEffect, useRef, useState } from "react";

export default function YouTubeCD() {
  const videos = [
    {
      link: "https://www.youtube.com/watch?v=i--QiUPcasg",
      text: "Henry Flip es una banda de **hard-rock** y **punk** oriunda de la Ciudad de San Luis, Argentina. Con influencias del **thrash** y el **metal**, buscan un sonido aplastante y exuberante.",
    },
    {
      link: "https://www.youtube.com/watch?v=Oftvw2pU7vo",
      text: "Con **canciones originales** compuestas por sus cinco integrantes: Francisco Grotz y Emiliano Godoy en guitarras, Gonzalo Pereyra en voz, Amaru Algarbe en batería y Lucas Bidanchón en bajo.",
    },
    {
      link: "https://www.youtube.com/watch?v=NP4KcJ0c99Q",
      text: "Inicia como tal el **9 de abril** del 2022 tras su debut en un concierto público. Luego de participar en varios recitales a nivel local y en diversas ciudades de la **región Cuyo**, deciden publicar su primer álbum **“Nostalgia de Nada”**.",
    },
    {
      link: "https://www.youtube.com/watch?v=1fy0cIBhBBE",
      text: "Este presenta algunas de sus primeras canciones, las cuales se caracterizan por hablar sobre la lucha contra la nostalgia y la búsqueda de un **futuro mejor**, sin miedo de **romper** lo establecido.",
    },
    {
      link: "https://www.youtube.com/watch?v=yE6YxjHZZ0c",
      text: "Actualmente, cuenta con una nueva formación que cambia ese primer sonido de la banda, con una propuesta que explora más en el **hard-rock** y en la **energía** volcada sobre los escenarios.",
    },
    {
      link: "https://www.youtube.com/watch?v=HwuE7XY2E0Y",
      text: "La proyección es editar un **segundo LP** próximamente con canciones **nuevas** que ya tocan ante las audiencias de sus conciertos.",
    },
  ];

  const [apiReady, setApiReady] = useState(false);
  const playersRef = useRef<any[]>([]);

  // Cargar API de YouTube solo una vez
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setApiReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      setApiReady(true);
    };
  }, []);

  // Crear los reproductores
  useEffect(() => {
    if (!apiReady) return;

    videos.forEach((v, i) => {
      const videoId = v.link.split("v=")[1];
      if (!videoId) return;

      if (!document.getElementById(`yt-player-${i}`)) return;

      playersRef.current[i] = new window.YT.Player(`yt-player-${i}`, {
        videoId,
        width: "320",
        height: "320",
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          fs: 0,
          playsinline: 1,
        },
      });
    });
  }, [apiReady, videos]);

  return (
    <div className="flex flex-col items-center w-full min-h-screen py-20 text-white relative">
      <div className=" gradient-red absolute z-10" style={{width: '600px', height: '600px', left: '10%', top: '15%'}}></div>
      <div className=" gradient-yellow absolute z-10" style={{width: '600px', height: '600px', left: '45%', top: '32%'}}></div>
      <div className=" gradient-blue absolute z-10" style={{width: '600px', height: '600px', left: '10%', top: '47%'}}></div>
      <div className=" gradient-orange absolute z-10" style={{width: '600px', height: '600px', left: '45%', top: '63%'}}></div>
      <div className=" gradient-violet absolute z-10" style={{width: '600px', height: '600px', left: '10%', top: '80%'}}></div>
      {videos.map((v, i) => {
        const isEven = i % 2 === 0;
        return (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center justify-center w-full my-16 px-8 gap-20 relative z-20 ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Video circular */}
            <div className="flex justify-center items-center">
              <div
                id={`yt-player-${i}`}
                className="w-[320px] h-[320px]  overflow-hidden shadow-2xl border-4 hover:border-red-900 border-gray-900 bg-gray-900 flex items-center justify-center"
              >
                {!apiReady && <p className="text-gray-400 text-center">Cargando...</p>}
              </div>
            </div>

            {/* Texto grande y en bold */}
            <div className="max-w-xl text-2xl font-bold leading-relaxed text-center md:text-left">
              <p className="uppercase italic text-justify">
                {v.text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    const innerText = part.slice(2, -2); // quitar los **
                    return (
                      <span key={i} className="text-red-600">
                        {innerText}
                      </span>
                    );
                  }
                  return part;
                })}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
