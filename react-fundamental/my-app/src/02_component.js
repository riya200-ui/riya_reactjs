// Task 1: o Create a functional component Greeting that accepts a name as a prop and displays "Hello, [name]!". 

import React from "react";

// Functional component
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

export default Greeting;
