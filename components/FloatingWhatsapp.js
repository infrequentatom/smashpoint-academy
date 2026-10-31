import config from "../site.config";

export default function FloatingWhatsapp() {
  const href = `https://wa.me/${config.coach.whatsappNumber}?text=${encodeURIComponent(
    "Hi Coach, I'd like to know more about Smashpoint Badminton Academy."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="float-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Z"
          stroke="#0a0b0a"
          strokeWidth="1.6"
        />
        <path
          d="M8.5 8.3c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.8.1.1.1.3 0 .4-.1.2-.2.3-.3.4-.1.2-.3.3-.4.5-.1.1-.2.3 0 .5.2.3.7 1.1 1.5 1.8 1 .9 1.9 1.2 2.1 1.3.2.1.4.1.5-.1.2-.2.6-.7.8-.9.2-.2.3-.2.5-.1.2.1 1.4.6 1.6.7.2.1.3.2.4.3 0 .2 0 .8-.3 1.3-.3.6-1.5 1.1-2.1 1.1-.6.1-1.2.1-3.7-1-2.9-1.3-4.7-4.2-4.9-4.4-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.3Z"
          fill="#0a0b0a"
        />
      </svg>
    </a>
  );
}
