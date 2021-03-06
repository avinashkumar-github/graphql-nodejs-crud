import { GraphQLServer, PubSub } from "graphql-yoga";

import db from "./data/db.js";
import Query from "./resolvers/Query.js";
import Mutation from "./resolvers/Mutation.js";
import User from "./resolvers/User.js";
import Post from "./resolvers/Post.js";
import Comment from "./resolvers/Comment.js";
import Subscription from "./resolvers/Subscription.js";

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers: { Query, Mutation, User, Post, Comment, Subscription },
  context: {
    db,
    pubsub
  }
});

server.start(() => "GraphQl server is up at port 4000 by default");
