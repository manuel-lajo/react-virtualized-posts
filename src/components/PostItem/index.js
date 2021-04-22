import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './PostItem.module.css';

const PostItem = ({ post }) => {
  const { title, body } = post;

  const history = useHistory();
  const dispatch = useDispatch();

  const viewPostDetail = () => {
    dispatch(actions.setSelectedPost(post));
    history.push('/post');
  };

  return (
    <div className={classes['post-item-container']} onClick={viewPostDetail}>
      <h2 className={classes['post-item-title']}>{title}</h2>
      <div className={classes['post-item-body']}>{body}</div>
    </div>
  );
};

export default PostItem;
