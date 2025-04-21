import { useEffect, useRef } from "react";

// Declaración global para evitar errores con google y initMapdeclare global {

declare global {
  interface Window {
    google: typeof google;
    initMap: () => void;
  }
}

interface MapProps {
  className?: string;
}

const MapComponent: React.FC<MapProps> = ({ className = "" }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current) return;

      const atacamaCenter = { lat: -27.3668, lng: -70.3322 };

      const map = new window.google.maps.Map(mapRef.current, {
        center: atacamaCenter,
        zoom: 8,
        mapTypeControl: true,
        streetViewControl: false,
      });

      const locations = [
        { name: "El Salvador", position: { lat: -26.2499, lng: -69.6248 } },
        { name: "Diego de Almagro", position: { lat: -26.3667, lng: -70.05 } },
        { name: "Inca de Oro", position: { lat: -26.75, lng: -69.9167 } },
      ];

      locations.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: location.position,
          map: map,
          title: location.name,
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div><strong>${location.name}</strong><p>Cobertura de servicios de mediación</p></div>`,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });
    };

    // Cargar el script de Google Maps si no está presente
    if (!window.google || !window.google.maps) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBZUd6-oawCUMXGsh6TUejhm91gh3VDuXA&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      window.initMap = undefined;
    };
  }, []);

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${className}`}>
      <div ref={mapRef} className="w-full h-full min-h-[300px]"></div>
    </div>
  );
};

export default MapComponent;
