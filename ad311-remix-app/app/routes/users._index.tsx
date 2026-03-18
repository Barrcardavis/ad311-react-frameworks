import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

export const loader = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json());

  return json(users);
};

export default function UsersIndex() {
  const users = useLoaderData<typeof loader>();

  return (
    <main style={{ padding: 20 }}>
      <h1>Users</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
