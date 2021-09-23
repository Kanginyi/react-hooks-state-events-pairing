import React from "react";

function Comments({user, comment, handleDelete}) {

    return (
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
            <button onClick={() => handleDelete(user)}>Delete</button>
            
        </div>
    );
}

export default Comments;