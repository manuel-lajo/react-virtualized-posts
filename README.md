# Posts Application

This is a Web Page application implemented using React, hooks and redux.

## 📜 Features

- Fetching the data from a jsonplaceholder API
- Project setup uses redux (with selectors to manage state and dispatch actions)
- Posts and comments stored on redux state: Only send API request if post or comment information is not already in redux state, this avoids unnecesary calls to the backend.
- Presenting Posts and post's comments using List Virtualization: Since there is a long posts list and potentialy comments list could growth, implementing List Virtualization concept helps a lot to render only list items that are shown on the screen.
- Unit Testing: Most components have unit tests. Other components such as wrappers (Layout, PostItemRow, CommentRow) or auxiliary components used by external libraries (VirtualizedList) are not being tested. Redux state also have unit tests.
- CSS modules
- Prettier

## 💯 How to run

```bash
npm install
npm start
```

## 🦉 Assumptions / Design Decisions / Possible Improvements

- Layout and Loader components could be implemented with more/better detail.
- Error Handling: Since only a couple of GET request are used, error handling was not a critical issue, therefore it is not considered in current implementation.
- Lazy Loading: Lazy loading could be used also with List Virtualization but requires backend support in order to retrive segments of the requested lists.
- Props validation or TypeScript: If the project grows TypeScript will help a lot.
- Static code analysis: Eslint could be configured with more detail.
- Sass or other CSS libraries: Given the project's size we don't have too much styles logic, but Sass and other libraries such as tailwind or styled components would be a great addition.
- Responsive design
