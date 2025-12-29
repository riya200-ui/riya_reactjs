// Task 1: o Create a component that conditionally displays a login or logout button based on the user’s login status. 

import React, { useState } from "react";

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ marginBottom: "20px" }}>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
      <p>User is {isLoggedIn ? "logged in" : "logged out"}</p>
    </div>
  );
}

export default LoginControl;

