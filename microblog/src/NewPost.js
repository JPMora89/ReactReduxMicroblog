import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {sendPost} from "./posts";
import PostForm from "./PostForm";

function NewPost() {
    const dispatch = useDispatch();
    const history = useHistory();

    function addPost({title, description, body}) {
        dispatch(sendPost(title, description, body));
        history.push("/");
    }

    function cancelRedirect() {
        history.push("/");
    }

    return (
        <div>
            <h1>New Post</h1>
            <PostForm addPost={addPost} cancelRedirect={cancelRedirect} />
        </div>
    );
}

export default NewPost;