import React from 'react';
import classes from './Comment.module.css';

const Comment = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className={classes['comment-container']}>
      <div className={classes['comment-owner']}>
        {name} - {email}
      </div>
      <div>{body}</div>
    </div>
  );
};

export default Comment;
