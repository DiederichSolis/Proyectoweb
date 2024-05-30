import React from "react";
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    const navbar = {
        position: 'fixed',
        left: '27%',
        top: '20px',
        display: 'flex',
        flexDirection: 'column',
        height: '6vh',
        width: '50%',
        padding: '1rem',
        alignItems: 'center', 
        background: 'rgba(0, 0, 0, 0.7)', 
        color: '#fff',
        borderRadius: '50px',
        zIndex: 1000,
    };

    const navbarLinks = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        margin: '0 20%',
        gap: '30%', 
    };

    const navbarLink = {
        color: '#fff',
        fontFamily: 'Century Gothic, sans-serif',
        fontSize: '2rem', 
        marginBottom: '2rem', 
        fontWeight: 'bold',
    };

    return (
        <nav style={navbar}>
            <div style={navbarLinks}>
                <a href='/' style={navbarLink}>HOME</a>
                <a href='/champions' style={navbarLink}>CHAMPIONS</a>
                <a href='/partidos' style={navbarLink}>SEMIFINAL</a>
            </div>
        </nav>
    );
};

const NavBar = () => {
    const navbar = {
        position: 'fixed',
        left: '50px',
        bottom: '27%',
        display: 'flex',
        flexDirection: 'column',
        height: '25vh',
        width: '150px',
        padding: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.8)', 
        color: '#fff',
        borderRadius: '50px',
        zIndex: 1000, 
    };

    const navbarLinks = {
        listStyle: 'none',
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 0,
    };

    const iconStyles = {
        color: 'white',
        marginLeft: '10px',
        marginRight: '10px',
        textDecoration: 'none',
        fontSize: '2.5em' 
    };

    return (
        <nav style={navbar}>
            <a href="https://www.instagram.com/championsleague" style={iconStyles}>
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/uefachampionsleague" style={iconStyles}>
                <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCpcTrCXblq78GZrTUTLWeBw" style={iconStyles}>
                <i className="fab fa-youtube"></i>
            </a>
        </nav>
    );
};

const IMAGEVIEW = () => {
    return (
        <main>
              <img src='https://cache.pressmailing.net/thumbnail/story_hires/847a36b8-1a27-41ad-95f2-f177d13301ec/UCL_Keyvisual.jpg.jpg' alt="video" width="100%" height="100%" />
          
        </main>
    );
};

const Home = () => {
    const styles = {
        backgroundColor: 'rgba(30, 30, 30, 1)', 
        overflow: 'hidden', 
        minHeight: '100vh', 
        display: 'block',
        position: 'relative',
        margin: 0,
        padding: 0,
    };

    return (
        <main style={styles}>
            <Navbar1 />
            <NavBar />
            <IMAGEVIEW />
        </main>
    );
};

export default Home;
