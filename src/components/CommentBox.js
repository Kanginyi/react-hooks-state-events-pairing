import React, {useState} from 'react';
import Comments from "./Comments"

function CommentBox({comments}) {
    const [aComment, setAComment] = useState(comments);

    const handleDelete = (clickedComment) => {
        console.log(clickedComment);
        setAComment(prevArray => prevArray.filter(comment => comment.user !== clickedComment))
    }

    return (
        <div>
            <h2>{aComment.length} Comments</h2>
                {aComment.map(comment => {
                    return (
                        <Comments
                            handleDelete={handleDelete}
                            key={comment.id}
                            user={comment.user}
                            comment={comment.comment}
                        />
                    )
                }
            )}
        </div>
    );
}

export default CommentBox;