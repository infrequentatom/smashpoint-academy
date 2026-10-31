import config from "../site.config";

export default function Programmes() {
  return (
    <section className="section programmes" id="programmes">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Coaching Programmes</span>
          <h2>Pick your court time.</h2>
        </div>

        <div className="prog-grid">
          {config.programmes.map((p) => (
            <div className="prog-card" key={p.name}>
              <h3>{p.name}</h3>
              <div className="prog-detail">{p.detail}</div>
              <p className="prog-note">
                {p.note === "Available on Request" ? "Personalised, one-to-one sessions." : p.note}
              </p>
              {p.note === "Available on Request" && (
                <span className="prog-badge">Available on Request</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
