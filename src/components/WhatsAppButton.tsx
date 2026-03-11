import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20place%20a%20custom%20order"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-primary-foreground flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
