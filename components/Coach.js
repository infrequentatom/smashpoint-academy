import config from "../site.config";

export default function Coach() {
  return (
    <section className="section coach" id="coach">
      <div className="container coach-grid">
        <div className="coach-photo">
          <img src="/logo.jpeg" alt="Smashpoint Badminton Academy logo" />
        </div>

        <div>
          <span className="eyebrow">About the Coach</span>
          <h3 className="coach-name" style={{ marginTop: 10 }}>
            Meet Coach {config.coach.name.split(" ")[0]}
          </h3>
          <div className="coach-bio">
            {config.coach.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <p className="coach-quote">
            &ldquo;Every player deserves clear guidance, individual attention and a
            positive learning environment.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
