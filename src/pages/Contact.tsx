import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ServiceCard from "@/components/ServiceCard";
import { PagoCard } from "./Reserve";
import { ReservaPago } from "@/components/ReservaPago";

const Contact = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-mediacion-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Contáctanos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Completa el formulario o utiliza
            nuestros canales de contacto directo.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-mediacion-blue mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-mediacion-blue/10 p-2 rounded-full text-mediacion-blue">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Teléfono</h3>
                    <p className="text-gray-700">+56957908074</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Lunes a Viernes de 8:30 a 17:30 hrs Sábados de 11:00 a
                      16:00 hrs
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-mediacion-blue/10 p-2 rounded-full text-mediacion-blue">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Correo Electrónico
                    </h3>
                    <p className="text-gray-700">
                      contactofgallardo@mediaciondiegodealmagro.cl
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Respondemos en un plazo máximo de 24 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-mediacion-blue/10 p-2 rounded-full text-mediacion-blue">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Dirección</h3>
                    <p className="text-gray-700">
                      Avda. Juan Martinez #1402 oficina 05 Segundo piso, Diego
                      de Almagro.
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Región de Atacama, Chile.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-mediacion-blue/10 p-2 rounded-full text-mediacion-blue">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Horario de Atención
                    </h3>
                    <p className="text-gray-700">
                      Lunes a Viernes de 8:30 a 17:30 hrs Sábados de 11:00 a
                      16:00 hrs
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Consulta por horarios especiales
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4">
                  Síguenos en redes sociales
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-mediacion-blue text-white p-2 rounded-full hover:bg-mediacion-lightBlue transition"
                    aria-label="Facebook"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/mediaciondda/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-mediacion-blue text-white p-2 rounded-full hover:bg-mediacion-lightBlue transition"
                    aria-label="Instagram"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <br />

              <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <ReservaPago />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-mediacion-blue mb-6">
                Formulario de Mediación
              </h2>
              <p>
                Nuestro servicio de mediación privada le permite agendar
                mediación en un plazo máximo de 48 horas. Considerar que este
                servicio no es gratuito y tiene un costo asociado, un mediador
                se contactará para coordinar su día y hora de mediación.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-mediacion-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mediacion-blue mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nos encontramos en una ubicación central y de fácil acceso en
              Diego de Almagro.
            </p>
          </div>

          <div className="h-48 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.98274277484!2d-70.04830672468142!3d-26.391745171638117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a318ab38a1bf89%3A0x4c5dd9a31463d346!2sJuan%20Mart%C3%ADnez%20de%20Rozas%201103%2C%20Diego%20de%20Almagro%2C%20Atacama!5e0!3m2!1ses-419!2scl!4v1745248156508!5m2!1ses-419!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Oficina Diego de Almagro"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
