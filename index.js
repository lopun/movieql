// nodemon 덕분에 index.js 파일이 항상 실행되게 된다.

import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start(() => console.log("GraphQL Server running!"));
