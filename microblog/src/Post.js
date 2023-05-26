import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { getPostFromAPI, sendCommentToAPI, updatePostInAPI, removeCommentFromAPI, removePostFromAPI, sendVoteToAPI } from "./posts";
import PostForm from "./PostForm";
import DisplayPost from "./DisplayPost";


function Post(props) {

    const [isEditing, setIsEditing] = useState(false);
    const postId = Number(useParams().postId);
    const history = useHistory();
    const post = useSelector(st => st.posts[postId]);
    const dispatch = useDispatch();
  
  
    useEffect(function loadPostWhenPostOrIdChanges() {
      async function getPost() {
        dispatch(getPostFromAPI(postId));
      }
      if (!post) {
        getPost();
      }
    }, [dispatch, postId, post]);
  
  
    function toggleEdit() {
      setIsEditing(edit => !edit);
    }
  
  
    function edit({ title, description, body }) {
      dispatch(updatePostInAPI(
        postId,
        title,
        description,
        body
      ));
  
      toggleEdit();
    }
  
  
    function deletePost() {
      dispatch(removePostFromAPI(postId));
      history.push("/");
    }
  
  
    function vote(direction) {
      dispatch(sendVoteToAPI(postId, direction));
    }
  
  
    function addComment(text) {
      dispatch(sendCommentToAPI(postId, text));
    }
  
  
    function deleteComment(commentId) {
      dispatch(removeCommentFromAPI(postId, commentId));
    }
  
  
    if (!post) return <p>Loading</p>;
  
    return (
      <div className="Post">
  
        {isEditing
          ? <PostForm post={post} save={edit} cancel={toggleEdit} />
          : <DisplayPost post={post}
                          toggleEdit={toggleEdit}
                          deletePost={deletePost}
                           />}
  
        <section className="Post-comments mb-4">
          <h4>Comments</h4>
          <CommentList comments={post.comments}
                        deleteComment={deleteComment} />
          <CommentForm addComment={addComment} />
        </section>
  
      </div>
    );
  }
  
  export default Post;