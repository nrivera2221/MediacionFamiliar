
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
              <Logo className="h-10 w-10 bg-white rounded-full" />
              <span className="ml-2 text-lg font-semibold">Mediación Atacama</span>
            </div>
            <p className="text-sm text-center md:text-left">
              Soluciones de mediación familiar profesional en la región de Atacama.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-white/80 hover:text-white transition">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-white/80 hover:text-white transition">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/cobertura" className="text-white/80 hover:text-white transition">
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
                <a href="tel:+56900000000" className="ml-2 text-white/80 hover:text-white transition">
                  +56 9 0000 0000
                </a>
              </li>
              <li className="flex items-center">
                <span>Email:</span>
                <a href="mailto:contacto@mediacionatacama.cl" className="ml-2 text-white/80 hover:text-white transition">
                  contacto@mediacionatacama.cl
                </a>
              </li>
              <li>
                <span>Horario:</span>
                <p className="text-white/80">Lun - Vie: 9:00 - 18:00</p>
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
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Mediación Atacama. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/60 mt-1">
            <a href="https://mediacionatacama.cl" className="hover:text-white transition">
              mediacionatacama.cl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
