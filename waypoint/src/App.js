import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateCheckpointsPage from './CreateCheckpointsPage/CreateCheckpointsPage';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CreateCheckpointsPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
