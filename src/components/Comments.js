import React, { useState } from 'react';

function Comments({comments}) {
    const [isVisible, setIsVisible] = useState(false);

    function hideComments() {
        if (isVisible === "Hide Comments") {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }

    return (
        <div>
            <br></br>
            <button onClick={hideComments}>{!isVisible ? "Hide Comments" : "Show Comments"}</button>
            <hr></hr>
            <div>
                <h2>{comments.length} Comments</h2>
                {comments.map(comment => {
                    return (
                        <>
                            <h3 key={comment.id}>{comment.user}</h3>
                            <p>{comment.comment}</p>
                        </>
                    )
                })}
            </div>
        </div>
    );
}

export default Comments;