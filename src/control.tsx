import React, { useState, useRef } from "react";
import Select from "react-select";
import styled, { StyleSheetManager } from "styled-components";
import Popout from "react-popout";

const options = [
  { value: "chocolate", label: "My Chocolates" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const SelectComponent = ({ show }) => {
  const nwRef = useRef();

  return (
    <StyleSheetManager target={nwRef.current} disableCSSOMInjections={true}>
      <div ref={nwRef}>
        <Popout isPopout={true}>
          <Select
            options={options}
            //menuPortalTarget={nwRef.current}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          />
        </Popout>
      </div>
    </StyleSheetManager>
  );
};

export default SelectComponent;
