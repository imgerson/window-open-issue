import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "My Chocolates" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const SelectComponent = ({ newWindow }) => {
  if (!newWindow) return null;

  return (
    <Select
      isClearable
      styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
      menuPortalTarget={newWindow.document.body}
      isSearchable
      name="color"
      menuPosition={"fixed"}
      menuPlacement={"top"}
      options={options}
      menuShouldScrollIntoView={false}
    />
  );
};

export default SelectComponent;
