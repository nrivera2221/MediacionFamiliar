
import { Facebook, Instagram, Linkedin } from "lucide-react";

const MediatorProfile = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-mediacion-blue to-mediacion-lightBlue p-6 text-white">
        <h3 className="text-2xl font-bold">María González</h3>
        <p className="text-white/90">Mediadora Familiar Registrada</p>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mediadora Familiar" 
              className="w-full rounded-lg shadow-sm object-cover aspect-square"
            />
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <span className="font-medium w-32">Registro No:</span>
                <span>12345</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-medium w-32">Número de acta:</span>
                <span>A-789</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-medium w-32">Horario:</span>
                <span>Lun-Vie 9:00-18:00</span>
              </div>
              
              <div className="flex mt-4 space-x-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-mediacion-blue text-white p-2 rounded-full hover:bg-mediacion-lightBlue transition"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-mediacion-blue text-white p-2 rounded-full hover:bg-mediacion-lightBlue transition"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-mediacion-blue text-white p-2 rounded-full hover:bg-mediacion-lightBlue transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h4 className="text-xl font-semibold text-mediacion-blue mb-4">Perfil Profesional</h4>
            <p className="text-gray-700 mb-4">
              Mediadora familiar con más de 10 años de experiencia ayudando a familias a resolver conflictos 
              de manera pacífica y constructiva. Especializada en mediación de divorcios, custodia infantil y 
              conflictos familiares.
            </p>
            <p className="text-gray-700 mb-4">
              Mi enfoque se basa en la empatía, la neutralidad y el respeto a todas las partes involucradas, 
              con el objetivo de facilitar acuerdos duraderos que beneficien a todos los miembros de la familia, 
              especialmente a los niños.
            </p>
            
            <h4 className="text-lg font-semibold text-mediacion-blue mt-6 mb-3">Formación Académica</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Licenciada en Derecho - Universidad de Chile</li>
              <li>Máster en Mediación Familiar - Universidad Católica</li>
              <li>Diplomado en Resolución de Conflictos - Universidad Andrés Bello</li>
            </ul>
            
            <h4 className="text-lg font-semibold text-mediacion-blue mt-6 mb-3">Certificaciones</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Mediadora Familiar registrada en el Ministerio de Justicia</li>
              <li>Certificación en Técnicas de Comunicación No Violenta</li>
              <li>Especialista en Mediación con Enfoque en Derechos de Niños y Adolescentes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediatorProfile;
