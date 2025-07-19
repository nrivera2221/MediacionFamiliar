import {
  ArrowRight,
  Users,
  Calendar,
  Video,
  MessageCircle,
  List,
  HandCoins,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import MediatorProfile from "@/components/MediatorProfile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils"; // si usas utilidades tailwind como cn()

const Index = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-mediacion-blue mb-4 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Mediación Familiar Profesional en Atacama
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-8">
              Soluciones pacíficas para conflictos familiares con atención
              presencial y online
            </p>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                "/mediacion1.jpg",
                "/mediacion2.jpg",
                "/mediacion3.jpg",
                "/mediacion4.jpg",
                "/mediacion5.jpg",
                "/mediacion6.jpg",
              ].map((src, i) => (
                <CarouselItem key={i} className="p-1">
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={src}
                      alt={`Mediación familiar ${i + 1}`}
                      className="w-full h-96 object-cover object-center transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />

            <div className="absolute inset-0 bg-gradient-to-t to-transparent flex items-end justify-center p-8">
              <div className="text-center mb-8 absolute top-1/2">
                <h3 className=" text-3xl md:text-2xl font-light max-w-3xl mx-auto mb-8 text-white font-bold text-gray-700">
                  MEDIACIÓN EN DIEGO DE ALMAGRO
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white text-mediacion-blue hover:bg-mediacion-beige hover:text-mediacion-blue"
                >
                  <Link to="/contacto" className="font-bold text-lg">
                    Agenda una consulta
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white text-mediacion-blue hover:bg-mediacion-beige hover:text-mediacion-blue"
                >
                  <Link to="/servicios" className="font-bold text-lg">
                    Conoce nuestros servicios
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      <section className="py-16 bg-mediacion-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mediacion-blue mb-4">
              ¡Transforma el conflicto en acuerdo!
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Atrévete a verlo desde otro camino, directo hacia la solución
              centrada en tus hijos. ¡Basta de desgaste! Evita juicios y
              transforma el conflicto en acuerdos reales. Sabes que el conflicto
              constante no los lleva a ninguna parte, solo agota y daña las
              relaciones importantes. Si están listos para dejar atrás la lucha
              y empezar a construir soluciones reales y prácticas para su
              familia (pensando en ustedes y, claro, en sus hijos), la Mediación
              Familiar es la respuesta.
            </p>

            <h3 className="text-xl font-bold text-mediacion-blue mb-6">
              ¿Listo/a para cerrar ese capítulo de lucha por visitas o
              alimento?. Toma la decisión hoy.
            </h3>
            <h1 className="text-xl font-bold text-mediacion-blue mb-4">
              ¡Contáctanos hoy!
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-mediacion-blue hover:bg-mediacion-beige hover:text-mediacion-blue"
              >
                <Link to="/contacto" className="font-bold text-lg">
                  Agenda una consulta
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-1 bg-mediacion-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-mediacion-blue mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              La Mediación Familiar es un sistema de resolución de conflictos en
              el que un tercero imparcial, llamado Mediador, ayuda a las partes
              a buscar por sí mismas una solución al conflicto y sus efectos
              mediante acuerdos. El mediador los ayuda a obtener una solución
              que surja de ellos mismos, a través de sesiones realizadas fuera
              del tribunal, en un ambiente que favorece el entendimiento.
              <ul>
                <li>
                  La Mediación Familiar Privada, realizará una atención de
                  manera particular, en las siguientes materias de mediación
                  previa y obligatoria:
                </li>
              </ul>
            </p>
          </div>

          <h2 className="text-xl font-bold text-mediacion-blue mb-4">
            NUESTROS SERVICIOS
          </h2>
          <div className="container mx-auto px-4">
            <div className="flex justify-between text-sm sm:text-base">
              <p className="w-1/3 text-center font-bold text-mediacion-blue mb-4">
                Mediación obligatoria Ley No 19.968
              </p>
              <p className="w-1/3 text-center font-bold text-mediacion-blue mb-4">
                Mediación voluntaria
              </p>
              <p className="w-1/3 text-center font-bold text-mediacion-blue mb-4">
                Informes para beneficios
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
            <ServiceCard
              title="Pensión de Alimentos"
              description="Solicitud de Alimentos.
                Cese de Alimentos.
                Rebaja de Alimentos.
                Aumentos de Alimentos."
              icon={<HandCoins className="h-6 w-6" />}
              buttonLink="/servicios#alimentos"
            />

            <ServiceCard
              title="Mediación deuda de alimentos"
              description="Eliminación registro deudores de alimentos."
              icon={<Users className="h-6 w-6" />}
              buttonLink="/servicios#deuda"
            />

            <ServiceCard
              title="Informes Social/Económico"
              description="Realizamos informes sociales/económicos para postulación a becas y acreditación. Para enseñanza media y superior."
              icon={<Users className="h-6 w-6" />}
              buttonLink="/servicios#formularios"
            />
            <ServiceCard
              title="Cuidado personal"
              description="Solicitud de Cuidado Personal del Niño, Niña o
                adolescente.
                Modificación del Cuidado
                Personal."
              icon={<Users className="h-6 w-6" />}
              buttonLink="/servicios#cuidado"
            />
            <ServiceCard
              title="Compensación económica"
              description="Declaración bienes familiares."
              icon={<Video className="h-6 w-6" />}
              buttonLink="/servicios#compensacion"
            />

            <ServiceCard
              title="Informe Social"
              description="Informes sociales para beneficios habitacionales y salud."
              icon={<Calendar className="h-6 w-6" />}
              buttonText="Agendar ahora"
              buttonLink="/servicios#beneficios"
            />
            <ServiceCard
              title="Relación Directa y Regular"
              description="Solicitud de Relación Directa y Regular (visitas).
                Modificación de Relación
                Directa y Regular (visitas)."
              icon={<Users className="h-6 w-6" />}
              buttonLink="/servicios#relacion"
            />
            <ServiceCard
              title="Autorización"
              description="Permiso de salida del país de NNA."
              icon={<Video className="h-6 w-6" />}
              buttonLink="/servicios#voluntaria"
            />
            <ServiceCard
              title="Agenda tu Cita"
              description="Programa una sesión de mediación en horarios flexibles de acuerdo a tu disponibilidad."
              icon={<Calendar className="h-6 w-6" />}
              buttonText="Agendar ahora"
              buttonLink="/contacto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Online Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="/mediacionddabg.jpg"
                alt="Mediación online"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-mediacion-blue mb-6">
                ¿Por qué optar por servicios online?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 bg-mediacion-green/20 p-1 rounded-full text-mediacion-green">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Comodidad y flexibilidad
                    </h3>
                    <p className="text-gray-700">
                      Participa desde cualquier lugar, evitando desplazamientos
                      y ahorrando tiempo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 bg-mediacion-green/20 p-1 rounded-full text-mediacion-green">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Mismo servicio profesional
                    </h3>
                    <p className="text-gray-700">
                      Mantenemos la misma calidad y estándares que en nuestras
                      sesiones presenciales.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 bg-mediacion-green/20 p-1 rounded-full text-mediacion-green">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Mayor accesibilidad
                    </h3>
                    <p className="text-gray-700">
                      Ideal para quienes viven en zonas alejadas o tienen
                      dificultades de movilidad.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 bg-mediacion-green/20 p-1 rounded-full text-mediacion-green">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Ambiente personalizado
                    </h3>
                    <p className="text-gray-700">
                      Participa desde un entorno donde te sientas cómodo y
                      seguro.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-mediacion-blue hover:bg-mediacion-lightBlue"
                >
                  <Link to="/contacto">
                    Consulta por sesiones online
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mediator Profile */}
      <section className="py-16 bg-mediacion-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mediacion-blue mb-4">
              Nuestra Mediadora
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Conoce a la profesional que te acompañará en el proceso de
              mediación
            </p>
          </div>

          <MediatorProfile />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-mediacion-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para resolver tu situación?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contáctanos hoy para comenzar el proceso de mediación y encontrar
            soluciones pacíficas a tus conflictos familiares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-mediacion-blue hover:bg-mediacion-beige hover:text-mediacion-blue"
            >
              <Link to="/contacto">
                Agenda una consulta
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-mediacion-blue hover:bg-mediacion-beige hover:text-mediacion-blue"
            >
              <a
                href="https://wa.me/56957908074?text=Hola%2C%20quiero%20consultar%20sobre%20servicios%20de%20mediaci%C3%B3n%20familiar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contáctanos por WhatsApp
                <MessageCircle className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
