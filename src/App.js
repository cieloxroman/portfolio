import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Starter from './components/Starter';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/start" element={<Starter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
