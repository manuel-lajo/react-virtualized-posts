import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import useWindowSize from '../../hooks/useWindowSize';
import Loader from '../../components/Loader';
import VirtualizedList from '../../components/VirtualizedList';
import PostItemRow from '../../components/PostItem/PostItemRow';

const PostPanel = () => {
  // Getting window height for List Virtualization component
  const { height } = useWindowSize();
  const posts = useSelector(state => state.postsReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    // If we already have the posts on redux state, then we don't need to call the api
    if (!posts.length) {
      dispatch(actions.loadPosts());
    }
  }, [dispatch, posts.length]);

  return !posts.length ? (
    <Loader />
  ) : (
    <VirtualizedList
      row={PostItemRow}
      height={height * 0.85}
      width={608}
      itemSize={220}
      itemData={posts}
      itemCount={posts.length}
    />
  );
};

export default PostPanel;
