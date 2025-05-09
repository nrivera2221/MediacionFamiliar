import { Award, Heart, Shield, Smile } from "lucide-react";
import MediatorProfile from "@/components/MediatorProfile";

const AboutUs = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-mediacion-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conoce nuestra misión, valores y el equipo profesional detrás de
            Mediación Diego de Almagro.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-mediacion-blue mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Facilitar procesos de resolución de conflictos familiares de
                manera pacífica, profesional y efectiva, promoviendo el diálogo
                constructivo y acuerdos que beneficien a todas las partes
                involucradas, especialmente a los niños, niñas y adolescentes.
              </p>
              <p className="text-lg text-gray-700">
                Buscamos transformar conflictos en oportunidades para mejorar la
                comunicación y las relaciones familiares, aportando a la
                construcción de una sociedad más armónica y pacífica.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-mediacion-blue mb-6">
                Nuestra Visión
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Ser reconocidos como el referente en mediación familiar en la
                región de Atacama, destacando por la excelencia profesional, el
                enfoque centrado en las personas y la constante innovación en
                nuestros servicios.
              </p>
              <p className="text-lg text-gray-700">
                Aspiramos a contribuir a un cambio cultural en cómo las familias
                abordan sus conflictos, promoviendo la mediación como la primera
                opción para encontrar soluciones duraderas y satisfactorias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-mediacion-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mediacion-blue mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Estos principios guían nuestro trabajo diario y define nuestra
              forma de acompañar a las familias durante el proceso de mediación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-mediacion-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-mediacion-blue h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                Empatía
              </h3>
              <p className="text-gray-700">
                Nos ponemos en el lugar de cada persona para comprender sus
                necesidades, preocupaciones y emociones durante el proceso.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-mediacion-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-mediacion-blue h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                Neutralidad
              </h3>
              <p className="text-gray-700">
                Mantenemos una posición imparcial, sin favorecer a ninguna de
                las partes, para facilitar un proceso justo y equilibrado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-mediacion-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="text-mediacion-blue h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                Profesionalismo
              </h3>
              <p className="text-gray-700">
                Aplicamos técnicas y conocimientos avanzados en mediación,
                actualizándonos constantemente para ofrecer el mejor servicio.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-mediacion-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smile className="text-mediacion-blue h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                Confianza
              </h3>
              <p className="text-gray-700">
                Construimos relaciones basadas en la confianza, manteniendo la
                confidencialidad y el respeto en todo momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mediacion-blue mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Contamos con profesionales especializados en mediación familiar
              con amplia experiencia en resolución de conflictos.
            </p>
          </div>

          <MediatorProfile />
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-mediacion-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-mediacion-blue mb-6">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Mediación Diego de Almagro, nace a inicios del 2025 como
                respuesta a la necesidad de servicios de mediación familiar en
                breve plazo y de calidad en la comuna. Desde ese entonces, hemos
                acompañado a familiar en sus procesos de resolución de
                conflictos de forma pacífica.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                A lo largo de este tiempo, la cobertura se ha ampliado para
                llegar a más localidades de la comuna de Diego de Almagro,
                incorporando también servicios online para facilitar el acceso a
                la mediación.
              </p>
              <p className="text-lg text-gray-700">
                Nuestro compromiso con la excelencia y el servicio nos ha
                permitido ganar la confianza de las familias y establecernos
                como un referente en mediación familiar en la comuna.
              </p>
            </div>
            <div>
              <img
                src="/mediaciondda3.jpg"
                alt="Nuestra historia"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
