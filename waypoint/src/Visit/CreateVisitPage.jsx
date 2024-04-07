import React, { useState, useContext } from "react";
import BuildingNameForm from "./BuildingNameForm";
import AddCheckPoint from "./AddCheckPoint";
import CheckpointListElement from "./CheckPointListElement";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function CreateVisitPage() {
    const nav = useNavigate();
    const [buildingName, setBuildingName] = useState("");

    
    return (
        <div className="Background">
            <h2 className="Title">WAYPOINT</h2>
            <div className="InputFrame">
                <BuildingNameForm setBuildingName={setBuildingName} />
                
            </div>
            <div className="CheckPointList">
            {checkPoints.map((checkpoint, index) => (
                    <CheckpointListElement key={index} checkpoint={checkpoint} />
                ))}
            </div>
            <button className="SubmitCheckpointsButton" type="Create Checkpoints" onClick={submitCheckpoints}>Create Checkpoints!</button>
        </div>
    );
}

export default CreateCheckpointsPage;