import { useState } from "react";

import "./App.css";

function App() {
  // let counter = 15;

  const [counter, setCounter] = useState(15);

  function addValue() {
    setCounter(counter + 1);
  }

  function removeValue() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Learning React</h1>
      <h2>counter value : {counter} </h2>
      <button onClick={addValue}> add value: </button>{" "}
      <button onClick={removeValue}>remove value: </button>
    </>
  );
}

export default App;
