import React from "react";
import { FaWhatsapp } from "react-icons/fa";

// 📌 Función para enviar el evento a GA4
const handleWhatsappClick = () => {
  if (window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: "Botón de WhatsApp",
      value: 1,
    });
  }
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/526568501265"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center gap-2 text-lg hover:bg-green-600 transition z-30"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsappClick} // 📌 Evento se dispara al hacer clic
    >
      <FaWhatsapp size={24} />
      Contáctanos
    </a>
  );
};

export default WhatsAppButton;
