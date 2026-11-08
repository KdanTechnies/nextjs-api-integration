
import { getUsers } from "@/lib/api";

type User = {
  id: number;
  name: string;
  email: string;
};

export default async function Home() {
  const users: User[] = await getUsers();

  return (
    <main className="p-10">
      <h1 className="mb-5 text-2xl font-bold">
        User Directory
      </h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-lg border p-4"
          >
            <h2 className="font-bold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
