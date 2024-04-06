import React, { useState } from "react";
import BuildingNameForm from "./BuildingNameForm";

function CreateCheckpointsPage(){
    const [buildingName, setBuildingName] = useState("");

    return(
        <div className="Background">
            <h2 className="Title">Waypoint</h2>
            <div className="InputFrame">
                <BuildingNameForm buildingName={buildingName} OnBuildingNameChange={setBuildingName}/>
                <AddCheckpoint/>
            </div>
            <div className="CheckPointList">

            </div>
            
        </div>
    );
}

export default CreateCheckpointsPage;