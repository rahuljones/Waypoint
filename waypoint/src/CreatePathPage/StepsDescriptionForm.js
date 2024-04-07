import React, { useState, useEffect } from "react";

function StepsDescriptionForm({ setStepsDescription, resetStepsDescription, setResetStepsDescription }) {
    const [stepsInput, setStepsInput] = useState("");

    useEffect(() => {
        if (resetStepsDescription) {
            setStepsInput(""); // Reset textarea value
            setResetStepsDescription(false); // Reset resetStepsDescription state
        }
    }, [resetStepsDescription, setResetStepsDescription]);

    const handleInputChange = (e) => {
        setStepsInput(e.target.value);
        setStepsDescription(e.target.value);
    };

    return (
        <form className="StepsForm">
            <textarea
                className="StepsInput"
                placeholder="Write a description of how to get from the first checkpoint you selected to the second checkpoint you selected. Shorter segments are better! We’ll let you know when you have input enough connections for us to generate a map"
                name="steps"
                value={stepsInput}
                onChange={handleInputChange}
                required
            />
        </form>
    );
}

export default StepsDescriptionForm;
