import config from "../site.config";

export default function Difference() {
  return (
    <section className="section difference">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What Makes Us Different?</span>
          <h2>Not a feature list.<br />A way of coaching.</h2>
        </div>

        <div className="diff-grid">
          {config.differentiators.map((item) => (
            <div className="diff-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
