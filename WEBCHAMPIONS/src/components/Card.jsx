import React from 'react';

const Card = ({ post }) => {
    const [isColumnLayout, setIsColumnLayout] = React.useState(false);

    const cardStyles = {
        boxSizing: 'border-box',
        padding: '1%',
        margin: '5rem 0 0 0',
        transition: '0.3s',
        backgroundColor: 'rgba(0, 48, 73,0.85)',
        display: 'flex',
        borderRadius: '58px',
        alignItems: 'center',
        flexDirection: isColumnLayout ? 'column' : 'row',
        gap: '0.5rem',
        width: '50%',
        height: 'auto',
        maxWidth: '600px',
        maxHeight: '400px'
    };

    return (
        <div style={cardStyles}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Card;
