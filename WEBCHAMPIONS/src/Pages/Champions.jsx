import React from 'react';
import NavBar from '../components/NavBar';
import View from '../components/View';
import Footer from '../components/Footer';

const Champions = () => {
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
            <View />
            <Footer />
        </main>
    );
}

export default Champions;
