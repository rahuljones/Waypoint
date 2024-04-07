import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomDropdown from "./CustomDropdown";


function CreateVisitPage() {
    const nav = useNavigate();
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
            console.log("Fetched options");
            try {
                const bname = await axios.get('http://localhost:3001/api/getTitle');
                console.log(bname.data);
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
                //console.log(adjMatrix);   
            } catch (error) {
                console.error('Error fetching options:', error);
            }
        };
    
        fetchMatrix();
    }, [[]]);

    useEffect(() => {
        setNumSteps(path.length - 1);
        setCurStep(1);
    }, [path]);

    const generatePath = async (e, k) => {
        let shortPath = dijkstraShortestPath(adjMatrix, k);
        setPath(shortPath);
        console.log(adjMatrix)
        console.log(path);
        setNumSteps(path.length-1);
        setCurStep(1);
    };
    
    useEffect(() => {
        if (options.length > 0) {
            for (let i = 0; i < options.length; i++) {
                if (options[i] === selectedOption) {
                    generatePath(i);
                    break; // Exit the loop once the condition is met
                }
            }
        }
    }, [selectedOption]);
    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="Background">
            <h2 className="Title">WAYPOINT</h2>
            <h2>{buildingName}</h2>
            <div className="InputFrame">
                
                
            </div>
            <div className="CheckPointList">
            <CustomDropdown options={options} onSelect={handleSelect} text="From"/>
            <text>{displayedText}</text>
            <text>{currentStep}/{numSteps}</text>
            {/*<button onClick={generatePath} style={{ width: '100px', height: '40px' }}></button>*/}
            </div>
        </div>
    );
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    
    enqueue(element, priority) {
        this.queue.push({element, priority});
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