import React from "react";

function Comment({deleteComment, commentId, text}) {
  return (
    <div>
      {text}
      <button onClick={() => deleteComment(commentId)}>X</button>
    </div>
  )

}

export default Comment;