import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Card from './Card';

const PostsLoader = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://3.129.191.211/api/22952/posts');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                if (!Array.isArray(data)) {
                    throw new Error("Formato de datos incorrecto");
                }
                setPosts(data);
            } catch (error) {
                console.error('Error al cargar los posts:', error);
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1>Error al cargar los posts</h1>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1>No hay posts disponibles</h1>
            </div>
        );
    }

    return (
        <>
            {posts.map(post => (
                <Card key={post.id} post={post} />
            ))}
        </>
    );
};

export default PostsLoader;
