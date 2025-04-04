
import { MapPin } from "lucide-react";
import MapComponent from "@/components/MapComponent";

const Coverage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-mediacion-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Cobertura Territorial</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Nuestros servicios de mediación familiar están disponibles en toda la provincia de Atacama, 
            tanto de forma presencial como online.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-mediacion-blue mb-6">Ámbito Territorial</h2>
              <p className="text-lg text-gray-700 mb-6">
                Ofrecemos servicios de mediación familiar en toda la provincia de Atacama, 
                con atención presencial en Copiapó y disponibilidad para desplazarnos a otras 
                localidades según las necesidades de nuestros clientes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Además, a través de nuestra modalidad de mediación online, podemos atender 
                a personas que se encuentren en cualquier parte de la región, sin necesidad 
                de desplazamientos.
              </p>
              
              <div className="bg-mediacion-beige p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-mediacion-blue mb-4">Cobertura de mediación presencial y online:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-mediacion-blue mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Copiapó</p>
                      <p className="text-sm text-gray-600">Atención presencial y online</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-mediacion-blue mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">El Salvador</p>
                      <p className="text-sm text-gray-600">Atención online y presencial programada</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-mediacion-blue mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Diego de Almagro</p>
                      <p className="text-sm text-gray-600">Atención online y presencial programada</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-mediacion-blue mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Inca de Oro</p>
                      <p className="text-sm text-gray-600">Atención online y presencial programada</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <MapComponent className="h-[500px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Online Accessibility */}
      <section className="py-16 bg-mediacion-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mediacion-blue mb-4">Accesibilidad Online</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nuestra plataforma de mediación online elimina las barreras geográficas, 
              permitiéndote acceder a servicios profesionales de mediación familiar 
              desde cualquier lugar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-mediacion-blue/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-mediacion-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-2">Cobertura total</h3>
              <p className="text-gray-700">
                Nuestros servicios online llegan a todos los rincones de la región de Atacama, 
                sin importar qué tan alejada sea tu ubicación.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-mediacion-blue/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-mediacion-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-2">Ahorro de tiempo</h3>
              <p className="text-gray-700">
                Evita desplazamientos y aprovecha mejor tu tiempo conectándote 
                desde donde te resulte más cómodo.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-mediacion-blue/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-mediacion-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-2">Seguridad</h3>
              <p className="text-gray-700">
                Utilizamos plataformas seguras que garantizan la privacidad y 
                confidencialidad de todas las sesiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In-person Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-mediacion-blue mb-8 text-center">Locaciones Presenciales</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-mediacion-beige/50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-mediacion-blue mb-4">Oficina Principal - Copiapó</h3>
              <p className="mb-2"><strong>Dirección:</strong> Calle Principal 123, Copiapó</p>
              <p className="mb-2"><strong>Horario:</strong> Lunes a Viernes de 9:00 a 18:00 hrs</p>
              <p className="mb-2"><strong>Teléfono:</strong> +56 9 0000 0000</p>
              <p className="mb-6"><strong>Email:</strong> contacto@mediacionatacama.cl</p>
              
              <div className="h-48 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55909.094436985905!2d-70.35990561436666!3d-27.366826294378428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969803ec0a75eb37%3A0xab147391066b0c98!2sCopiapo%2C%20Atacama%2C%20Chile!5e0!3m2!1sen!2sus!4v1617302437918!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Oficina Copiapó"
                ></iframe>
              </div>
            </div>
            
            <div className="bg-mediacion-beige/50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-mediacion-blue mb-4">Atención programada en otras localidades</h3>
              <p className="mb-4">
                Para tu comodidad, ofrecemos servicios de mediación presencial programada 
                en otras localidades de la provincia. Contáctanos para coordinar una cita:
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-mediacion-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">El Salvador</p>
                    <p className="text-sm text-gray-600">Visitas programadas dos veces al mes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-mediacion-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Diego de Almagro</p>
                    <p className="text-sm text-gray-600">Visitas programadas una vez al mes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-mediacion-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Inca de Oro</p>
                    <p className="text-sm text-gray-600">Visitas programadas previa coordinación</p>
                  </div>
                </li>
              </ul>
              
              <p className="bg-mediacion-blue/10 p-4 rounded-lg text-mediacion-blue font-medium">
                Recuerda que también puedes optar por nuestros servicios de mediación online, 
                disponibles para todas las localidades sin necesidad de desplazamientos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coverage;
