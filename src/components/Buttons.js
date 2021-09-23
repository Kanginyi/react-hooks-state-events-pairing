import React, {useState} from 'react';

function Buttons({upvotes, downvotes}) {
    const [upvote, setUpvotes] = useState(upvotes);
    const [downvote, setDownvotes] = useState(downvotes);

    function handleLikes() {
        return setUpvotes(upvote => upvote + 1);
    }

    function handleDislikes() {
        return setDownvotes(downvote =>  downvote + 1);
    }
 
    return (
        <>
            <button onClick={handleLikes}>{upvote} 👍</button>
            <button onClick={handleDislikes}>{downvote} 👎</button>
        </>
    );
}

export default Buttons;