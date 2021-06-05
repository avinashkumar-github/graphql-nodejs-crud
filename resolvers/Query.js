const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return users;
    }
    return db.users.filter((user) => {
      return user.name.toLowerCase().includes();
    });
  },
  posts(parent, args, { db }, info) {
    return db.posts;
  },
  comments(parent, args, { db }, info) {
    return db.comments;
  }
};

export { Query as default };
