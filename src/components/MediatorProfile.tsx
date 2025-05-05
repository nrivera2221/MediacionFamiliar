import { Facebook, Instagram, Linkedin } from "lucide-react";

const MediatorProfile = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-mediacion-blue to-mediacion-lightBlue p-6 text-white">
        <h3 className="text-2xl font-bold">Fabiola Gallardo Araya</h3>
        <p className="text-white/90">Mediadora Familiar Registrada</p>
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4 ">
            <img
              src="/public/foto_400x400.jpg"
              alt="Mediadora Familiar"
              className="w-full rounded-lg shadow-sm object-cover aspect-square"
            />

            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <span className="font-medium w-32">Registro N°</span>
                <span>9190</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-medium w-32">Horario:</span>
                <span>Lun-Vie 8:30-17:30</span>
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
                  href="https://linkedin.com/in/fabiola-gallardo-araya-12709557"
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
            <h4 className="text-xl font-semibold text-mediacion-blue mb-4">
              Perfil Profesional
            </h4>
            <p className="text-gray-700 mb-4">
              Trabajadora Social y Licenciada en Trabajo Social de la Pontifica
              Universidad Católica de Valparaíso. Durante más de 10 años de
              experiencia profesional en el área de infancia y familias,
              contribuyendo a resolver conflictos de manera pacífica y
              constructiva. Especializada en temáticas de vulneración de
              derechos, pericia social y mediación familiar.
            </p>
            <p className="text-gray-700 mb-4">
              Mi enfoque se basa en la empatía, la neutralidad y el respeto a
              todas las partes involucradas, con el objetivo de ser un tercer
              imparcial que facilite el diálogo para establecer acuerdos
              duraderos que beneficien a todos los miembros de la familia,
              especialmente a los niños, niñas y adolescentes.
            </p>

            <h4 className="text-lg font-semibold text-mediacion-blue mt-6 mb-3">
              Formación Académica
            </h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>
                Trabajadora Social y Licenciada en Trabajo Social de la
                Pontificia Universidad Católica de Valparaíso.
              </li>
              <li>
                Diplomada en Pericia Social en Juicios Orales, Pontificia
                Universidad Católica de Chile.
              </li>
              <li>
                Diplomada en Mediación Familiar, Instituto Profesional IACC.
              </li>
              <li>
                Diplomada de especialización en Familia, Infancia y Niñez para
                Tribunales de Familia y Consejería Técnica, Universidad Gabriela
                Mistral.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-mediacion-blue mt-6 mb-3">
              Certificaciones
            </h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Registro de Mediadores: N° 9190.</li>
              <li>
                Mediadora Familiar Privada, Registro Único de Mediadores de la
                Ley N° 19.968, Ministerio de Justicia y Derechos Humanos.
              </li>
              <li>Certificación en técnicas de comunicación no violenta.</li>
              <li>
                Especialista en Mediación con Enfoque en Derechos de Niños,
                Niñas y Adolescentes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediatorProfile;
