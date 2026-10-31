import config from "../site.config";
import CourtLines from "./CourtLines";

export default function Hero() {
  const whatsappHref = `https://wa.me/${config.coach.whatsappNumber}?text=${encodeURIComponent(
    "Hi Coach, I'd like to know more about Smashpoint Badminton Academy."
  )}`;

  return (
    <section className="hero" id="top">
      <CourtLines
        variant="bg"
        className="hero-court-bg"
      />
      <div className="container hero-inner">
        <span className="eyebrow on-dark">{config.academyName}</span>
        <h1>
          Where every <em>player</em> improves.
        </h1>
        <p className="hero-sub">{config.heroSubtext}</p>
        <p className="hero-schedule">{config.heroScheduleLine}</p>
        <div className="btn-row">
          <a href="#enquiry" className="btn btn-primary">Book a Free Trial</a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
