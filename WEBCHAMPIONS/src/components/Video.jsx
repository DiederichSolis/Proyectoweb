import React from 'react';
import videoSrc from '../assets/multimedia/championsalb.mp4';

const Video = () => {
    return (
        <main>
            <video width="100%" height="100%" autoPlay loop playsInline volume={1}>
                <source src={videoSrc} type="video/mp4" />
            </video>
        </main>
    );
}

export default Video;
