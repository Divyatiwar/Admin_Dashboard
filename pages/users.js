import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Replace the original fetch URL with the CORS proxy URL
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.socialverseapp.com/admin/dashboard/users");

        if (!response.ok) {
          // If the response status is not OK, throw an error
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data.users || []); // Adjust based on API response structure
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data from the API.");
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li> // Adjust according to actual data structure
        ))}
      </ul>
    </div>
  );
}
