import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Comment from '../Comment';

describe('Comment component', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('should render comment information', () => {
    const store = mockStore();

    const { getByText } = render(
      <Provider store={store}>
        <Comment
          comment={{ name: 'user 1', email: 'user1@gmail.com', body: 'body 1' }}
        />
      </Provider>,
    );

    expect(getByText(/user 1/i)).toBeInTheDocument();
    expect(getByText(/user1@gmail.com/i)).toBeInTheDocument();
    expect(getByText(/body 1/i)).toBeInTheDocument();
  });
});
