import config from "../site.config";

// Photos & videos come from site.config.js -> gallery (files live in /public/media).
export default function Gallery() {
  const items = config.gallery || [];
  if (!items.length) return null;

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Gallery</span>
          <h2>{config.galleryHeading || "Life at Smashpoint"}</h2>
        </div>

        <div className="gallery-grid">
          {items.map((item) => (
            <figure
              className="gallery-item"
              key={item.src}
              style={item.width && item.height ? { aspectRatio: `${item.width} / ${item.height}` } : undefined}
            >
              {item.type === "video" ? (
                <video controls playsInline preload="metadata" poster={item.poster} aria-label={item.alt}>
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" />
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
