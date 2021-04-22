import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loadPosts = () => {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(response => {
      dispatch(setPosts(response.data));
    });
  };
};

const setPosts = posts => {
  return {
    type: actionTypes.SET_POSTS,
    posts,
  };
};

export const setSelectedPost = selectedPost => {
  return {
    type: actionTypes.SET_SELECTED_POST,
    selectedPost,
  };
};

// Retrieve only the comments for an specific Post
export const loadComments = postId => {
  return dispatch => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => {
        dispatch(updatePost(response.data, postId));
      });
  };
};

// Update Post on list & selectedPost with the list of comments
const updatePost = (comments, postId) => {
  return {
    type: actionTypes.UPDATE_POST,
    comments,
    postId,
  };
};

// Adding the comment only on redux state (Post list & selectedPost)
export const saveComment = comment => {
  return {
    type: actionTypes.SAVE_COMMENT,
    comment,
  };
};
