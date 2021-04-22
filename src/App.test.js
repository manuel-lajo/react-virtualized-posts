import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

describe('App component', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('should render app with "Posts App" title`', () => {
    const store = mockStore({ postsReducer: { posts: [] } });

    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    expect(getByText(/Posts App/i)).toBeInTheDocument();
  });
});
