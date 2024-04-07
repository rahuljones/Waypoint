import React, { useState } from "react";

function StepsDescriptionForm({ setStepsDescription }) {



  return (
    <form className="StepsForm">
      <textarea
        className="StepsInput"
        placeholder="Write a description of how to get from the first checkpoint you selected to the second checkpoint you selected. Shorter segments are better! We’ll let you know when you have input enough connections for us to generate a map"
        name="steps"
        onChange={(e) => setStepsDescription(e.target.value)}
        required
      />
    </form>
  );
}

export default StepsDescriptionForm;
