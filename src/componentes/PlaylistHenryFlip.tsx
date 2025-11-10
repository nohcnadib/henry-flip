import { useState } from "react";

export default function PlaylistsHenryFlip() {
  const playlists = [
    {
      title: "Henry en VIVO",
      link: "https://www.youtube.com/playlist?list=PLJJufpN_mZ_V1uOZdj-v4ZViRDeHGJruO",
      songs: [
        { title: "La Tumba (Nov - 2022)", link: "https://www.youtube.com/watch?v=fLEfBJDnUuA" },
        { title: "El Club de los Retardados (Nov - 2022)", link: "https://www.youtube.com/watch?v=zhfMNegGPnQ" },
        { title: "Turbio Rio (Nov - 2022)", link: "https://www.youtube.com/watch?v=M00Dkw9m8kI" },
      ],
    },
    {
      title: "Nostalgia de Nada",
      link: "https://www.youtube.com/watch?v=v0Z_Yv0OV84&list=OLAK5uy_nJ2Raa0AzxccOFsVPoRE8bDGag3Fp2mS0",
      songs: [
        { title: "Nostalgia de Nada", link: "https://www.youtube.com/watch?v=v0Z_Yv0OV84" },
        { title: "Exilio", link: "https://www.youtube.com/watch?v=M59bT4OIG1o" },
        { title: "Turbio Rio / Todo Exceso", link: "https://www.youtube.com/watch?v=dmHZ-6dossI" },
        { title: "Club de los Retardados", link: "https://www.youtube.com/watch?v=VhJY_6VpXfg" },
        { title: "Felipe", link: "https://www.youtube.com/watch?v=Mz19uFNQyeo" },
        { title: "Mariano / Volví a Perder", link: "https://www.youtube.com/watch?v=7zVX_Dkq3Ac" },
        { title: "La Tumba", link: "https://www.youtube.com/watch?v=_OJo5BWqg64" },
        { title: "Me Tengo que Ir", link: "https://www.youtube.com/watch?v=NP4KcJ0c99Q" },
        { title: "Destruirlo Todo", link: "https://www.youtube.com/watch?v=HwuE7XY2E0Y" },
      ],
    },
    {
      title: "Singles",
      link: "https://www.youtube.com/watch?v=9Qn15KFOG5s&list=PLJJufpN_mZ_UZhD1UlsvtSktm9dSwg6jJ",
      songs: [
        { title: "Turbio Rio", link: "https://www.youtube.com/watch?v=9Qn15KFOG5s" },
        { title: "De Regreso a las Estrellas", link: "https://www.youtube.com/watch?v=b9yf0kXqVDQ" },
        { title: "Mariano / Volví a Perder", link: "https://www.youtube.com/watch?v=YtOTMJiW7og" },
        { title: "Todo Exceso", link: "https://www.youtube.com/watch?v=gmY_k6WZTXg" },
      ],
    },
  ];

  const getVideoId = (url: string) => {
    const match = url.match(/v=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="w-6/8 bg-black text-white py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {playlists.map((playlist, i) => {
          const [currentVideo, setCurrentVideo] = useState(playlist.songs[0].link);
          return (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl p-6 shadow-lg"
            >
              {/* Título */}
              <a
                href={playlist.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" font-bold mb-4 text-2xl hover:underline text-center"
              >
                {playlist.title}
              </a>

              {/* Video cuadrado */}
              <div className="relative w-full aspect-square mb-6">
                <iframe
                  src={`https://www.youtube.com/embed/${getVideoId(currentVideo)}`}
                  title={playlist.title}
                  allow="encrypted-media"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-xl"
                ></iframe>
              </div>

              {/* Lista de temas */}
              <div className="flex flex-col w-full gap-3">
                {playlist.songs.map((song, j) => (
                  <button
                    key={j}
                    onClick={() => setCurrentVideo(song.link)}
                    className={`w-full text-left px-4 py-2  transition-colors duration-200 hover:cursor-pointer ${
                      currentVideo === song.link
                        ? "bg-red-900 font-bold"
                        : " hover:bg-gray-800"
                    }`}
                  >
                    {song.title}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
