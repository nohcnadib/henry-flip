import { FaYoutube, FaSpotify, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactoHenryFlip() {
  return (
    <div className="flex items-center justify-center w-full gap-10 py-10 text-white">
      {/* YouTube principal */}
      <a
        href="https://www.youtube.com/@HenryFlipSL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube size={32} className="hover:text-red-700 shadow-red text-white hover:scale-110 transition-transform duration-300" />
      </a>

      {/* Spotify */}
      <a
        href="https://open.spotify.com/intl-es/artist/32vRdwVL8TnXdhn69YIMTg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSpotify size={32} className="hover:text-red-700 shadow-red text-white hover:scale-110 transition-transform duration-300" />
      </a>

      {/* YouTube - Tema */}
      <a
        href="https://www.youtube.com/channel/UC92aTey3K9yaei3C_msE3eQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube size={32} className="hover:text-red-700 shadow-red text-white hover:scale-110 transition-transform duration-300" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/henryflipsl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={32} style={{
          
        }} className="hover:text-red-700 shadow-red text-white hover:scale-110 transition-transform duration-300" />
      </a>

      {/* Correo */}
      <a href="mailto:henryflipsl@gmail.com">
        <FaEnvelope size={32} className="hover:text-red-700 shadow-red text-white hover:scale-110 transition-transform duration-300" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/5492664633417"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={32} className="hover:text-red-700 shadow-red text-white hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
}
