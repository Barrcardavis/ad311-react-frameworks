import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: any) => {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  ).then(res => res.json());

  return json(user);
};

export default function UserDetail() {
  const user = useLoaderData<typeof loader>();

  return (
    <main style={{ padding: 20 }}>
      <h1>User: {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Company: {user.company?.name}</p>
    </main>
  );
}
