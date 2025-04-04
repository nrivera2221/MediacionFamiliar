
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // Replace with actual WhatsApp number
  const whatsappNumber = "+56900000000";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%2C%20quiero%20consultar%20sobre%20servicios%20de%20mediación%20familiar`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 z-50 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
