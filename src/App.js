import logo from './logo.svg';
import './App.css';
import React from "react";
import { Link, HashRouter, Route, Routes } from 'react-router-dom';
import Starter from './components/Starter';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <h1>Hello</h1>
        <Routes>
          <Route path="/start" element={<Starter />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
