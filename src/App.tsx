import logo from "./assets/logo.png";
import IntegrantesParallax from "./componentes/IntegrantesParallax";
import YouTubeCD from "./componentes/YouTubeCD";
import ContactoHenryFlip from "./componentes/ContactoHenryFlip";
import PlaylistHenryFlip from "./componentes/PlaylistHenryFlip";
import FechasHenryFlip from "./componentes/FechasHenryFlip";

function App() {
  return (
    <div className="min-h-screen text-white flex flex-col bg-black scroll-smooth">
      {/* Header fijo */}
      <header className="fixed top-0 left-0 w-full py-2 flex items-center justify-center gap-64 px-8 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
        {/* Sección izquierda */}
        <nav className="flex gap-6 text-sm uppercase tracking-widest font-chinese">
          <a href="#banda" className="hover:text-red-800 transition">
            Banda
          </a>
          <a href="#contacto" className="hover:text-red-800 transition">
            Contacto
          </a>
        </nav>

        {/* Logo centrado */}
        <div className="absolute left-1/2 -translate-x-1/2 top-2 z-50">
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
      <main className="flex flex-col items-center justify-start w-full mt-24 scroll-smooth">
        <section className="w-full h-screen">
          <IntegrantesParallax />
        </section>

        <section id="banda" className="w-full z-40 mt-[400px]">
          <YouTubeCD />
        </section>

        <section id="contacto" className="w-full" style={{marginTop: '-15rem', paddingTop: '15rem'}}>
          <ContactoHenryFlip />
        </section>

        <section className="w-full flex justify-center" id="lanzamientos" style={{marginTop: '-2.6rem', paddingTop: '5rem'}} >
          <PlaylistHenryFlip />
        </section>

        <section id="fechas" className="w-full flex justify-center">
          <FechasHenryFlip />
        </section>
      </main>

      {/* Estilo global para scroll suave */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

export default App;
