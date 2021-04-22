import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import useWindowSize from '../../hooks/useWindowSize';
import VirtualizedList from '../../components/VirtualizedList';
import CommentRow from '../../components/Comment/CommentRow';
import Loader from '../../components/Loader';
import classes from './Post.module.css';

const Post = () => {
  const [newComment, setNewComment] = useState('');

  const history = useHistory();
  // Getting window height for List Virtualization component
  const { height } = useWindowSize();
  const post = useSelector(state => state.postsReducer.selectedPost);
  const dispatch = useDispatch();

  useEffect(() => {
    // If we already have the comments for this post on redux state, then we don't need to call the api
    if (post && post.comments === undefined) {
      dispatch(actions.loadComments(post.id));
    }

    // Empty selected post value when leaving the page
    return () => dispatch(actions.setSelectedPost(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const returnToPanel = () => {
    history.push('/posts');
  };

  const addComment = () => {
    if (newComment) {
      const { id: postId, comments } = post;
      // Getting the new comment id based on last id in the list
      const id = comments[comments.length - 1].id + 1;
      dispatch(
        actions.saveComment({
          postId,
          id,
          name: 'Manuel',
          email: 'manuel@gmail.com',
          body: newComment,
        }),
      );
      setNewComment('');
    }
  };

  return (
    <>
      {!post ? (
        <Redirect to="/posts" />
      ) : (
        <div>
          <button
            className={classes['post-button']}
            type="button"
            onClick={returnToPanel}
          >
            Back to Panel
          </button>
          <h2 className={classes['post-title']}>{post.title}</h2>
          <div className={classes['post-body']}>{post.body}</div>
          <div>
            <div className={classes['add-comment-text-container']}>
              <textarea
                className={classes['add-comment-text']}
                aria-label="new-comment-input"
                value={newComment}
                onChange={event => setNewComment(event.target.value)}
              />
            </div>
            <button
              className={classes['post-button']}
              type="button"
              onClick={addComment}
            >
              Add Comment
            </button>
          </div>
          <h3>Comments</h3>
          <div>
            {post.comments === undefined ? (
              <Loader />
            ) : (
              <VirtualizedList
                row={CommentRow}
                height={height}
                width={608}
                itemSize={90}
                itemData={post.comments}
                itemCount={post.comments.length}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
