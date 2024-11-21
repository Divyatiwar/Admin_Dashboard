import useSWR from 'swr';
import { fetchUsers } from '../../utils/api';

export default function Users() {
  const { data, error } = useSWR('users', fetchUsers);

  if (error) return <div>Error loading users.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">User Management</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
