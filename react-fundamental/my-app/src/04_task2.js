// Task 2: o Create a form with an input field in React. Display the value of the input field dynamically as the user types in it.


import React, { useState } from "react";

function InputForm() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h2>Type something:</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Current Input: {inputValue}</p>
    </div>
  );
}

export default InputForm;
