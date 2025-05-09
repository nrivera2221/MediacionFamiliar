import { ArrowRight, Check, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-mediacion-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ofrecemos servicios profesionales de mediación familiar, tanto
            presencial como online, para ayudarte a resolver conflictos de
            manera pacífica y efectiva.
          </p>
        </div>
      </section>

      {/* Familia Mediation Services */}
      <section id="familiar" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/mediaciondda4.jpg"
                  alt="Mediación familiar"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <div className="bg-mediacion-blue/10 p-3 rounded-full text-mediacion-blue mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-mediacion-blue">
                  Mediación Familiar
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                La mediación familiar es un proceso voluntario en el que las
                partes en conflicto buscan llegar a acuerdos mutuamente
                satisfactorios con la ayuda de un tercero imparcial, el
                mediador. Este proceso ofrece una alternativa al juicio
                tradicional, siendo más rápido, económico y menos desgastante
                emocionalmente.
              </p>

              <h3 className="text-xl font-semibold text-mediacion-blue mb-4">
                Nuestros servicios incluyen mediación en:
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cuidado personal de los hijos:</strong> Decisiones
                    sobre con quién vivirán los niños.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Relación directa y regular:</strong> Régimen de
                    visitas y comunicación con los hijos.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Alimentos:</strong> Acuerdos sobre pensión
                    alimenticia y manutención de los hijos.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Conflictos intergeneracionales:</strong> Problemas
                    entre padres e hijos o entre hermanos.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Mediación pre-divorcio:</strong> Resolución de
                    problemas que surgen después de la separación.
                  </span>
                </li>
              </ul>

              <Button
                asChild
                className="bg-mediacion-blue hover:bg-mediacion-lightBlue"
              >
                <Link to="/contacto">
                  Solicitar información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Online Mediation Services */}
      <section id="online" className="py-16 bg-mediacion-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/mediacionddabg2.jpg"
                  alt="Mediación online"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <div className="bg-mediacion-blue/10 p-3 rounded-full text-mediacion-blue mr-4">
                  <Video className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-mediacion-blue">
                  Mediación Online
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                Nuestra mediación online ofrece todas las ventajas de la
                mediación presencial, pero con la comodidad y flexibilidad de
                participar desde cualquier lugar. Utilizamos plataformas seguras
                y fáciles de usar para garantizar una experiencia de calidad.
              </p>

              <h3 className="text-xl font-semibold text-mediacion-blue mb-4">
                Beneficios de la mediación online:
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Accesibilidad:</strong> Participa desde cualquier
                    lugar, ideal para quienes viven lejos o tienen dificultades
                    para desplazarse.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Flexibilidad:</strong> Mayor facilidad para agendar
                    sesiones que se adapten a tu horario.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Comodidad:</strong> Participa desde un entorno
                    familiar y cómodo para ti.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Misma calidad:</strong> Mantenemos los mismos
                    estándares profesionales y éticos que en la mediación
                    presencial.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Seguridad:</strong> Utilizamos plataformas seguras
                    que protegen tu privacidad y confidencialidad.
                  </span>
                </li>
              </ul>

              <Button
                asChild
                className="bg-mediacion-blue hover:bg-mediacion-lightBlue"
              >
                <Link to="/contacto">
                  Agendar sesión online
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mediacion-blue mb-4">
              Proceso de Mediación
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Conoce las etapas del proceso de mediación y cómo trabajamos para
              ayudarte a encontrar soluciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-mediacion-beige p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-mediacion-blue text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-3 mt-2">
                Contacto Inicial
              </h3>
              <p className="text-gray-700">
                Nos contactas para exponer tu caso. Te explicamos el proceso,
                resolvemos dudas y agendamos la primera sesión.
              </p>
            </div>

            <div className="bg-mediacion-beige p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-mediacion-blue text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-3 mt-2">
                Sesiones de Mediación
              </h3>
              <p className="text-gray-700">
                Facilitamos el diálogo entre las partes para identificar
                intereses, necesidades y explorar opciones de acuerdo.
              </p>
            </div>

            <div className="bg-mediacion-beige p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-mediacion-blue text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-3 mt-2">
                Acuerdo y Cierre
              </h3>
              <p className="text-gray-700">
                Formalizamos los acuerdos alcanzados en un documento que puede
                ser homologado legalmente si las partes lo desean.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              El número de sesiones varía según la complejidad del caso y la
              disposición de las partes. En promedio, el proceso se completa en
              3 a 5 sesiones.
            </p>
            <Button
              asChild
              className="bg-mediacion-blue hover:bg-mediacion-lightBlue"
            >
              <Link to="/contacto">Iniciar proceso de mediación</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-mediacion-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mediacion-blue mb-4">
              Testimonios
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Lo que dicen nuestros clientes sobre nuestros servicios de
              mediación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg
                  className="text-mediacion-blue h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 2.075-2.075v-4.26a2.075 2.075 0 0 0-2.075-2.075h-6.852a2.075 2.075 0 0 0-2.075 2.075v4.26a2.075 2.075 0 0 0 2.075 2.075ZM17.927 13.18h-11.85a2.075 2.075 0 0 0-2.075 2.075v4.26a2.075 2.075 0 0 0 2.075 2.075h11.85a2.075 2.075 0 0 0 2.075-2.075v-4.26a2.075 2.075 0 0 0-2.075-2.075Z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4">
                "Estaba muy preocupada por iniciar un proceso de divorcio, pero
                la mediación me permitió resolver todo de manera pacífica. La
                mediadora fue imparcial y profesional en todo momento."
              </p>
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="font-semibold text-mediacion-blue">Ana R.</p>
                  <p className="text-sm text-gray-500">Copiapó</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg
                  className="text-mediacion-blue h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 2.075-2.075v-4.26a2.075 2.075 0 0 0-2.075-2.075h-6.852a2.075 2.075 0 0 0-2.075 2.075v4.26a2.075 2.075 0 0 0 2.075 2.075ZM17.927 13.18h-11.85a2.075 2.075 0 0 0-2.075 2.075v4.26a2.075 2.075 0 0 0 2.075-2.075h11.85a2.075 2.075 0 0 0 2.075-2.075v-4.26a2.075 2.075 0 0 0-2.075-2.075Z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4">
                "La mediación online fue perfecta para mí, ya que vivo en Diego
                de Almagro. Pude resolver los temas de cuidado personal de mi
                hijo sin necesidad de viajar constantemente."
              </p>
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="font-semibold text-mediacion-blue">Carlos M.</p>
                  <p className="text-sm text-gray-500">Diego de Almagro</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg
                  className="text-mediacion-blue h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 2.075-2.075v-4.26a2.075 2.075 0 0 0-2.075-2.075h-6.852a2.075 2.075 0 0 0-2.075 2.075v4.26a2.075 2.075 0 0 0 2.075 2.075ZM17.927 13.18h-11.85a2.075 2.075 0 0 0-2.075 2.075v4.26a2.075 2.075 0 0 0 2.075-2.075h11.85a2.075 2.075 0 0 0 2.075-2.075v-4.26a2.075 2.075 0 0 0-2.075-2.075Z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4">
                "Gracias a la mediación, pudimos llegar a acuerdos sobre la
                pensión alimenticia y las visitas de manera rápida y justa. El
                ambiente profesional y neutro hizo una gran diferencia."
              </p>
              <div className="flex items-center">
                <div className="mr-3">
                  <p className="font-semibold text-mediacion-blue">
                    Patricia L.
                  </p>
                  <p className="text-sm text-gray-500">El Salvador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mediacion-blue mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros servicios de
              mediación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                ¿Qué es la mediación familiar?
              </h3>
              <p className="text-gray-700 mb-6">
                Es un proceso de resolución de conflictos en el que un tercero
                imparcial, el mediador, ayuda a las partes a comunicarse y
                llegar a acuerdos mutuamente satisfactorios sobre temas
                familiares.
              </p>

              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                ¿Cuánto tiempo dura el proceso de mediación?
              </h3>
              <p className="text-gray-700 mb-6">
                El tiempo varía según la complejidad del caso y la disposición
                de las partes. En promedio, el proceso se completa en 3 a 5
                sesiones de 1.5 a 2 horas cada una.
              </p>

              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                ¿La mediación es legalmente vinculante?
              </h3>
              <p className="text-gray-700 mb-6">
                Los acuerdos alcanzados en mediación pueden formalizarse
                legalmente a través de su homologación judicial, lo que los
                convierte en vinculantes.
              </p>

              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                ¿Necesito un abogado durante la mediación?
              </h3>
              <p className="text-gray-700 mb-6">
                No es necesario, pero las partes pueden consultar con abogados
                antes, durante o después del proceso de mediación si así lo
                desean.
              </p>

              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                ¿Cómo funciona la mediación online?
              </h3>
              <p className="text-gray-700 mb-6">
                Utilizamos plataformas seguras de videoconferencia. Te
                enviaremos un enlace para conectarte a las sesiones programadas.
                Solo necesitas un dispositivo con conexión a internet.
              </p>

              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                ¿En qué momento se puede mediar?
              </h3>
              <p className="text-gray-700 mb-6">
                En cualquier momento antes de iniciar un proceso judicial,
                cuando ya se ha iniciado un proceso por la presentación de una
                demanda y durante la tramitación de un proceso se puede
                solicitar una mediación hasta 5 días hábiles antes de la
                audiencia de juicio.
              </p>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                ¿Si una parte solicita la mediación como hacer que la otra
                persona asista?
              </h3>
              <p className="text-gray-700 mb-6">
                Una vez que la parte interesada solicita la mediación, la
                mediadora invita a la otra parte telefónicamente, por correo
                electrónico y por carta certificada a realizar una mediación
                familiar, indicándole el motivo y los beneficios de la
                mediación.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                ¿Qué pasa si una de las partes no se presenta o no quiere
                mediar?
              </h3>
              <p className="text-gray-700 mb-6">
                En estos casos como la asistencia es voluntaria se da por
                frustrada la mediación y se emite un CERTIFICADO DE MEDIACION
                FRUSTRADA, que habilita al solicitante para continuar la
                tramitación ante un Tribunal de Familia, para lo cual requerirá
                un abogado/a.
              </p>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                ¿Cómo termina la mediación familiar?
              </h3>
              <p className="text-gray-700 mb-6">
                <ul>
                  <li>
                    La mediación puede terminar con acuerdo de las partes, sea
                    este total / parcial o sin acuerdo.
                  </li>
                  <li>
                    * Con acuerdo total o parcial: En este caso se elabora el
                    “Acta de Mediación” que debe ser leída y firmada por las
                    partes y mediador, quien entrega una copia a cada
                    participante y despacha el acuerdo al tribunal para su
                    aprobación. Sucedido esto último, el acta de mediación
                    adquiere el mismo valor que la sentencia dictada por un juez
                    en un juicio. El acuerdo puede haberse logrado en todos los
                    puntos planteados o puede haberse alcanzado sólo en parte de
                    ellos, debiendo el juez resolver los puntos pendientes al
                    continuar la tramitación de la causa en el tribunal.
                  </li>
                  <li>
                    * Sin acuerdo: Sea por la inasistencia injustificada de las
                    personas citadas a la primera sesión, por desequilibrio de
                    poderes entre los partes en conflicto, o por adquirir el
                    mediador la convicción de que no se llegará a acuerdo. En
                    este caso el/la mediador/a debe dar cuenta de esta
                    circunstancia, emitiendo un “Acta o Certificado de Mediación
                    Frustrada”.
                  </li>
                </ul>
              </p>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                ¿Se puede mediar cuando hay violencia intrafamiliar?{" "}
              </h3>
              <p className="text-gray-700 mb-6">
                En principio NO, pero en los casos de violencia no constitutiva
                de delitos, se pueden alcanzar acuerdos entre las partes sobre
                temas no vinculados con la violencia misma, como alimentos,
                cuidado personal, relación directa y regular. <br />
                Si existe alguna medida cautelar, como orden de alejamiento, el
                mediador emitirá el Certificado de Mediación Frustrada que
                habilita a las partes a iniciar las acciones judiciales.
              </p>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-3">
                ¿Pueden modificarse los acuerdos de mediación?{" "}
              </h3>
              <p className="text-gray-700 mb-6">
                Sí, cuando han cambiado las circunstancias que originaron un
                determinado Acuerdo. Por ejemplo entregar el Cuidado Personal
                del hijo al otro progenitor, Aumentar, Rebajar y hacer Cese de
                la Pensión de Alimentos, Modificar el Régimen de Relación
                Directa y Regular, etc . <br />
                Para hacer la modificación, se debe volver a mediar y se redacta
                una Nueva Acta de Mediación que deberá ser aprobada por el
                juzgado de familia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
