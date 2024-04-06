import React, { useState, useContext } from "react";
import BuildingNameForm from "./BuildingNameForm";
import AddCheckPoint from "./AddCheckPoint";
import CheckpointListElement from "./CheckPointListElement";
import axios from "axios";
import './CreateCheckpointsPage.css';




function CreateCheckpointsPage() {

    const [buildingName, setBuildingName] = useState("");
    const [checkPoints, setCheckpoints] = useState([]);

    const submitCheckpoints = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/insertnames', {
            namesData : checkPoints
        });
        axios.post('http://localhost:3001/api/insertTitle', {
            namesData : buildingName
        });

        const response = axios.get('http://localhost:3001/api/getNames');
        console.log(response);

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
            <button className="SubmitCheckpointsButton" type="Create Checkpoints" onClick={submitCheckpoints}>Create Checkpoints!</button>
        </div>
    );
}

export default CreateCheckpointsPage;