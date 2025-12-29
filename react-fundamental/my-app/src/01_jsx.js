// <!-- Create a React component that renders the following JSX elements: ▪ A heading with the text "Welcome to JSX". 
//  ▪ A paragraph explaining JSX with dynamic data (use curly braces to insert variables). -->

import React from "react";

function Welcome() {
  const framework = "React";
  const description = "JSX allows you to write HTML-like code in JavaScript.";

  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>
        {description} We are building this example using {framework}.
      </p>
    </div>
  );
}

export default Welcome;

