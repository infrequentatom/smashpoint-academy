import config from "../site.config";

// Static booking section (works on Cloudflare Pages / Vercel static export – no server needed).
export default function Enquiry() {
  const { coach, trial, booking } = config;

  const bookingHref = `https://wa.me/${coach.whatsappNumber}?text=${encodeURIComponent(
    "Hi Coach, I'd like to book a free trial session at Smashpoint Badminton Academy.\n\nName: \nSlot: "
  )}`;
  const courtHref = `https://wa.me/${coach.courtBookingWhatsappNumber}?text=${encodeURIComponent(
    "Hi, I'd like to book a court at Smash Badminton Club, Baner."
  )}`;

  return (
    <section className="section enquiry" id="enquiry">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Get in Touch</span>
          <h2>{trial.heading}</h2>
        </div>

        <div className="enquiry-grid">
          <div className="enquiry-side">
            <p>
              {trial.note} {booking.instruction}
            </p>

            <div className="contact-card">
              <span className="eyebrow">Coaching</span>
              <div className="contact-name">{coach.name}</div>
              <a className="contact-phone" href={`tel:+91${coach.phone}`}>
                {coach.phone}
              </a>
              <div style={{ marginTop: 18 }}>
                <a href={bookingHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="enquiry-side">
            <p>Just want to play? Book a court at Smash Badminton Club, Baner.</p>

            <div className="contact-card">
              <span className="eyebrow">Court Booking</span>
              <div className="contact-name">Smash Badminton Club</div>
              <a className="contact-phone" href={`tel:+91${coach.courtBookingPhone}`}>
                {coach.courtBookingPhone}
              </a>
              <div style={{ marginTop: 18 }}>
                <a href={courtHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Book a Court
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
