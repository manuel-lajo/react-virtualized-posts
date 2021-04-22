import reducer from '../posts';
import * as actionTypes from '../../actions/actionTypes';
import {
  postsData,
  postData,
  commentsData,
  postsWithCommentsData,
  postWithCommentsData,
  commentData,
} from '../../../mocks/posts';

describe('posts reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      posts: [],
      selectedPost: null,
    };
  });

  it('should return the initial state', () => {
    const state = undefined;
    const action = {};
    const expected = initialState;

    const received = reducer(state, action);

    expect(received).toEqual(expected);
  });

  it('should set posts', () => {
    const state = initialState;
    const action = {
      type: actionTypes.SET_POSTS,
      posts: [...postsData],
    };
    const expected = {
      posts: postsData,
      selectedPost: null,
    };

    const received = reducer(state, action);

    expect(received).toEqual(expected);
  });

  it('should set selectedPost', () => {
    const state = initialState;
    const action = {
      type: actionTypes.SET_SELECTED_POST,
      selectedPost: { ...postData },
    };
    const expected = {
      posts: [],
      selectedPost: postData,
    };

    const received = reducer(state, action);

    expect(received).toEqual(expected);
  });

  it('should update post with comments', () => {
    const state = {
      posts: [...postsData],
      selectedPost: { ...postData },
    };
    const action = {
      type: actionTypes.UPDATE_POST,
      comments: commentsData,
      postId: 1,
    };
    const expected = {
      posts: postsWithCommentsData.map(item => ({
        ...item,
        comments: item.comments ? [...item.comments.reverse()] : undefined,
      })),
      selectedPost: {
        ...postWithCommentsData,
        comments: postWithCommentsData.comments.reverse(),
      },
    };

    const received = reducer(state, action);

    expect(received).toEqual(expected);
  });

  it('should save comment', () => {
    const state = {
      posts: [...postsWithCommentsData],
      selectedPost: { ...postWithCommentsData },
    };
    const action = {
      type: actionTypes.SAVE_COMMENT,
      comment: commentData,
    };
    const expectedPost = {
      ...postsWithCommentsData[0],
      comments: [commentData, ...postsWithCommentsData[0].comments.reverse()],
    };
    const expected = {
      posts: [expectedPost, { ...postsWithCommentsData[1] }],
      selectedPost: expectedPost,
    };

    const received = reducer(state, action);

    expect(received).toEqual(expected);
  });
});
