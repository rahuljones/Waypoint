import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateCheckpointsPage from './CreateCheckpointsPage/CreateCheckpointsPage';




function App() {

  const [buildingName, setBuildingName] = useState("");
  const [checkPoints, setCheckpoints] = useState([]);

  return (
    <Router>
      <div>
      <AppContext.Provider value={{ buildingName, setBuildingName, checkPoints, setCheckpoints }}>
        <Routes>
          <Route path="/" element={<CreateCheckpointsPage />} />
        </Routes>
      </AppContext.Provider>
      </div>
    </Router>
  );
}

export default App;
