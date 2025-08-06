import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const generarNumeroAtencion = (): string => {
  const fecha = new Date();
  const numero = Math.floor(100000 + Math.random() * 900000);
  const dia = fecha.getDate().toString().padStart(2, "0");
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
  const anio = fecha.getFullYear();
  return `MF-${anio}${mes}${dia}-${numero}`;
};

export const PagoCard: React.FC = () => {
  const handleAgendar = () => {
    const numeroAtencion = generarNumeroAtencion();

    alert(`Tu número de atención es: ${numeroAtencion}`);

    const urlPago = `https://flow.cl/app/web/pagarBtnPago.php?token=25drqbn&ref=${numeroAtencion}`;

    window.location.href = urlPago;
  };

  return (
    <Card className="max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          Reserva Mediación Familiar
        </CardTitle>
        <CardDescription className="text-center text-gray-600">
          Reserva tu sesión online con un pago de $30.000 CLP
        </CardDescription>
      </CardHeader>

      <CardContent className="text-center">
        <img
          src="https://images.unsplash.com/photo-1588776814546-ec7e7df00c17" // Usa una imagen tuya o del centro
          alt="Mediación"
          className="rounded-md mx-auto mb-4 h-40 object-cover"
        />
        <p className="mb-2 text-gray-800">✔ Atención personalizada</p>
        <p className="mb-2 text-gray-800">✔ Confirmación inmediata</p>
      </CardContent>

      <CardFooter>
        <Button
          onClick={handleAgendar}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg"
        >
          Agendar y Pagar
        </Button>
      </CardFooter>
    </Card>
  );
};
