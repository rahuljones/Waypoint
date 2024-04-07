import React, { useState, useEffect } from "react";
import axios from "axios";
import StepsDescriptionForm from "./StepsDescriptionForm";
import CustomDropdown from "./CustomDropdown";
import TimeEstimate from "./TimeEstimate";
import './CreatePathPage.css';

function CreatePathPage() {
    const [stepsDescription, setStepsDescription] = useState("");
    const [checkPoints, setCheckpoints] = useState([]);
    const [options, setOptions] = useState([]);
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [timeestimate, setTimeEstimate] = useState(0);
    const [adjArray, setAdjArray] = useState([[]]);
    const [readyToCreate, setReadiness] = useState(false);
    const [buildingName, setBuildingName] = useState("");

    useEffect(() => {
        const fetchOptions = async () => {
            console.log("Fetched options");
            try {
                const bname = await axios.get('http://localhost:3001/api/getTitle');
                console.log(bname.data);
                setBuildingName(bname.data);
                const response = await axios.get('http://localhost:3001/api/getNames');
                setOptions(response.data);
                let matrix = new Array(response.data.length).fill(null).map(() => new Array(response.data.length).fill(null));
                for(let i = 0; i<response.data.length; i++){
                    matrix[i][i]= [null,0]
                }
                setAdjArray(matrix);
                let name = await axios.get('http://localhost:3001/api/getTitle');
                setBuildingName(name.data);
                console.log("This is the data"+name.data);
            } catch (error) {
                console.error('Error fetching options:', error);
            }
        };
    
        fetchOptions();
    }, []);

    const addStep = async (e) => {
        e.preventDefault();
        for(let i = 0; i<options.length; i++){
            if(options[i]===selectedOption1){
                for(let j = 0; j<options.length; j++){
                    if(options[j]===selectedOption2){
                        let temp = adjArray;
                        temp[i][j] = [stepsDescription, timeestimate];
                        setAdjArray(temp);
                        console.log(stepsDescription);
                        console.log(timeestimate);
                        const mater = await axios.get('http://localhost:3001/api/getMatrix');
                        console.log(mater.data);
                    }
                }
            }
        }
        if(isPathFromFrontEntrance(adjArray)){
            setReadiness(true);
        }
    };
    function isPathFromFrontEntrance(matrix) {
        // Helper function for DFS traversal
        function dfs(node) {
            visited[node] = true; // Mark the node as visited
            for (let i = 0; i < matrix[node].length; i++) {
                if (matrix[node][i] !== null && !visited[i]) {
                    dfs(i); // Recursively visit adjacent nodes
                }
            }
        }
      
        // Initialize visited array
        const visited = new Array(matrix.length).fill(false);
      
        // Start DFS traversal from front entrance node
        dfs(0);
      
        // Check if all nodes have been visited
        for (let i = 0; i < visited.length; i++) {
            if (!visited[i]) {
                return false; // If any node is not visited, return false
            }
        }
      
        return true; // If all nodes are visited, return true
      }

    const finalSubmit = async (e) => {
        e.preventDefault();
        if(readyToCreate){
            axios.post('http://localhost:3001/api/insertMatrix', {
            stepsData : adjArray
            });
            console.log("Created");
        }
        else{
            console.log("NOT FULL ENOUGH");
        }
    };

    const handleSelect1 = (option) => {
        setSelectedOption1(option);
    };

    const handleSelect2 = (option) => {
        setSelectedOption2(option);
    };

    return (
        <div className="Background">
            <h2 className="Title">WAYPOINT</h2>
            <h3 className="BuildingName">{buildingName}</h3>
            <div className="DropdownFrame">
                <CustomDropdown options={options} onSelect={handleSelect1} text="From"/>
                <CustomDropdown options={options} onSelect={handleSelect2} text="To" />
            </div>
            <StepsDescriptionForm setStepsDescription={setStepsDescription} />
            <TimeEstimate setStepsDescription={setTimeEstimate} />
            <button onClick={addStep}>Submit</button>
            <button onClick={finalSubmit} style={{ backgroundColor: readyToCreate ? 'green' : 'red' }}>Create</button>
        </div>
    );
}

export default CreatePathPage;
