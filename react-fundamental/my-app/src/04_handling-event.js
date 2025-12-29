// Task 1: o Create a button in a React component that, when clicked, changes the text from "Not Clicked" to "Clicked!" using event handling. • 

import React, { useState } from "react";

function ClickButton() {
  const [text, setText] = useState("Not Clicked");

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{text}</h2>
      <button onClick={() => setText("Clicked!")}>Click Me</button>
    </div>
  );
}

export default ClickButton;
