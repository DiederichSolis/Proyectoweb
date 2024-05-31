import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Champions from './champions/champions.jsx';
import Partidos from './partidos/partidos.jsx';
import Home from './principal.jsx';
import Login from './Login/Login.jsx';
import Admin from './admin/admin.jsx';
import PrivateRoute from './PrivateRoute';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/champions" element={<Champions />} />
                <Route path="/partidos" element={<Partidos />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={
                    <PrivateRoute>
                        <Admin />
                    </PrivateRoute>
                } />
            </Routes>
        </Router>
    );
}

export default App;
