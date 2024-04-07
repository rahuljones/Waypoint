import React, { useState, useEffect } from "react";

function TimeEstimate({ setStepsDescription, resetTimeEstimate, setResetTimeEstimate }) {
    const [timeInput, setTimeInput] = useState("");

    useEffect(() => {
        if (resetTimeEstimate) {
            setTimeInput(""); // Reset input value
            setResetTimeEstimate(false); // Reset resetTimeEstimate state
        }
    }, [resetTimeEstimate, setResetTimeEstimate]);

    const handleInputChange = (e) => {
        setTimeInput(e.target.value);
        setStepsDescription(e.target.value);
    };

    return (
        <form className="TimeForm">
            <input
                className="TimeInput"
                type="number"
                placeholder="Time estimate in seconds"
                name="time"
                value={timeInput}
                onChange={handleInputChange}
                required
            />
        </form>
    );
}

export default TimeEstimate;
