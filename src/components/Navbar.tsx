
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Logo className="h-12 w-auto" />
              <span className="ml-3 text-xl font-semibold text-mediacion-blue">
                Mediación Atacama
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link 
              to="/" 
              className="px-3 py-2 text-mediacion-blue hover:text-mediacion-green transition duration-150"
            >
              Inicio
            </Link>
            <Link 
              to="/sobre-nosotros" 
              className="px-3 py-2 text-mediacion-blue hover:text-mediacion-green transition duration-150"
            >
              Sobre Nosotros
            </Link>
            <Link 
              to="/servicios" 
              className="px-3 py-2 text-mediacion-blue hover:text-mediacion-green transition duration-150"
            >
              Servicios
            </Link>
            <Link 
              to="/cobertura" 
              className="px-3 py-2 text-mediacion-blue hover:text-mediacion-green transition duration-150"
            >
              Cobertura
            </Link>
            <Link to="/contacto">
              <Button className="ml-4 bg-mediacion-blue hover:bg-mediacion-lightBlue">
                Contáctanos
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-mediacion-blue hover:text-mediacion-green focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          <Link
            to="/"
            className="block px-3 py-2 text-mediacion-blue hover:bg-mediacion-beige rounded-md"
            onClick={closeMenu}
          >
            Inicio
          </Link>
          <Link
            to="/sobre-nosotros"
            className="block px-3 py-2 text-mediacion-blue hover:bg-mediacion-beige rounded-md"
            onClick={closeMenu}
          >
            Sobre Nosotros
          </Link>
          <Link
            to="/servicios"
            className="block px-3 py-2 text-mediacion-blue hover:bg-mediacion-beige rounded-md"
            onClick={closeMenu}
          >
            Servicios
          </Link>
          <Link
            to="/cobertura"
            className="block px-3 py-2 text-mediacion-blue hover:bg-mediacion-beige rounded-md"
            onClick={closeMenu}
          >
            Cobertura
          </Link>
          <Link
            to="/contacto"
            className="block px-3 py-2 bg-mediacion-blue text-white rounded-md"
            onClick={closeMenu}
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
