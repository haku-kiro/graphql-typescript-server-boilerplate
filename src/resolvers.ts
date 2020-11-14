import { ResolverMap } from "./types/graphql-utils";
import * as bcrypt from "bcryptjs";
import { User } from "./entity/User";

export const resolvers: ResolverMap = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) =>
      `Hello ${name || "World!"}`,
  },
  Mutation: {
    // Just so that the email, and password is being used
    register: async (_, { email, password }: GQL.IRegisterOnMutationArguments) => {
      const hashedPassword = await bcrypt.hash(password, 10);

      // creates an object in memory, that you can do stuff with,
      // Make sure to save the user
      const user = await User.create({
        email,
        password: hashedPassword,
      });

      await user.save();
      return true;
    },
  },
};
