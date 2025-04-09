import logo from './logo.svg';
import './App.css';
import React from "react";
import { Link, HashRouter, Route, Routes } from 'react-router-dom';
import Starter from './components/Starter';
import NavBar from './components/NavBar';

function App() {
  /*<HashRouter>
      <div className="App">
        <h1>Hello</h1>
        <NavBar />
        <Routes>
          <Route path="/start" element={<Starter />} />
        </Routes>
      </div>
    </HashRouter>*/
  return (
    <div>
      <h1>Hello</h1>
      <NavBar />
    </div>
  );
}

export default App;
