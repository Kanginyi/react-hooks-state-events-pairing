import React from 'react';
import Comments from "./Comments"

function CommentBox({comments}) {
    return (
        <div>
            <h2>{comments.length} Comments</h2>
                {comments.map(comment => {
                    return (
                        <Comments key={comment.id} user={comment.user} comment={comment.comment}/>
                    )
                }
            )}
        </div>
    );
}

export default CommentBox;