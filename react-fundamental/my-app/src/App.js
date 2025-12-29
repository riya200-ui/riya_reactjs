
//-----------code for 01_jsx.js file-----

// import React from "react";
// import Welcome from "./01_jsx";

// function App() {
//   return <Welcome />;
// }

// export default App;

//-----------code for 02_component.js file-----

// import React from "react";
// import Greeting from "./02_component";

// function App() {
  
//   return (
//     <div>
//       <Greeting name="Riya" />
//       <Greeting name="panchal" />
//     </div>
//   );
// }

// export default App;

//-----------code for 02_component-2.js file------

// import React from "react";
// import WelcomeMessage from "./02_component-2";

// function App() {
//   return (
//     <div>
//       <WelcomeMessage />
//     </div>
//   );
// }

// export default App;

//-----------code for 03_props-state.js file-----

// import React from "react";
// import UserCard from "./03_props-state";

// function App() {
//   return (
//     <div>
//       <h2>User Cards</h2>
//       <UserCard name="Riya" age={25} location="Melbourne" />
//       <UserCard name="John" age={30} location="Sydney" />
//     </div>
//   );
// }

// export default App;

//-----------code for 03_task2.js file-----

// import React from "react";
// import UserCard from "./03_props-state";
// import Counter from "./03_task2";

// function App() {
//   return (
//     <div>
//       <h1>React Examples</h1>

//       <h2>User Cards</h2>
//       <UserCard name="Riya" age={25} location="Melbourne" />
//       <UserCard name="John" age={30} location="Sydney" />

//       <Counter />
//     </div>
//   );
// }

// export default App;

//-----------code for 04_handling-event.js file-----

// import React from "react";
// import ClickButton from "./04_handling-event";
// import InputForm from "./04_task2";

// function App() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>React Event Handling & Forms</h1>
      
//       <ClickButton />

//       <InputForm />
//     </div>
//   );
// }

// export default App;

//------------code for 05_conditional-rendering.js file-----

// import React from "react";
// import LoginControl from "./05_conditional-rendering";
// import VotingEligibility from "./05_task2";

// function App() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>React Conditional Rendering</h1>

//       <LoginControl />

//       <h2>Voting Check</h2>
//       <VotingEligibility age={20} />
//       <VotingEligibility age={15} />
//     </div>
//   );
// }

// export default App;

//-----------code for 06_lists-keys.js file----
// import React from "react";
// import FruitList from "./06_lists-keys";

// function App() {
//   return (
//     <div>
//       <FruitList />
//     </div>
//   );
// }

// export default App;


//-----------code for 06_task2.js file----
// import React from "react";
// import UserList from "./06_task2";

// function App() {
//   return (
//     <div>
//       <UserList />
//     </div>
//   );
// }

// export default App;

//-----------code for 07_forms.js file----
// import React from "react";
// import UserForm from "./07_forms";

// function App() {
//   return (
//     <div>
//       <UserForm />
//     </div>
//   );
// }

// export default App;

//-----------code for 07_task2.js file----

// import React from "react";
// import UserForm from "./07_task2";

// function App() {
//   return (
//     <div>
//       <UserForm />
//     </div>
//   );
// }

// export default App;

//-----------code for 08_lifecycle-methods.js file----
// import React from "react";
// import DataFetcher from "./08_lifecycle-methods";

// function App() {
//   return (
//     <div>
//       <DataFetcher />
//     </div>
//   );
// }

// export default App;

//-----------code for 08_task2.js file----
import React, { useState } from "react";
import LifecycleLogger from "./08_task2";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>React Lifecycle Demo</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Component" : "Show Component"}
      </button>
      {show && <LifecycleLogger />}
    </div>
  );
}

export default App;












