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

      {/* Familia Mediation Services */}
      <section id="alimentos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <div className="bg-mediacion-blue/10 p-3 rounded-full text-mediacion-blue mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-mediacion-blue">
                  Mediación familiar sobre alimentos
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                En Mediación Familiar Diego de Almagro nos especializamos en la
                resolución de conflictos relacionados con derechos de alimentos,
                a través de un enfoque profesional, humano y centrado en el
                diálogo colaborativo. Nuestro objetivo es ayudarle a alcanzar
                acuerdos justos y duraderos, siempre bajo la imparcialidad y
                neutralidad de nuestros mediadores.
              </p>

              <h3 className="text-xl font-semibold text-mediacion-blue mb-4">
                ¿Qué son los derechos de alimentos?
              </h3>
              <p>
                Corresponde a la obligación legal de garantizar todo lo
                necesario para el bienestar de los niños, niñas y adolescentes.
                Esto incluye no solo alimentación, sino también vestimenta,
                educación, salud, recreación, entre otros aspectos esenciales
                para su desarrollo integral.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      Si es hermano o hijo mayor de 21 años del alimentario
                      (demandado/a),
                    </strong>
                    podrían demandar hasta los 28 años mientras se encuentran
                    estudiando a nivel de enseñanza superior; o, que padezcan
                    alguna incapacidad física o mental.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Si es cónyuge,</strong> y, además, de la
                    imposibilidad de cubrir por sí mismo sus necesidades o
                    existencia de incapacidad física o mental que impida
                    subsistir total o parcialmente por sí mismo.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      ¿Qué podemos acordar en una mediación por alimentos?
                    </strong>{" "}
                    ¿Qué podemos acordar en una mediación por alimentos?
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong> Alimentos ordinarios</strong> Cuando son niños,
                    niñas y adolescente, les corresponde una mensualidad
                    destinada a cubrir las necesidades básicas como
                    alimentación, educación, salud, recreación.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Alimentos extraordinarios</strong> Se refieren a
                    gastos imprevistos, como urgencias médicas u
                    hospitalizaciones. Generalmente, se acuerda que estos gastos
                    se compartirán en partes iguales (50/50) entre ambos padres,
                    previa presentación de las boletas o comprobantes.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cuota especial de marzo</strong> ¡Sabemos que marzo
                    puede ser un mes complejo para las familias! Matrículas,
                    útiles escolares, uniformes... En mediación, puedes pactar
                    una cuota especial para hacer frente a estos gastos
                    escolares, ya sea como un monto adicional a la pensión
                    habitual o dividiendo los costos entre ambos padres.
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
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/mediaciondda4.jpg"
                  alt="Mediación familiar"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Familia Mediation Services */}
      <section id="relacion" className="py-16 bg-white">
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
                  Mediación Familiar sobre relación directa y regular
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                En Mediación Familiar Diego de Almagro podemos ayudar a resolver
                disputas sobre la relación directa y regular con los hijos,
                permitiendo que los progenitores acuerden cómo se mantendrá el
                contacto con los hijos. Este proceso, que es obligatorio en
                algunos casos, facilita la comunicación y busca un acuerdo que
                beneficie a los niños, niñas y adolescentes.
              </p>

              <h3 className="text-xl font-semibold text-mediacion-blue mb-4">
                ¿Qué es la relación directa y regular?
              </h3>
              <p>
                La relación directa y regular, también conocida como visitas, es
                un derecho y un deber de los padres que no tienen el cuidado
                personal de sus hijos, para mantener un contacto constante y
                estable con ellos. Este contacto busca que los hijos e hijas
                mantengan vínculos con ambos padres, promoviendo una relación
                sana y cercana.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      ¿Quién puede solicitar un régimen de visitas?
                    </strong>
                    En Chile, el régimen de visitas —también denominado régimen
                    de relación directa y regular— tiene como objetivo
                    garantizar que los niños, niñas y adolescentes mantengan
                    vínculos afectivos con sus familiares, incluso cuando no
                    conviven con ellos.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Pueden solicitar este régimen:</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      El progenitor que no tiene el cuidado personal del menor.
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      Los abuelos y otros familiares cercanos, como hermanos y
                      hermanas.
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    En la Mediación Familiar Diego de Almagro, ofrecemos un
                    servicio especializado para establecer y regular este
                    derecho, estando comprometido en ayudar a encontrar
                    soluciones pacíficas, equitativas y centradas en el
                    bienestar de los niños, niñas y adolescentes, fomentando
                    relaciones saludables dentro del núcleo familiar.
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

      {/* Familia Mediation Services */}
      <section id="cuidado" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <div className="bg-mediacion-blue/10 p-3 rounded-full text-mediacion-blue mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-mediacion-blue">
                  Mediación familiar sobrecuidado personal (Tuición)
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                En Mediación Familiar Diego de Almagro ofrecemos un espacio para
                que ambos padres lleguen a un acuerdo en la crianza, educación y
                cuidado su hijo o hija menor de edad, teniendo en consideración
                primordial el interés superior del niño, niña o adolescente.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                El cuidado personal lo puede ejercer ambos o solo uno de los
                padres; en caso de inhabilidad del padre o de la madre, lo puede
                ejercer un tercero (otro familiar).
              </p>
              <p className="text-xl font-semibold mb-4">
                <strong>
                  ¿Cuáles son los criterios a considerar para mediar el cuidado
                  personal?
                </strong>
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      a. El vínculo afectivo existente entre el hijo o hija y su
                      padre o madre, así como con las demás personas de su
                      entorno familiar.
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      b. La capacidad de cada uno de los padres para asegurar el
                      bienestar del hijo o hija y brindarle un entorno adecuado,
                      acorde a su edad.
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      c.La contribución económica realizada por cada progenitor
                      para el sustento del hijo o hija mientras estuvo bajo el
                      cuidado personal del otro, en caso de haber tenido la
                      posibilidad de hacerlo.
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      d. La disposición de cada progenitor para cooperar con el
                      otro, con el objetivo de garantizar la mayor estabilidad
                      posible al hijo o hija y facilitar una relación directa y
                      regular con ambos.
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      e. La dedicación que cada uno brindaba al hijo o hija
                      antes de la separación y, especialmente, la que puede
                      continuar ofreciendo de acuerdo con sus circunstancias
                      actuales.
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      f. La opinión manifestada por el hijo o hija.
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      i. El lugar de residencia de cada uno de los progenitores.
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      j. Cualquier otro antecedente que sea relevante atendido
                      el interés superior del hijo o hija.
                    </strong>
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
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/mediaciondda4.jpg"
                  alt="Mediación familiar"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Familia Mediation Services */}
      <section id="deuda" className="py-16 bg-white">
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
                  Mediación Familiar voluntaria sobre deuda de alimentos y
                  eliminación de deuda en registro nacional de deudores de
                  alimentos.
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                En Mediación Familiar Diego de Almagro también mediamos otros
                tipos de casos, como la deuda de alimentos y la eliminación del
                Registro Nacional de Deudores de Pensiones de Alimentos, si bien
                son dos procesos distintos, están relacionados con el
                cumplimiento de la obligación alimentaria.
              </p>

              <h3 className="text-xl font-semibold  mb-4">
                ¿Qué es el Registro Nacional de Deudores de Pensiones de
                Alimentos?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Este registro, administrado por el Servicio de Registro Civil e
                Identificación, incluye a personas que además de tres
                mensualidades consecutivas o cinco discontinuas de alimentos no
                pagados, exista, una resolución judicial que lo ordene. La
                inscripción se realiza mensualmente por orden del tribunal de
                familia correspondiente.
              </p>
              <h3 className="text-xl font-semibold  mb-4">
                Consecuencias de estar inscrito en el registro
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Retención de fondos:</strong> Se pueden retener
                    devoluciones de impuestos, fondos de créditos y otros
                    recursos financieros para saldar la deuda.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Restricciones en trámites:</strong> Los deudores no
                    pueden renovar su licencia de conducir ni su pasaporte.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Limitaciones en transacciones:</strong> La venta de
                    inmuebles o vehículos requiere acreditar que las ganancias
                    se destinarán al pago de la deuda.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Impedimentos laborales:</strong> Se retiene un
                    porcentaje del sueldo de quienes trabajan en el sector
                    público o postulan a cargos de elección popular.Se retiene
                    un porcentaje del sueldo de quienes trabajan en el sector
                    público o postulan a cargos de elección popular.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Acceso a beneficios estatales:</strong> Los deudores
                    no pueden acceder a ciertos programas o instrumentos
                    financiados por el Estado, como los de la Agencia Nacional
                    de Investigación y Desarrollo (Becas nivel superior,
                    nacional y extranjero).
                  </span>
                </li>
              </ul>
              <h3 className="text-xl font-semibold  mb-4">
                ¿Cómo salir del registro?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Para ser eliminado del registro, el deudor debe pagar la
                totalidad de la deuda o establecer un acuerdo de pago aprobado
                por el tribunal. Una vez cumplido, se solicita al tribunal la
                eliminación del registro.
              </p>

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

      {/* Familia Mediation Services */}
      <section id="compensacion" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <div className="bg-mediacion-blue/10 p-3 rounded-full text-mediacion-blue mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-mediacion-blue">
                  MEDIACIÓN FAMILIAR VOLUNTARIA SOBRE COMPENSACIÓN ECONÓMICA Y
                  DECLARACIÓN DE BIENES FAMILIARES
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                En Mediación Familiar Diego de Almagro también mediamos sobre
                materias relacionadas a la compensación económica y declaración
                de bienes familiares.
              </p>

              <h3 className="text-xl font-semibold text-mediacion-blue mb-4">
                ¿Qué es la compensación económica?
              </h3>

              <p className="text-lg text-gray-700 mb-6">
                Es un derecho que puede solicitar el cónyuge o conviviente civil
                que haya visto afectado su patrimonio o carrera laboral por
                priorizar el hogar o los hijos; y surge al momento de disolverse
                el matrimonio o el Acuerdo de Unión Civil (AUC), y tiene como
                objetivo reparar el menoscabo económico que sufre uno de los
                cónyuges o convivientes civiles por haberse dedicado
                preferentemente al cuidado de los hijos y/o las labores del
                hogar común, en desmedro de su vida laboral o profesional.
              </p>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-4">
                ¿Qué es la declaración de bien familiar?
              </h3>

              <p className="text-lg text-gray-700 mb-6">
                Es un proceso legal que, en Chile, permite proteger el hogar
                principal de la familia y los muebles que la componen,
                garantizando que no puedan ser vendidos, arrendados o gravados
                sin la autorización del cónyuge no propietario, con el fin de
                proteger el hogar en común. Quienes pueden solicitar la
                declaración, será cualquiera de los cónyuges o convivientes
                civiles, en ciertos casos, incluso si hay separación o se vive
                en lugares distintos.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>¿Qué se puede declarar como bien familiar?</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>La vivienda que sirve de hogar común.</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Los bienes muebles esenciales</strong> (como
                    electrodomésticos, muebles, etc.) ubicados en esa vivienda.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Efectos principales:</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Protección legal</strong> del inmueble y bienes.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong></strong> El cónyuge no propietario no necesita
                    inscribir derechos de propiedad.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong></strong> El propietario no puede vender, hipotecar
                    o arrendar el inmueble sin el consentimiento del otro.
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
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/mediaciondda4.jpg"
                  alt="Mediación familiar"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Familia Mediation Services */}
      <section id="voluntaria" className="py-16 bg-white">
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
                  MEDIACIÓN FAMILIAR VOLUNTARIA SOBRE AUTORIZACIÓN SALIDA DEL
                  PAÍS DE NIÑOS, NIÑAS Y ADOLESCENTES
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                En Mediación Familiar Diego de Almagro somos una instancia útil
                en los conflictos entre padres o madres respecto a la
                autorización para que un niño, niña o adolescente (NNA) salga
                del país, cuando hay desacuerdo entre los padres (por ejemplo,
                uno quiere autorizar y el otro no), la mediación se ofrece como
                un mecanismo alternativo para evitar un juicio de familia. Si la
                mediación resulta exitosa, se puede firmar un acuerdo que tenga
                valor legal.
              </p>

              <h3 className="text-xl font-semibold text-mediacion-blue mb-4">
                ¿Cuándo es necesaria la autorización?
              </h3>

              <p className="text-lg text-gray-700 mb-6">
                Un niño, niña o adolescente necesita autorización para salir de
                Chile si:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Viaja solo o con un tercero</strong> (como un
                    familiar o tutor).
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Viaja con solo uno de los padres,</strong> sin la
                    presencia del otro.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      No se cuenta con la custodia total o hay medidas
                      judiciales vigentes.
                    </strong>
                  </span>
                </li>
                <h3 className="text-xl font-semibold text-mediacion-blue mb-4">
                  ¿Qué pasa si uno de los padres no da la autorización?
                </h3>
                <h3 className="text-xl font-semibold text-mediacion-blue mb-4">
                  Opciones:
                </h3>

                <ul className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Mediación familiar:</strong>{" "}
                    <li>
                      Se puede acudir a un mediador familiar (privado o del
                      Ministerio de Justicia).
                    </li>
                    <li>
                      Si ambas partes están de acuerdo, pueden firmar un acuerdo
                      de autorización ante notario o tribunal.
                    </li>
                    <li>
                      Este acuerdo tiene valor judicial si es aprobado por el
                      juez de familia.
                    </li>
                  </span>
                </ul>
                <ul className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Autorización judicial directa:</strong>
                    <li>
                      Si no hay acuerdo en la mediación, o una de las partes se
                      niega a participar, el padre o madre que desee salir del
                      país con el niño puede solicitar al Juzgado de Familia una
                      autorización judicial.
                    </li>
                  </span>
                </ul>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>En resumen:</strong>
                    <li>
                      La mediación es voluntaria, pero muy recomendada para
                      evitar un juicio.
                    </li>
                    <li>
                      Si no hay acuerdo, el tribunal puede otorgar la
                      autorización para la salida del país.
                    </li>
                    <li>
                      El interés superior del NNA siempre será el criterio
                      principal.
                    </li>
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
      <section id="formularios" className="py-16 bg-mediacion-beige">
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
                  OTROS SERVICIOS DE MEDIACIÓN FAMILIAR SOBRE ELABORACIÓN DE
                  INFORMES SOCIALES EN LO EDUCATIVO
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                En Mediación Familiar Diego de Almagro encontrará un espacio de
                apoyo para la elaboración de informes sociales, fundamentales
                para acceder a diversos beneficios sociales. El informe social
                en el área educativa, es elaborado por un/a Trabajador/a Social,
                quien describe la detalladamente la situación socioeconómica,
                familiar y personal del estudiante, con la finalidad de
                respaldar la postulación o renovación de beneficios
                estudiantiles, facilitar apoyos institucionales o intervenir
                ante situaciones de vulnerabilidad.
              </p>

              <h3 className="text-xl font-semibold text-mediacion-blue mb-4">
                ¿Para qué se utiliza en Educación Media y Nivel Superior?
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>En Educación Media:</strong>
                    <li>
                      Solicitud o renovación de becas JUNAEB (Beca Presidente de
                      la República, Beca Indígena, Beca Residencia, entre
                      otras).
                    </li>
                    <li>
                      Postulación a programas de apoyo psicosocial o económico.
                    </li>
                    <li>
                      Justificación de inasistencias prolongadas por problemas
                      familiares o sociales.
                    </li>
                    <li>Derivación a redes de apoyo social o salud mental.</li>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>En Educación Superior:</strong>{" "}
                    <li>
                      Postulación y renovación de beneficios como:{" "}
                      <li>
                        <strong>Gratuidad</strong>
                      </li>
                      <li>
                        <strong>
                          Becas de arancel (Bicentenario, Juan Gómez Millas,
                          etc.)
                        </strong>
                      </li>
                      <li>
                        <strong>Crédito con Aval del Estado (CAE)</strong>
                      </li>
                    </li>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Acreditación de
                    <strong>vulnerabilidad socioeconómica.</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong></strong> Apoyo en procesos de suspensión o
                    continuidad de estudios por causas personales/familiares.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong></strong> Solicitud de residencia estudiantil,
                    alimentación, transporte u otros apoyos institucionales.
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

      {/* Online Mediation Services */}
      <section id="beneficios" className="py-16 bg-mediacion-beige">
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
                  OTROS SERVICIOS DE MEDIACIÓN FAMILIAR SOBRE ELABORACIÓN DE
                  INFORMES SOCIALES PARA BENEFICIOS HABITACIONALES Y SALUD
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                En Mediación Familiar Diego de Almagro encontrará un espacio de
                apoyo para la elaboración de informes sociales, fundamentales
                para acceder a diversos beneficios sociales.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                En Mediación Familiar Diego de Almagro encontrará un espacio de
                apoyo para la elaboración de informes sociales, fundamentales
                para acceder a diversos beneficios sociales.
              </p>
              <p>
                El informe social en el área habitacional y de salud, es un
                <strong>
                  requisito clave para postular o acceder a ciertos programas y
                  beneficios
                </strong>
                del Estado, especialmente cuando se debe acreditar
                <strong>situaciones de vulnerabilidad o urgencia.</strong>
              </p>
              <h3 className="text-xl font-semibold text-mediacion-blue mb-4">
                En lo habitacional, ¿para qué beneficios se utilizan?
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      Subsidio Habitacional (DS49, DS1, DS19, etc.):
                    </strong>
                    <li>
                      Compra de vivienda nueva o usada.Acredita la necesidad
                      urgente de vivienda o mejoramiento.
                    </li>
                    <li>
                      Complementa el puntaje del Registro Social de Hogares
                      (RSH).
                    </li>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Postulación a programas del SERVIU y MINVU:</strong>
                    <li>Compra de vivienda nueva o usada.</li>
                    <li>o Construcción en sitio propio.</li>
                    <li>o Mejoramiento de vivienda, baños, techumbres.</li>
                    <li>
                      Postulación a programas de apoyo psicosocial o económico.
                    </li>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Casos especiales:</strong>{" "}
                    <li>
                      Situaciones de hacinamiento, allegamiento, viviendas en
                      mal estado o insalubres
                      <li></li>
                      <li>
                        <strong>Crédito con Aval del Estado (CAE)</strong>
                      </li>
                    </li>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      En salud, ¿para qué beneficios se utilizada?
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>
                      Acceso a tratamientos médicos de alto costo:
                    </strong>{" "}
                    <li>
                      Acreditar vulnerabilidad para acceder al{" "}
                      <strong>
                        Fondo Nacional de Medicamentos (FONASA Nivel 0).
                      </strong>{" "}
                    </li>{" "}
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mediacion-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Compra o entrega de ayudas técnicas:</strong>Sillas
                    de ruedas, audífonos, gatos clínicos, prótesis (a través de
                    SENADIS o JUNAEB).
                    <strong>
                      <li>Traslados y derivaciones médicas interregionales:</li>
                    </strong>{" "}
                    Solicitudes de apoyo logístico o de alojamiento.
                    <strong>
                      {" "}
                      <li>
                        Postulación a programas de ayuda solidaria en hospitales
                        públicos:
                      </li>
                    </strong>{" "}
                    <li>
                      Farmacia solidaria, entrega de pañales, insumos,
                      alimentación.
                    </li>
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
