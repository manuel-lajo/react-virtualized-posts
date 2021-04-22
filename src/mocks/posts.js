export const postsData = [
  {
    userId: 1,
    id: 1,
    title: 'Title 1',
    body: 'body 1',
  },
  {
    userId: 1,
    id: 2,
    title: 'Title 2',
    body: 'body 2',
  },
];

export const postsWithCommentsData = [
  {
    userId: 1,
    id: 1,
    title: 'Title 1',
    body: 'body 1',
    comments: [
      {
        postId: 1,
        id: 1,
        name: 'user 1',
        email: 'user1@gmail.com',
        body: 'comment 1',
      },
      {
        postId: 1,
        id: 2,
        name: 'user 2',
        email: 'user2@gmail.com',
        body: 'comment 2',
      },
    ],
  },
  {
    userId: 1,
    id: 2,
    title: 'Title 2',
    body: 'body 2',
  },
];

export const postData = {
  userId: 1,
  id: 1,
  title: 'Title 1',
  body: 'body 1',
};

export const postWithCommentsData = {
  userId: 1,
  id: 1,
  title: 'Title 1',
  body: 'body 1',
  comments: [
    {
      postId: 1,
      id: 1,
      name: 'user 1',
      email: 'user1@gmail.com',
      body: 'comment 1',
    },
    {
      postId: 1,
      id: 2,
      name: 'user 2',
      email: 'user2@gmail.com',
      body: 'comment 2',
    },
  ],
};

export const commentsData = [
  {
    postId: 1,
    id: 1,
    name: 'user 1',
    email: 'user1@gmail.com',
    body: 'comment 1',
  },
  {
    postId: 1,
    id: 2,
    name: 'user 2',
    email: 'user2@gmail.com',
    body: 'comment 2',
  },
];

export const commentData = {
  postId: 1,
  id: 3,
  name: 'user 3',
  email: 'user3@gmail.com',
  body: 'comment 3',
};
