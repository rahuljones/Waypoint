import React, { useState} from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateCheckpointsPage from './CreateCheckpointsPage/CreateCheckpointsPage';
import CreatePathPage from "./CreatePathPage/CreatePathPage";
import CreateVisitPage from "./Visit/CreateVisitPage"




function App() {

  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<CreateCheckpointsPage/>} />
          <Route path="/desc" element={<CreatePathPage/>} />
          <Route path="/visit" element={<CreateVisitPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
