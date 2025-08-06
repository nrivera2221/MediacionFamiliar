import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const generarNumeroAtencion = (): string => {
  const fecha = new Date();
  const numero = Math.floor(100000 + Math.random() * 900000);
  const dia = fecha.getDate().toString().padStart(2, "0");
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
  const anio = fecha.getFullYear();
  return `MF-${anio}${mes}${dia}-${numero}`;
};

export const ReservaPago: React.FC = () => {
  const [numeroAtencion, setNumeroAtencion] = useState<string>("");

  const handleGenerar = () => {
    const numero = generarNumeroAtencion();
    setNumeroAtencion(numero);
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-sm rounded-md p-6 text-center space-y-6 ">
      <h1 className="text-2xl font-bold">RESERVA MEDIACIÓN FAMILIAR ONLINE</h1>

      <p className="text-gray-700 text-lg">
        💰 <strong>$30.000 CLP por unidad</strong>
      </p>

      {numeroAtencion ? (
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <p className="text-green-800 font-medium mb-2">
            Número de atención generado:
          </p>
          <p className="text-green-900 text-lg font-bold">{numeroAtencion}</p>
        </div>
      ) : (
        <p className="text-gray-600">
          Haz clic en "Generar Número" para comenzar tu reserva.
        </p>
      )}

      <div className="space-y-3">
        <Button
          onClick={handleGenerar}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg"
        >
          Generar Número de Atención
        </Button>

        <Button
          onClick={() => (window.location.href = "https://www.mercadopago.cl")}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-lg"
          disabled={!numeroAtencion}
        >
          Pagar con MercadoPago
        </Button>
      </div>

      <div className="text-left text-sm text-gray-700 mt-6 border-t pt-4">
        <p>
          <strong>Datos para transferencia bancaria:</strong>
        </p>
        <p>Fabiola Gallardo Araya</p>
        <p> BCI / BANCO CRÉDITO E INVERSIONES </p>
        <p>Cuenta Corriente: 777915028648</p>

        <p>Rut: 15.028.648-4</p>
        <p>
          Correo:{" "}
          <a href="mailto:contacto@mediaciondiego.cl" className="text-blue-600">
            contacto.fgallardo@mediaciondiegodealmagro.cl
          </a>
        </p>
        <br />
        <p>
          <strong>IMPORTANTE</strong> Genere su número de atención y adjuntelo
          en mensaje para completar su reserva, de lo contrario será anulada.
        </p>
      </div>
    </div>
  );
};
