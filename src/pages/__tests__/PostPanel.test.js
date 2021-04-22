import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PostPanel from '../PostsPanel';
import { postsData } from '../../mocks/posts';

describe('PostPanel component', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  it('should render "Loading..." text', () => {
    store = mockStore({ postsReducer: { posts: [], selectedPost: null } });

    const { getByText } = render(
      <Provider store={store}>
        <PostPanel />
      </Provider>,
    );

    expect(getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('should render posts with title and body information', () => {
    store = mockStore({
      postsReducer: {
        posts: [...postsData],
        selectedPost: null,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <PostPanel />
        </BrowserRouter>
      </Provider>,
    );

    expect(getByText(/Title 1/i)).toBeInTheDocument();
    expect(getByText(/body 1/i)).toBeInTheDocument();
    expect(getByText(/Title 2/i)).toBeInTheDocument();
    expect(getByText(/body 2/i)).toBeInTheDocument();
  });
});
