import React from 'react';
import NavBar from '../components/NavBar';
import Video from '../components/Video';

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
            <NavBar />
            <Video />
        </main>
    );
}

export default Home;
