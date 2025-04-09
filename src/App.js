import logo from './logo.svg';
import './App.css';
import React from "react";
import { Link, HashRouter as Router, Route, Routes } from 'react-router-dom';
import Starter from './components/Starter';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Router basename="/portfolio">
        <nav>
          <Link to="/start">Go to start page</Link>
        </nav>
        <Routes>
          <Route path="/start" element={<Starter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
