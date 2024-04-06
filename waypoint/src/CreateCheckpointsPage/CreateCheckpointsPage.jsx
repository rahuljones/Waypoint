import React, { useState, useContext } from "react";
import BuildingNameForm from "./BuildingNameForm";
import { AppContext } from "../../context/AppContext";



function CreateCheckpointsPage(){

    return(
        <div className="Background">
            <h2 className="Title">Waypoint</h2>
            <div className="InputFrame">
                <BuildingNameForm/>
            </div>
            <div className="CheckPointList">

            </div>
            
        </div>
    );
}

export default CreateCheckpointsPage;