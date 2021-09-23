import React from 'react';

function VideoPlayer({src="https://www.youtube.com/embed/dQw4w9WgXcQ"}) {
    return (
        <>
            <iframe
            width="919"
            height="525"
            src={src}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
        </>
    );
}

export default VideoPlayer;