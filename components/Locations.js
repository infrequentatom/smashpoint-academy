import config from "../site.config";

export default function Locations() {
  return (
    <section className="section locations" id="locations">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Locations</span>
          <h2>Where we play.</h2>
        </div>

        <div className={`loc-grid ${config.locations.length === 1 ? "loc-grid--single" : ""}`}>
          {config.locations.map((loc) => {
            const q = encodeURIComponent(loc.mapQuery);
            const embedSrc = `https://www.google.com/maps?q=${q}&output=embed`;
            const linkHref = `https://www.google.com/maps/search/?api=1&query=${q}`;

            return (
              <div className="loc-card" key={loc.name}>
                <iframe
                  className="loc-map"
                  src={embedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={loc.name}
                />
                <div className="loc-info">
                  <h3>{loc.name}</h3>
                  <p>{loc.address}</p>
                  <a className="loc-link" href={linkHref} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
