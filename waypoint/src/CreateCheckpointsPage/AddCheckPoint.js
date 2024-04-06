import React, { useState, useContext } from "react";

function AddCheckPoint({checkpoints, setCheckpoints }) {

    const [checkpointName, setCheckpointName] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkpointName.trim() !== "") { // Check if checkpointName is not empty
          setCheckpoints(prevCheckpoints => [...prevCheckpoints, checkpointName]); // Add checkpointName to checkpoints array
          setCheckpointName(""); // Clear the input field
        }
      };

      return (
        <form onSubmit={handleSubmit} className="AddCheckpointForm">
          <input
            className="BuildingNameInput"
            type="text"
            placeholder="Enter Checkpoint Name"
            name="checkpointName"
            value={checkpointName} // Bind input value to checkpointName state
            onChange={(e) => setCheckpointName(e.target.value)} // Update checkpointName state on input change
          />
          <button type="submit">Create</button> {/* Button to create checkpoint */}
        </form>
      );
}

export default AddCheckPoint;