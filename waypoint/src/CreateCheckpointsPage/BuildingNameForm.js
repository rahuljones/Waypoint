import React, { useState, useContext } from "react";

function BuildingNameForm({ buildingName, OnBuildingNameChange }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.buildingName.value;
    OnBuildingNameChange(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="BuildingNameForm">
      <input
        className="BuildingNameInput"
        type="text"
        placeholder="Enter Building Name"
        name="buildingName"
        onChange={(e) => {
          OnBuildingNameChange(e.target.value);
        }}
        required
      />
    </form>
  );
}

export default BuildingNameForm;