const Subscription = {
  comment: {
    subscribe(parent, { postId }, { db, pubsub }, info) {
      const post = db.posts.find((post) => {
        return post.id == postId;
      });

      if (!post) {
        throw new Error("No such Post found!!");
      }

      return pubsub.asyncIterator(`comment ${postId}`);
    }
  }
};

export { Subscription as default };
