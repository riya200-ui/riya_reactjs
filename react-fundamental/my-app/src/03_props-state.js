// Create a React component UserCard that accepts name, age, and location as props and displays them in a card format. 

import React from "react";

function UserCard({ name, age, location }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "10px",
        width: "200px",
        marginBottom: "10px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default UserCard;
