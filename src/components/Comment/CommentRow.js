import React from 'react';
import Comment from './';

// Wrapper component to implement List Virtualization for Comments list
const CommentRow = ({ data, index, style }) => (
  <div style={style}>
    <Comment comment={data[index]} />
  </div>
);

export default CommentRow;
