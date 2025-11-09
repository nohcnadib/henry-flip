import logo from "./assets/logo.png";
import IntegrantesParallax from "./componentes/IntegrantesParallax";
import YouTubeCD from "./componentes/YouTubeCD";

function App() {
  return (
    <div className="min-h-screen text-white flex flex-col bg-black">
      {/* Header fijo */}
      <header className="fixed top-0 left-0 w-full py-2 flex  items-center justify-center gap-64 px-8 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
        {/* Sección izquierda */}
        <nav className="flex gap-6 text-sm uppercase tracking-widest font-chinese">
          <a href="#banda" className="hover:text-red-800 transition">
            Banda
          </a>
          <a href="#contacto" className="hover:text-red-800 transition">
            Contacto
          </a>
        </nav>

        {/* Logo centrado (con overflow visible por arriba del header) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-6 z-50">
          <img
            src={logo}
            alt="Logo"
            className="h-30 w-auto select-none drop-shadow-lg"
          />
        </div>

        {/* Sección derecha */}
        <nav className="flex gap-6 text-sm uppercase tracking-widest ml-8">
          <a href="#lanzamientos" className="hover:text-red-800 transition">
            Lanzamientos
          </a>
          <a href="#fechas" className="hover:text-red-800 transition">
            Fechas
          </a>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="flex flex-col items-center justify-start w-full mt-24">
        <section className="w-full h-screen">
          <IntegrantesParallax />
        </section>

        <section className="w-full h-screen z-40" style={{marginTop: '400px'}}>
          <YouTubeCD />
        </section>
      </main>
    </div>
  );
}

export default App;
