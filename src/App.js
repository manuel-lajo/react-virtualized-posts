import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import PostsPanel from './pages/PostsPanel';
import Post from './pages/Post';
import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes['app-container']}>
      <Layout>
        <Switch>
          <Route path="/posts" exact component={PostsPanel} />
          <Route path="/post" exact component={Post} />
          <Redirect to="/posts" />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
