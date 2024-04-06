import React, { useState, useContext } from "react";

function BuildingNameForm({setBuildingName}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.buildingName.value;
    setBuildingName(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="BuildingNameForm">
      <input
        className="BuildingNameInput"
        type="text"
        placeholder="Enter Building Name"
        name="buildingName"
        onChange={(e) => {
          setBuildingName(e.target.value);
        }}
        required
      />
    </form>
  );
}

export default BuildingNameForm;