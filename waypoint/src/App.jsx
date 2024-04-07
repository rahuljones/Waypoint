import React, { useState} from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateCheckpointsPage from './CreateCheckpointsPage/CreateCheckpointsPage';
import CreatePathPage from "./CreatePath/CreatePathPage";




function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CreatePathPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
