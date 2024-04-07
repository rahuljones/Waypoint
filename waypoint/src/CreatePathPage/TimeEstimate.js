import React, { useState } from "react";

function TimeEstimate({ setStepsDescription }) {

  return (
    <form className="TimeForm">
      <input
        className="TimeInput"
        type="number"
        placeholder="Time estimate in seconds"
        name="time"
        onChange={(e) => setStepsDescription(e.target.value)}
        required
      />
    </form>
  );
}

export default TimeEstimate;
