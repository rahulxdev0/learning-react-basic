import React, { useRef } from "react";
import MyInput from "./MyInput";

function App() {
  const inputRef = useRef();
  console.log(inputRef);

  return (
    <div>
      <h2>useImperativeHandle Example</h2>
      <MyInput ref={inputRef} />
      <br />
      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
        <button onClick={() => inputRef.current.clear()}>Clear Input</button>
      </div>
    </div>
  );
}

export default App;
