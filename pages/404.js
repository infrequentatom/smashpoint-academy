import Head from "next/head";
import Link from "next/link";
import config from "../site.config";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found — {config.academyName}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          background: "var(--ink)",
          color: "var(--paper)",
          textAlign: "center",
          padding: 24
        }}
      >
        <span className="eyebrow on-dark">404</span>
        <h1>Out of bounds.</h1>
        <p>That page doesn&apos;t exist.</p>
        <Link href="/" className="btn btn-primary">Back to the court</Link>
      </main>
    </>
  );
}
