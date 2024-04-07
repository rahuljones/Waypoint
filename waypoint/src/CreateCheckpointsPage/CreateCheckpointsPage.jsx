import React, { useState, useContext } from "react";
import BuildingNameForm from "./BuildingNameForm";
import AddCheckPoint from "./AddCheckPoint";
import CheckpointListElement from "./CheckPointListElement";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './CreateCheckpointsPage.css';




function CreateCheckpointsPage() {
    const nav = useNavigate();
    const [buildingName, setBuildingName] = useState("");
    const [checkPoints, setCheckpoints] = useState(["Front Entrance"]);

    const submitCheckpoints = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/insertnames', {
            namesData: checkPoints
        });
        axios.post('http://localhost:3001/api/insertTitle', {
            NameData: buildingName
        });

        nav(`/desc`);
    };

    return (
        <div className="Background">
            <div className="Container">
                <h2 className="Title">WAYPOINT</h2>
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

        </div>
    );
}

export default CreateCheckpointsPage;