import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Post from '../../pages/Post';
import { postsWithCommentsData, postWithCommentsData } from '../../mocks/posts';

describe('Post component', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  beforeEach(() => {
    store = mockStore({
      postsReducer: {
        posts: [...postsWithCommentsData],
        selectedPost: { ...postWithCommentsData },
      },
    });
  });

  it('should render post information including 2 comments', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Post />
        </BrowserRouter>
      </Provider>,
    );

    expect(getByText(/Title 1/i)).toBeInTheDocument();
    expect(getByText(/body 1/i)).toBeInTheDocument();
    expect(getByText(/Comments/i)).toBeInTheDocument();
    expect(getByText(/user 1 - user1@gmail.com/i)).toBeInTheDocument();
    expect(getByText(/comment 1/i)).toBeInTheDocument();
    expect(getByText(/user 2 - user2@gmail.com/i)).toBeInTheDocument();
    expect(getByText(/comment 1/i)).toBeInTheDocument();
  });

  it('should clear new comment textarea when adding a comment', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Post />
        </BrowserRouter>
      </Provider>,
    );
    const newCommentInput = getByLabelText('new-comment-input');
    userEvent.type(newCommentInput, 'new comment');
    userEvent.click(getByText('Add Comment'));

    expect(newCommentInput.value).toBe('');
  });
});
