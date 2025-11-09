import React, { useEffect, useRef, useState } from "react";

export default function YouTubeCD() {
  const videos = [
    "https://www.youtube.com/watch?v=1fy0cIBhBBE",
    "https://www.youtube.com/watch?v=yE6YxjHZZ0c",
    "https://www.youtube.com/watch?v=dmHZ-6dossI",
    "https://www.youtube.com/watch?v=i--QiUPcasg",
    "https://www.youtube.com/watch?v=Oftvw2pU7vo",
    "https://www.youtube.com/watch?v=NP4KcJ0c99Q",
  ];

  const [active, setActive] = useState<number | null>(null);
  const [apiReady, setApiReady] = useState(false);
  const playersRef = useRef<any[]>([]);

  // Cargar la API de YouTube solo una vez
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

  // Inicializar los players una vez que la API está lista
  useEffect(() => {
    if (!apiReady) return;

    videos.forEach((url, i) => {
      const videoId = url.split("v=")[1];
      playersRef.current[i] = new window.YT.Player(`yt-player-${i}`, {
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          fs: 0,
          playlist: videoId,
        },
        events: {
          onStateChange: (event: any) => {
            // Si el video terminó o fue pausado, quitamos la animación
            if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
              if (active === i) setActive(null);
            }
          },
        },
      });
    });
  }, [apiReady]);

  const handleClick = (index: number) => {
    const player = playersRef.current[index];
    console.log(player)
    if (!player) return;

    console.log(active)
    console.log(index)
    if (active === index) {
      player.pauseVideo();
      setActive(null);
      return;
    }

    // Pausar todos los demás
    playersRef.current.forEach((p, i) => {
      if (p && i !== index) p.pauseVideo();
    });

    player.playVideo();
    setActive(index);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-12 py-20">
      <div className="grid grid-cols-3 gap-12">
        {videos.map((url, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`relative overflow-hidden shadow-2xl border-4 border-gray-900 rounded-2xl cursor-pointer transition-transform duration-500 ${
              active === i ? "animate-spin-slow" : ""
            } rounded-full`}
            style={{
              width: "200px",
              height: "200px",
            }}
          >
            <div
              id={`yt-player-${i}`}
              className="absolute top-0 left-0 w-full h-full"
            ></div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
