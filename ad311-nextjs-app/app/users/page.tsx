export default async function UsersPage() {
  // Fetch users from API
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <main
      style={{
        fontFamily: "sans-serif",
        padding: "2rem",
        background: "#e8f3ff",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#0b4f91" }}>Users</h1>

      <ul style={{ marginTop: "1rem", lineHeight: "1.8" }}>
        {users.map((user: any) => (
          <li key={user.id} style={{ color: "#2a5d9f" }}>
            {user.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
