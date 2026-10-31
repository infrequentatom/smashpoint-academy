import config from "../site.config";

export default function TimingsFees() {
  return (
    <section className="section timings" id="timings">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Timings</span>
          <h2>When we train.</h2>
        </div>

        <div className="timings-grid">
          {config.timings.map((t) => (
            <div className="timing-card" key={t.label}>
              <span className="eyebrow">{t.label}</span>
              <h3>{t.value}</h3>
              {t.note && <p>{t.note}</p>}
            </div>
          ))}
        </div>

        <div className="fees-note">
          <div>
            <p>
              Batch options: {config.batchOptions.join(" or ")}. {config.trial.heading} — {config.trial.note}
            </p>
            <p>{config.feesNote}</p>
          </div>
          <a href="#enquiry" className="btn btn-primary">Book Free Trial</a>
        </div>
      </div>
    </section>
  );
}
