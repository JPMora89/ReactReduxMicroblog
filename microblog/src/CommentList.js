import React from "react";
import Comment from "./Comment";

function CommentList({comments, deleteComment}) {
    return (
        <div>
            {comments.map(comment => (
                <Comment
                    key={comment.id}
                    commentId={comment.id}
                    text={comment.text}
                    deleteComment={deleteComment}
                />
            ))}
        </div>
    );
}

export default CommentList;
