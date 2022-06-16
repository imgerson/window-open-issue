import "./styles.css";

import React, { useState } from "react";

import SelectComponent from "./control";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <a onClick={() => setShow(!show)}>Click me</a>
      {show && <SelectComponent show={show} />}
      <div style={{ marginTop: "50px" }}>Status: {show ? "True" : "False"}</div>
    </div>
  );
}
