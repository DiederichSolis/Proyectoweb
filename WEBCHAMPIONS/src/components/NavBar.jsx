import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/multimedia/champions.png';

const NavBar = () => {
    const styles = {
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        background: 'linear-gradient(to bottom, rgba(10, 10, 10, 1), rgba(10, 10, 10, 0))',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0%',
        alignItems: 'center',
        height: '15vh',
        width: '100%',
    };

    const logoStyle = {
        filter: 'invert(100%)',
        padding: '5%',
        height: '65%',
        width: '7%',
    };

    const titulos = {
        fontFamily: 'Century Gothic, sans-serif',
        fontSize: '1.5em',
        fontWeight: 'bold',
        margin: '0',
        padding: '9%',
        color: 'white',
        textDecoration: 'none',
    };

    const titulos1 = {
        fontFamily: 'Century Gothic, sans-serif',
        fontSize: '1.5em',
        fontWeight: 'bold',
        margin: '0',
        padding: '15%',
        color: 'white',
        textDecoration: 'none',
    };

    return (
        <nav style={styles}>
            <img src={logo} alt="logo" width="40" height="40" style={logoStyle} />
            <Link to="/" style={titulos}>HOME</Link>
            <Link to="/champions" style={titulos}>CHAMPIONS</Link>
            <Link to="/semifinal" style={titulos1}>SEMIFINAL</Link>
        </nav>
    );
}

export default NavBar;
