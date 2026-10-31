import config from "../site.config";

export default function WhoCanJoin() {
  return (
    <section className="section section--tight who">
      <div className="container">
        <div className="section-head" style={{ marginBottom: 32 }}>
          <span className="eyebrow">Who Can Join?</span>
          <h2>All ages. All levels.</h2>
        </div>

        <div className="who-grid">
          {config.whoCanJoin.map((w) => (
            <div className="who-card" key={w}>{w}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
