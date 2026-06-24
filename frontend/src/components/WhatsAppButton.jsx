import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923001234567"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full text-3xl shadow-lg z-50"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;