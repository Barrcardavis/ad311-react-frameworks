interface UserPageProps {
  params: Promise<{ id: string }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params; // <-- FIX

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { cache: "no-store" }
  );

  const user = await res.json();

  return (
    <main
      style={{
        fontFamily: "sans-serif",
        padding: "2rem",
        background: "#e8f3ff",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#0b4f91" }}>
        User: {user.name}
      </h1>

      <p style={{ fontSize: "1.1rem", color: "#333" }}>
        <strong>Email:</strong> {user.email}
      </p>

      <p style={{ fontSize: "1.1rem", color: "#333" }}>
        <strong>Company:</strong> {user.company?.name}
      </p>
    </main>
  );
}
