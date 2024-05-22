import React from 'react';
import NavBar from '../components/NavBar';
import PostsLoader from '../components/PostsLoader';

const Semifinal = () => {
    const styles = {
        backgroundColor: 'White',
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
            <PostsLoader />
        </main>
    );
}

export default Semifinal;
