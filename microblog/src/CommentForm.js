import React, {useState} from "react";


function CommentForm({addComment}) {
    const [text, setText] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();
        addComment(text);
        setText("");
    }

    function handleChange(evt) {
        setText(evt.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                id="commentform-text"
                type="text"
                placeholder="New Comment"
                value={text}
                onChange={handleChange}
            />
            <button>Add Comment</button>
        </form>
    );





}

export default CommentForm;