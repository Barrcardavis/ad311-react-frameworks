export default function AboutPage() {
  return (
    <main
      style={{
        fontFamily: "sans-serif",
        padding: "2rem",
        background: "#e8f3ff",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#0b4f91", marginBottom: "1rem" }}>
        About This Project
      </h1>

      <p style={{ fontSize: "1.1rem", color: "#333", lineHeight: "1.7" }}>
        This is a statically generated page created for my AD311 assignment.
        Next.js automatically builds this page at build time, demonstrating
        Static Site Generation (SSG) using the App Router.
      </p>

      <p style={{ marginTop: "1.5rem", color: "#2a5d9f" }}>
        It uses the same light‑blue theme as the landing page for consistency.
      </p>
    </main>
  );
}
