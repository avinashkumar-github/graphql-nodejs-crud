const users = [
  {
    id: 1,
    name: "Avinash",
    email: "avinash@gmail.com",
    age: 32
    // posts: [1, 2]
  },
  {
    id: "2",
    name: "Sam",
    email: "sam@gmail.com",
    age: 27
    // posts: [3]
  },
  {
    id: 3,
    name: "John",
    email: "john@gmail.com",
    age: 28
    // posts: []
  }
];

const posts = [
  {
    id: 1,
    title: "Post one",
    published: true,
    author: "1"
  },
  {
    id: 2,
    title: "Post two",
    published: true,
    author: "1"
  },
  {
    id: 3,
    title: "Post three",
    published: false,
    author: "2"
  }
];

const comments = [
  {
    id: 1,
    title: "Nice Post one",
    author: 1,
    post: 2
  },
  { id: 2, title: "Nice POst 2", author: 1, post: 1 },
  { id: 3, title: "Nice post three", author: 2, post: 1 },
  { id: 4, title: "Nice post four", author: 3, post: 2 }
];

const db = {
  users,
  posts,
  comments
};

export { db as default };
