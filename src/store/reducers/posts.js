import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  posts: [],
  selectedPost: null,
};

const setPosts = (state, action) => {
  return updateObject(state, {
    posts: action.posts,
  });
};

const setSelectedPost = (state, action) => {
  return updateObject(state, {
    selectedPost: action.selectedPost,
  });
};

// Setting retrieved comments on Post list & selectedPost
const addComments = (state, action) => {
  let updatedPost;
  const updatedList = state.posts.map(post => {
    if (post.id === action.postId) {
      // Here we use reverse array function since we want last comments on top of the list
      post.comments = [...action.comments.reverse()];
      updatedPost = { ...post };
    }
    return post;
  });
  return updateObject(state, {
    posts: updatedList,
    selectedPost: updatedPost,
  });
};

// Adding new comment on Post list & selectedPost
const saveComment = (state, action) => {
  let updatedPost;
  const updatedList = state.posts.map(post => {
    if (post.id === action.comment.postId) {
      // Here we use unshift function since we want the new comment on top of the list
      post.comments.unshift({ ...action.comment });
      updatedPost = { ...post };
    }
    return post;
  });
  return updateObject(state, {
    posts: updatedList,
    selectedPost: updatedPost,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POSTS:
      return setPosts(state, action);
    case actionTypes.SET_SELECTED_POST:
      return setSelectedPost(state, action);
    case actionTypes.UPDATE_POST:
      return addComments(state, action);
    case actionTypes.SAVE_COMMENT:
      return saveComment(state, action);
    default:
      return state;
  }
};

export default reducer;
