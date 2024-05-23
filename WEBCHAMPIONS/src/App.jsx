import React from 'react';
import './index.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Champions from "./champions/champions.jsx";
import Partidos from './partidos/partidos.jsx';
import Home from  './principal.jsx'



const logo = {
    filter: 'invert(100%)',
    padding: '5%',
    height: '65%',
    width: '7%',
};

const App = () => {
    return (
        <Router>
        <Routes>
       
                <Route path="/" element={<Home />} />
                <Route path="/champions" element={<Champions />} />
                <Route path="/partidos" element={<Partidos />} />
        </Routes>
        </Router>
        
    );
}

export default App;
