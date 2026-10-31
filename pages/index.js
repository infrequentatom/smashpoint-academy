import Head from "next/head";
import config from "../site.config";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import Difference from "../components/Difference";
import Coach from "../components/Coach";
import Programmes from "../components/Programmes";
import WhoCanJoin from "../components/WhoCanJoin";
import Gallery from "../components/Gallery";
import Locations from "../components/Locations";
import TimingsFees from "../components/TimingsFees";
import Enquiry from "../components/Enquiry";
import Footer from "../components/Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp";

// Runs at build time. Set NEXT_PUBLIC_SITE_URL (e.g. https://www.yourdomain.com) once you
// have a custom domain; until then Vercel's production URL is used automatically.
export async function getStaticProps() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  const fromVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const siteUrl = (fromEnv || (fromVercel ? `https://${fromVercel}` : "")).replace(/\/$/, "");
  return { props: { siteUrl } };
}

export default function Home({ siteUrl }) {
  const title = `${config.academyName} — ${config.tagline}`;
  const abs = (path) => (siteUrl ? `${siteUrl}${path}` : path);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: config.academyName,
    description: config.seoDescription,
    telephone: `+91${config.coach.phone}`,
    ...(siteUrl && { url: siteUrl, image: abs("/og-image.jpg") }),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Balewadi Rd, near Laxmi Mata Mandir, Dasar, Balewadi",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411045",
      addressCountry: "IN"
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "16:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "12:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "11:00" }
    ]
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={config.seoDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0b0a" />
        {siteUrl && <link rel="canonical" href={siteUrl} />}

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.academyName} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={config.seoDescription} />
        {siteUrl && <meta property="og:url" content={siteUrl} />}
        {siteUrl && <meta property="og:image" content={abs("/og-image.jpg")} />}
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Philosophy />
        <Difference />
        <Coach />
        <Programmes />
        <WhoCanJoin />
        <Gallery />
        <Locations />
        <TimingsFees />
        <Enquiry />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
