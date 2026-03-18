export default function Home() {
  return (
    <main
      style={{
        fontFamily: "sans-serif",
        padding: "2rem",
        background: "#e8f3ff", // light blue background
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header style={{ marginBottom: "3rem" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "0.5rem",
            color: "#0b4f91", // deep blue
          }}
        >
          Welcome to My Next.js App
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#2a5d9f" }}>
          A simple landing page built for my AD311 assignment.
        </p>
      </header>

      {/* Hero Section */}
      <section
        style={{
          padding: "2rem",
          background: "#ffffff",
          borderRadius: "10px",
          marginBottom: "3rem",
          border: "1px solid #c9ddf5",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "1rem",
            color: "#0b4f91",
          }}
        >
          Build. Learn. Explore.
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#333" }}>
          This project demonstrates my ability to use the Next.js App Router,
          create static pages, and build dynamic routes with API data.
        </p>
      </section>

      {/* Features Section */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "1rem",
            color: "#0b4f91",
          }}
        >
          What’s Inside
        </h2>
        <ul style={{ lineHeight: "1.8", fontSize: "1.1rem", color: "#2a5d9f" }}>
          <li>✔ A clean landing page</li>
          <li>✔ A static SSG page at <strong>/about</strong></li>
          <li>✔ A dynamic route at <strong>/users/[id]</strong></li>
          <li>✔ API data fetched from JSONPlaceholder</li>
        </ul>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: "4rem", color: "#2a5d9f" }}>
        <p>© 2026 David Davis — AD311 Next.js Assignment</p>
      </footer>
    </main>
  );
}
