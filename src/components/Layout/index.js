import React from 'react';
import classes from './Layout.module.css';

// Component for app layout; here we could have a Toolbar or Sidebar, Backdrop, etc.
const Layout = ({ children }) => (
  <main>
    <h1 className={classes['layout-title']}>Posts App</h1>
    {children}
  </main>
);

export default Layout;
