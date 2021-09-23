import video from "../data/video.js";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer.js";
import Title from "./Title.js";
import Buttons from "./Buttons.js";
import CommentBox from "./CommentBox.js";


const {title, embedUrl, views, createdAt, upvotes, downvotes, comments} = video;

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const clickHandler = () => {
    setIsVisible(prevState => !prevState);
  }

  return (
    <div className="App">
      <VideoPlayer src={embedUrl} />
      <Title title={title} views={views} createdAt={createdAt}/>
      <Buttons upvotes={upvotes} downvotes={downvotes} clickHandler={clickHandler}/>
      {isVisible ? <CommentBox comments={comments}/> : null}
    </div>
  );
}

export default App;

// const video = {
//   id: 1,
//   title: "React Today and Tomorrow and 90% Cleaner React With Hooks",
//   embedUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
//   views: 730707,
//   createdAt: "Oct 26, 2018",
//   upvotes: 9210,
//   downvotes: 185,
//   comments: [
//     {
//       id: 1,
//       user: "duanebot",
//       comment: "first!",
//     },
//     {
//       id: 2,
//       user: "gaeron",
//       comment: "What a great tutorial!",
//     },
//   ],
// };

