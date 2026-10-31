import config from "../site.config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {config.academyName}. All rights reserved.</span>
        <a href={`tel:+91${config.coach.phone}`}>Coaching: {config.coach.phone}</a>
        <a href={`tel:+91${config.coach.courtBookingPhone}`}>Court Booking: {config.coach.courtBookingPhone}</a>
      </div>
    </footer>
  );
}
