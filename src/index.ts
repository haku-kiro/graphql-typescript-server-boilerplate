import "reflect-metadata";
import { importSchema } from "graphql-import";
import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import { resolvers } from "./resolvers";
import * as path from "path";


export const startServer = async () => {
  const typeDefs = importSchema(path.join(__dirname, './schema.graphql'));

  const server = new GraphQLServer({ typeDefs, resolvers });

  // Pulls the config from the ormconfig file
  // Whenever the server starts - it's going to sync for us
  await createConnection()
  await server.start();
  console.log("Server is running on localhost:4000")

}

startServer();