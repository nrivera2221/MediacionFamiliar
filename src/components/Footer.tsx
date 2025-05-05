import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-mediacion-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <img
                src="/public/logo.png"
                alt="Icono"
                className="h-12 w-12 mr-2"
              />
              <span className="ml-2 text-lg font-semibold">
                Mediación Diego de Almagro
              </span>
            </div>
            <p className="text-sm text-center md:text-left">
              Soluciones de mediación familiar profesional en la región de
              Atacama.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre-nosotros"
                  className="text-white/80 hover:text-white transition"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-white/80 hover:text-white transition"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/cobertura"
                  className="text-white/80 hover:text-white transition"
                >
                  Cobertura
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span>Teléfono:</span>
                <a
                  href="tel:+56957908074"
                  className="ml-2 text-white/80 hover:text-white transition"
                >
                  +56957908074
                </a>
              </li>
              <li className="flex items-center">
                <span>Email:</span>
                <a
                  href="mailto:contactofgallardo@mediaciondiegodealmagro.cl"
                  className="ml-2 text-white/80 hover:text-white transition"
                >
                  contactofgallardo@mediaciondiegodealmagro.cl
                </a>
              </li>
              <li>
                <span>Horario:</span>
                <p className="text-white/80">Lun - Vie: 8:30 - 17:30</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Mediación Diego de Almagro. Todos los
            derechos reservados.
          </p>
          <p className="text-xs text-white/60 mt-1">
            <a
              href="https://mediaciondiegodealmagro.cl"
              className="hover:text-white transition"
            >
              mediaciondiegodealmagro.cl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
