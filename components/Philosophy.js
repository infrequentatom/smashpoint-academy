import config from "../site.config";

export default function Philosophy() {
  const { heading, intro, points, closing } = config.philosophy;

  return (
    <section className="section philosophy" id="why">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Smashpoint?</span>
          <h2>{heading}</h2>
        </div>

        <div className="philosophy-grid">
          <div>
            <p className="philosophy-intro">{intro}</p>
            <p className="philosophy-closing">{closing}</p>
          </div>

          <ul className="point-list">
            {points.map((point) => (
              <li key={point}>
                <span className="point-dot" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
