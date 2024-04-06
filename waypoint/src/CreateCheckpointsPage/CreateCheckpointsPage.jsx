import React, { useState, useContext } from "react";
import BuildingNameForm from "./BuildingNameForm";
import AddCheckPoint from "./AddCheckPoint";
import CheckpointListElement from "./CheckPointListElement";




function CreateCheckpointsPage() {

    const [buildingName, setBuildingName] = useState("");
    const [checkPoints, setCheckpoints] = useState([]);

    const submitCheckpoints = (e) => {
        e.preventDefault();
        console.log(checkPoints);
      };

    return (
        <div className="Background">
            <h2 className="Title">Waypoint</h2>
            <div className="InputFrame">
                <BuildingNameForm setBuildingName={setBuildingName} />
                <AddCheckPoint checkpoints={checkPoints} setCheckpoints={setCheckpoints} />
            </div>
            <div className="CheckPointList">
            {checkPoints.map((checkpoint, index) => (
                    <CheckpointListElement key={index} checkpoint={checkpoint} />
                ))}
            </div>
            <button type="Create Checkpoints" onClick={submitCheckpoints}>Create</button>
        </div>
    );
}

export default CreateCheckpointsPage;