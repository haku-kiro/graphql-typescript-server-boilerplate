import { ResolverMap } from "./types/graphql-utils";

export const resolvers: ResolverMap = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Hello ${name || "World!"}`
  },
  Mutation: {
    // Just so that the email, and password is being used
    register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => `Bye ${email || password || "World"}`
  }
};