import React from 'react';
import { FixedSizeList } from 'react-window';

// Component to implement List Virtualization using react-window library
const VirtualizedList = ({ row, ...listProps }) => (
  <FixedSizeList {...listProps}>{row}</FixedSizeList>
);

export default VirtualizedList;
