import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {
  return (
    <a
      href="https://wa.me/919629301506"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition duration-300 hover:scale-110"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </a>
  );
}

export default WhatsApp;