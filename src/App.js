import logo from './logo.svg';
import './App.css';
import React from "react";
import { Link, HashRouter as Router, Route, Routes } from 'react-router-dom';
import Starter from './components/Starter';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <HashRouter>
          <Route path="/start" component={Starter} />
        </HashRouter>
    </div>
  );
}

export default App;
