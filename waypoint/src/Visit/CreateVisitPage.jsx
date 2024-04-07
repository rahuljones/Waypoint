import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomDropdown from "./CustomDropdown";
import './CreateVisitPage.css';

function CreateVisitPage() {
    const [buildingName, setBuildingName] = useState("Title");
    const [options, setOptions] = useState([]);
    const [adjMatrix, setMatrix] = useState([[]]);
    const [path, setPath] = useState([0]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [displayedText, setDisplayedText] = useState("Pick a destination!");
    const [numSteps, setNumSteps] = useState(1);
    const [currentStep, setCurStep] = useState(0);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const bname = await axios.get('http://localhost:3001/api/getTitle');
                setBuildingName(bname.data);
                const response = await axios.get('http://localhost:3001/api/getNames');
                setOptions(response.data);
            } catch (error) {
                console.error('Error fetching options:', error);
            }
        };

        fetchOptions();
    }, []);

    useEffect(() => {
        const fetchMatrix = async () => {
            try {
                const bname = await axios.get('http://localhost:3001/api/getTitle');
                setBuildingName(bname.data);
                const response = await axios.get('http://localhost:3001/api/getMatrix');
                setMatrix(response.data);
            } catch (error) {
                console.error('Error fetching matrix:', error);
            }
        };

        fetchMatrix();
    }, []);

    useEffect(() => {
        if (options === null) {
            console.log("NULL");
            return;
        }
        if (options.length > 0) {
            for (let i = 0; i < options.length; i++) {
                if (options[i] === selectedOption) {
                    generatePath(i);
                    break;
                }
            }
        }
    }, [options, selectedOption]);

    useEffect(() => {
        setNumSteps(path.length - 1);
        setCurStep(1);
        if (selectedOption !== "Front Entrance" && path !== 0 && path !== null && path !== [0]) {
            console.log(adjMatrix[path[0]][path[1]]);
            try {
                if (adjMatrix[path[0]][path[1]] !== null) {
                    setDisplayedText(adjMatrix[path[0]][path[1]][0]);
                }
            } catch (error) {
                console.log("error");
            }

        }
        console.log(path);
        console.log(adjMatrix);
    }, [path]);

    useEffect(() => {
        if (selectedOption !== "Front Entrance" && path !== 0 && path !== null && path !== [0] && currentStep > 0) {
            try {
                setDisplayedText((adjMatrix[path[currentStep - 1]][path[currentStep]])[0]);
            } catch (error) {
                console.log("error");
            }

        }
    }, [currentStep]);

    const generatePath = async (k) => {
        let shortPath = dijkstraShortestPath(adjMatrix, k);
        setPath(shortPath);
        setNumSteps(shortPath.length - 1);
        setCurStep(1);
        //setDisplayedText(adjMatrix[0][])
    };

    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    function advanceStep() {
        if (currentStep < numSteps) {
            setCurStep(currentStep + 1);
        }
        else {
            setDisplayedText("You're Here!")
        }
    }

    return (
        <div className="Background">
            <div className="Container">
                <h2 className="Title">WAYPOINT</h2>
                <h2 className="BuildingName">{buildingName}</h2>
                <CustomDropdown options={options} onSelect={handleSelect} text="From" />
                <text className="InstructionDisplay">{displayedText}</text>
                <div className="AdvanceDiv">
                    <button className="AdvanceBtn" onClick={advanceStep} >&gt;</button>
                    <label className="progressLabel">{currentStep}/{numSteps}</label>
                </div>
            </div>

        </div>
    );
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        this.queue.push({ element, priority });
        this.sort();
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.shift().element;
        }
        return null;
    }

    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function dijkstraShortestPath(graph, targetNode) {
    const numNodes = graph.length;
    const distances = Array(numNodes).fill(Infinity);
    const predecessor = Array(numNodes).fill(null);
    const pq = new PriorityQueue();

    distances[0] = 0;
    pq.enqueue(0, 0);

    while (!pq.isEmpty()) {
        const u = pq.dequeue();

        if (u === targetNode) {
            const path = [];
            let node = u;
            while (node !== null) {
                path.unshift(node);
                node = predecessor[node];
            }
            return path;
        }

        for (let v = 0; v < numNodes; v++) {
            const weight = graph[u][v] ? graph[u][v][1] : 0;
            if (weight !== 0) {
                const alt = distances[u] + weight;
                if (alt < distances[v]) {
                    distances[v] = alt;
                    predecessor[v] = u;
                    pq.enqueue(v, alt);
                }
            }
        }
    }
    return null;
}
export default CreateVisitPage;
