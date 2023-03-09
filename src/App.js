import { data } from "./data/data";
import { useEffect, useRef, useState } from "react";
import './App.css'
import expandImg from './images/expand.png'
import collapseImg from './images/collapse.png'

const Post = ({ author, text, replies }) => {
  const [showReplies, setShowReplies] = useState(true)
  const post = useRef()

  return (
    <>
      <div ref={post} className="post-main-container mt-2" style={{ paddingLeft: "2rem"}}>
        
        {/* Collapse/Expand Btn + Avatar + Username */}
        <div className="collapse-container d-flex align-items-center">
          {!showReplies && <span><img style={{cursor: "pointer"}} width="25px" onClick={() => setShowReplies(true)} src={expandImg} /></span>}
          {showReplies && <span><img style={{cursor: "pointer"}} width="25px" onClick={() => setShowReplies(false)} src={collapseImg} /></span>}
          <span>
            <img className="" width="40px" src={author.avatar} />
          </span>
          <span className="fw-bold">{author.name}</span>
        </div>

        {/* Post text */}
        <div style={{ paddingLeft: "1rem" }}>{text}</div>
        
        {/* Replies */}
        {showReplies && replies &&
          replies.map((reply) => {
            return (
              <Post
                author={reply.author}
                text={reply.text}
                replies={reply.replies}
              />
            );
          })}
      </div>
    </>
  );
};

function App() {
  return (
    <div className="">
      {data.map((post) => {
        return (
          <Post author={post.author} text={post.text} replies={post.replies} />
        );
      })}
    </div>
  );
}

export default App;
