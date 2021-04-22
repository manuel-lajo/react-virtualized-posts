import React from 'react';
import PostItem from './';

// Wrapper component to implement List Virtualization for Posts list
const PostItemRow = ({ data, index, style }) => (
  <div style={style}>
    <PostItem post={data[index]} />
  </div>
);

export default PostItemRow;
