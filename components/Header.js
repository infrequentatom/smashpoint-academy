import { useState } from "react";
import config from "../site.config";

export default function Header() {
  const [open, setOpen] = useState(false);

  const whatsappHref = `https://wa.me/${config.coach.whatsappNumber}?text=${encodeURIComponent(
    "Hi Coach, I'd like to know more about Smashpoint Badminton Academy."
  )}`;

  return (
    <header className="site-header">
      <div className="container">
        <a href="#top" className="brand">
          <img src="/logo.jpeg" alt="Smashpoint Badminton Academy logo" />
          <span className="brand-text">
            Smashpoint
            <span>Badminton Academy</span>
          </span>
        </a>

        <nav id="site-nav" aria-label="Main" className={`nav-links ${open ? "open" : ""}`}>
          <a href="#why" onClick={() => setOpen(false)}>Why Smashpoint</a>
          <a href="#coach" onClick={() => setOpen(false)}>Coach</a>
          <a href="#programmes" onClick={() => setOpen(false)}>Programmes</a>
          <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
          <a href="#locations" onClick={() => setOpen(false)}>Locations</a>
          <a href="#enquiry" onClick={() => setOpen(false)}>Book Trial</a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
            WhatsApp Us
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
