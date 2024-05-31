import React from 'react';
import './index.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Champions from "./champions/champions.jsx";
import Partidos from './partidos/partidos.jsx';
import Home from  './principal.jsx'
import Login from './Login/Login.jsx'


const App = () => {
    return (
        <Router>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/champions" element={<Champions />} />
                <Route path="/partidos" element={<Partidos />} />
                <Route path='/Login' element={<Login />} />

        </Routes>
        </Router>
        
    );
}

export default App;
