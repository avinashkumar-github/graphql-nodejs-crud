import { v4 as uuidv4 } from "uuid";
const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailExist = db.users.some((user) => {
      return user.email == args.data.email;
    });

    if (emailExist) {
      throw new Error("Email already exist!!");
    }

    const user = {
      id: uuidv4(),
      ...args.data
      // name: args.name,
      // email: args.email,
      // age: args.age
    };

    db.users.push(user);

    return user;
  },

  createPost(parent, args, { db }, info) {
    const userExist = db.users.some((user) => user.id == args.data.author);

    if (!userExist) {
      throw new Error("User not found!!");
    }

    const post = {
      id: uuidv4(),
      ...args.data
      // title: args.title,
      // published: args.published,
      // author: args.author
    };

    db.posts.push(post);

    return post;
  },
  createComment(parent, args, { db, pubsub }, info) {
    const userExist = db.users.some((user) => user.id == args.author);
    if (!userExist) {
      throw new Error("User not found!!");
    }

    const postExist = db.posts.some((post) => post.id == args.post);
    if (!postExist) {
      throw new Error("Post not found!!");
    }

    const comment = {
      id: uuidv4(),
      ...args
      // title: args.title,
      // author: args.author,
      // postid: args.post
    };

    db.comments.push(comment);

    // pubsub.publish(`comment ${args.post}`, { comment: comment });
    // pubsub.publish(`comment ${args.post}`, { comment });
    pubsub.publish(`comment ${args.post}`, {
      comment: {
        mutation: "CREATED",
        data: comment
      }
    });

    return comment;
  },
  deleteComment(parent, args, { db }, info) {
    const commentExist = db.comments.findIndex(
      (comment) => comment.id == args.id
    );

    if (commentExist == -1) {
      throw new Error("No comment found!!");
    }

    const deletedComment = db.comments.splice(commentExist, 1);

    return deletedComment[0];
  },
  updateComment(parent, args, { db }, info) {
    const commentIndex = db.comments.findIndex((comment) => {
      return comment.id == args.id;
    });

    if (commentIndex == -1) {
      throw new Error("No comment found!!");
    }

    const selectedComment = db.comments[commentIndex];

    selectedComment.title = args.data.title;

    db.comments[commentIndex] = selectedComment;

    return selectedComment;
  }
};

export { Mutation as default };
