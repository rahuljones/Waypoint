import React, { useState } from "react";

function StepsDescriptionForm({ setStepsDescription }) {



  return (
    <form className="StepsForm">
      <input
        className="StepsInput"
        type="text"
        placeholder="Enter Description"
        name="steps"
        onChange={(e) => setStepsDescription(e.target.value)}
        required
      />
    </form>
  );
}

export default StepsDescriptionForm;
