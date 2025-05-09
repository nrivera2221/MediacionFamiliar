import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const MediationForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    solicitante_nombre: "",
    solicitante_rut: "",
    solicitante_telefono: "",
    solicitante_email: "",
    solicitante_region: "",
    solicitante_provincia: "",
    solicitante_comuna: "",

    solicitado_nombre: "",
    solicitado_rut: "",
    solicitado_telefono: "",
    solicitado_email: "",
    solicitado_region: "",
    solicitado_provincia: "",
    solicitado_comuna: "",

    beneficiario_nombre: "",
    beneficiario_rut: "",
    beneficiario_nacimiento: "",
    beneficiario_edad: "",

    materias: [],
    violencia: "",
    disponibilidad: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "select-multiple") {
      const options = Array.from(
        (e.target as HTMLSelectElement).selectedOptions
      ).map((opt) => opt.value);
      setFormData((prev) => ({ ...prev, [name]: options }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xanobyge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({
          title: "Formulario enviado",
          description: "Nos contactaremos contigo para coordinar la mediación.",
        });
        setFormData({
          solicitante_nombre: "",
          solicitante_rut: "",
          solicitante_telefono: "",
          solicitante_email: "",
          solicitante_region: "",
          solicitante_provincia: "",
          solicitante_comuna: "",
          solicitado_nombre: "",
          solicitado_rut: "",
          solicitado_telefono: "",
          solicitado_email: "",
          solicitado_region: "",
          solicitado_provincia: "",
          solicitado_comuna: "",
          beneficiario_nombre: "",
          beneficiario_rut: "",
          beneficiario_nacimiento: "",
          beneficiario_edad: "",
          materias: [],
          violencia: "",
          disponibilidad: "",
        });
      } else {
        toast({
          title: "Error al enviar",
          description: "Revisa los datos e intenta nuevamente.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error de red",
        description: "No se pudo enviar el formulario. Intenta más tarde.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <h2 className="text-lg font-semibold">
        Datos de quien solicita el proceso
      </h2>
      <Input
        name="solicitante_nombre"
        placeholder="Nombre completo"
        required
        value={formData.solicitante_nombre}
        onChange={handleChange}
      />
      <Input
        name="solicitante_rut"
        placeholder="RUT"
        required
        value={formData.solicitante_rut}
        onChange={handleChange}
      />
      <Input
        name="solicitante_telefono"
        placeholder="Teléfono"
        required
        value={formData.solicitante_telefono}
        onChange={handleChange}
      />
      <Input
        name="solicitante_email"
        placeholder="Correo electrónico (opcional)"
        value={formData.solicitante_email}
        onChange={handleChange}
      />
      <Input
        name="solicitante_region"
        placeholder="Región"
        required
        value={formData.solicitante_region}
        onChange={handleChange}
      />
      <Input
        name="solicitante_provincia"
        placeholder="Provincia"
        required
        value={formData.solicitante_provincia}
        onChange={handleChange}
      />
      <Input
        name="solicitante_comuna"
        placeholder="Comuna"
        required
        value={formData.solicitante_comuna}
        onChange={handleChange}
      />

      <h2 className="text-lg font-semibold">Datos del solicitado</h2>
      <Input
        name="solicitado_nombre"
        placeholder="Nombre completo"
        required
        value={formData.solicitado_nombre}
        onChange={handleChange}
      />
      <Input
        name="solicitado_rut"
        placeholder="RUT (opcional)"
        value={formData.solicitado_rut}
        onChange={handleChange}
      />
      <Input
        name="solicitado_telefono"
        placeholder="Teléfono"
        required
        value={formData.solicitado_telefono}
        onChange={handleChange}
      />
      <Input
        name="solicitado_email"
        placeholder="Correo electrónico (opcional)"
        value={formData.solicitado_email}
        onChange={handleChange}
      />
      <Input
        name="solicitado_region"
        placeholder="Región"
        required
        value={formData.solicitado_region}
        onChange={handleChange}
      />
      <Input
        name="solicitado_provincia"
        placeholder="Provincia"
        required
        value={formData.solicitado_provincia}
        onChange={handleChange}
      />
      <Input
        name="solicitado_comuna"
        placeholder="Comuna"
        required
        value={formData.solicitado_comuna}
        onChange={handleChange}
      />

      <h2 className="text-lg font-semibold">Datos del o los beneficiarios</h2>
      <Input
        name="beneficiario_nombre"
        placeholder="Nombre completo"
        required
        value={formData.beneficiario_nombre}
        onChange={handleChange}
      />
      <Input
        name="beneficiario_rut"
        placeholder="RUT"
        required
        value={formData.beneficiario_rut}
        onChange={handleChange}
      />
      <Input
        name="beneficiario_nacimiento"
        placeholder="Fecha de nacimiento (dd-mm-aaaa)"
        required
        value={formData.beneficiario_nacimiento}
        onChange={handleChange}
      />
      <Input
        name="beneficiario_edad"
        placeholder="Edad"
        required
        value={formData.beneficiario_edad}
        onChange={handleChange}
      />
      <Input
        name="beneficiario_nombre"
        placeholder="Nombre completo"
        required
        value={formData.beneficiario_nombre}
        onChange={handleChange}
      />
      <Input
        name="beneficiario_rut"
        placeholder="RUT"
        required
        value={formData.beneficiario_rut}
        onChange={handleChange}
      />
      <Input
        name="beneficiario_nacimiento"
        placeholder="Fecha de nacimiento (dd-mm-aaaa)"
        required
        value={formData.beneficiario_nacimiento}
        onChange={handleChange}
      />
      <Input
        name="beneficiario_edad"
        placeholder="Edad"
        required
        value={formData.beneficiario_edad}
        onChange={handleChange}
      />
      <Input
        name="beneficiario_nombre"
        placeholder="Nombre completo"
        required
        value={formData.beneficiario_nombre}
        onChange={handleChange}
      />
      <Input
        name="beneficiario_rut"
        placeholder="RUT"
        required
        value={formData.beneficiario_rut}
        onChange={handleChange}
      />
      <Input
        name="beneficiario_nacimiento"
        placeholder="Fecha de nacimiento (dd-mm-aaaa)"
        required
        value={formData.beneficiario_nacimiento}
        onChange={handleChange}
      />
      <Input
        name="beneficiario_edad"
        placeholder="Edad"
        required
        value={formData.beneficiario_edad}
        onChange={handleChange}
      />

      <div>
        <label className="block font-medium mb-1">
          Seleccione las materias a mediar *
        </label>
        <select
          name="materias"
          multiple
          className="w-full border rounded px-3 py-2"
          required
          value={formData.materias}
          onChange={handleChange}
        >
          {[
            "Alimentos",
            "Alimentos Aumento",
            "Alimentos Rebaja",
            "Deuda por Pensión de Alimentos",
            "Cese de Alimentos",
            "Cuidado Personal del Niño",
            "Cuidado Personal Modificación",
            "Relación Directa y Regular (Visitas)",
            "Relación Directa y Regular, Modificación",
          ].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">
          ¿Existe causa vigente o denuncia por violencia intrafamiliar? *
        </label>
        <select
          name="violencia"
          required
          className="w-full border rounded px-3 py-2"
          value={formData.violencia}
          onChange={handleChange}
        >
          <option value="">Selecciona</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">
          Fecha y hora disponible para la sesión *
        </label>
        <Input
          name="disponibilidad"
          placeholder="Ej. 10-05-2025 15:00"
          required
          value={formData.disponibilidad}
          onChange={handleChange}
        />
        <p className="text-sm text-gray-500 mt-1">
          Consideraremos tu disponibilidad y haremos todo lo posible para
          agendar fecha y hora que se ajuste a tus necesidades.
        </p>
        <p className="text-sm text-red-500 mt-1">
          * NO AGENDES sin estar en conocimiento que el servicio de mediación
          está asociado a un cobro.
        </p>
      </div>

      <Button
        type="submit"
        className="w-full bg-mediacion-blue hover:bg-mediacion-lightBlue"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar solicitud"}
      </Button>
    </form>
  );
};

export default MediationForm;
