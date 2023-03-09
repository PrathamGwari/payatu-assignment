import React from "react";

const Post = ({author, text, replies}) => {
    return (
        <>
            <div className="container">
                <div className="fw-bold">{author.name}</div>
                <div>{text}</div>
                <div>{replies.length} replies</div>
                {replies.forEach((reply) => {
                    return <Post author={reply.author} text={reply.text} replies={reply.replies}/>
                })}
            </div>
        </>
    )
}

export default Post