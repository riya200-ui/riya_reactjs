// / • Task 2: o Create a list of users where each user has a unique id. Render the user list using React and assign a unique key to each user.
import React from "react";

function UserList() {
  const users = [
    { id: 1, name: "Riya" },
    { id: 2, name: "John" },
    { id: 3, name: "Amit" }
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
