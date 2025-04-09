import React from 'react';
import Starter from './Starter';
import { Route, Routes } from 'react-router-dom';
import { Link, HashRouter } from 'react-router-dom';

const NavBar = () => {
    return(
        <HashRouter>
            <div>
                <Link to="start">Go to start</Link>
                <Routes>
                    <Route path="start" element={<Starter />} />
                </Routes>
            </div>
        </HashRouter>
    )
}

export default NavBar;