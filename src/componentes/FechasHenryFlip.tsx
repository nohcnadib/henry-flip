export default function FechasHenryFlip() {
  const fechas = [
    { fecha: "20 NOV 2025", lugar: "La Crypta (Ex Panacea)", direccion: "Av España 677 - San Luis - San Luis" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full py-16  text-white relative">
      <div className=" gradient-green absolute z-10" style={{width: '600px', height: '600px', left: '45%'}}></div>
      <div className="w-full max-w-4xl flex flex-col divide-y divide-gray-700 z-20">
        <div className="text-3xl text-center font-bold">
            PRÓXIMAS FECHAS
        </div>
        {fechas.map((show, i) => (
          <div
            key={i}
            className="flex justify-between items-center w-full py-6 px-4 sm:px-8"
          >
            {/* Fecha */}
            <div className="text-3xl italic font-semibold text-gray-300">
              {show.fecha}
            </div>

            {/* Lugar y dirección */}
            <div className="text-right">
              <div className="text-3xl font-bold text-white uppercase italic">
                {show.lugar}
              </div>
              <div className="text-lg text-gray-400">{show.direccion}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
