import React from 'react';

function Title({title, views, createdAt}) {
    return (
        <header>
            <h1>{title}</h1>
            <h5>{views} Views | Uploaded {createdAt}</h5>
        </header>
    );
}

export default Title;