import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PostItem from '../PostItem';
import { postsData } from '../../mocks/posts';

describe('PostItem component', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('should render post with title and body information', () => {
    const store = mockStore({
      postsReducer: {
        posts: [...postsData],
        selectedPost: null,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <PostItem post={{ title: 'Title 1', body: 'body 1' }} />
        </BrowserRouter>
      </Provider>,
    );

    expect(getByText(/Title 1/i)).toBeInTheDocument();
    expect(getByText(/body 1/i)).toBeInTheDocument();
  });
});
