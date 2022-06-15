import "./styles.css";

import React, { useState } from "react";
import ReactDOM from "react-dom";

import { StyleSheetManager } from "styled-components";

import Select from "react-select";

import WindowComponent from "./window";
import SelectComponent from "./form";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

export default function App() {
  const [show, setShow] = useState(false);
  const [newWindow, setNewWindow] = useState(null);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <a onClick={handleClick}>Click me</a>
      {show && (
        <WindowComponent newWindow={newWindow} setNewWindow={setNewWindow}>
          <StyleSheetManager>
            <Select
              isClearable
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
              menuPortalTarget={newWindow ? newWindow.document.body : null}
              isSearchable
              name="color"
              menuPosition={"fixed"}
              menuPlacement={"top"}
              options={options}
              menuShouldScrollIntoView={false}
            />
          </StyleSheetManager>
        </WindowComponent>
      )}
      <div style={{ marginTop: "50px" }}>Status: {show ? "True" : "False"}</div>
    </div>
  );
}
