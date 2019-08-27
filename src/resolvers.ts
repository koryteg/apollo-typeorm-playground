import { User } from "./entity/User";

// In the most basic sense, the ApolloServer can be started
// Resolvers define the technique for fetching the types in the
export const resolvers = {
  Query: {
    Users: () => User.find(),
    User: (_: any, { id }: any) => User.findOne(id)
  },
  Mutation: {
    createUser: async (_: any, { email, password, firstName, lastName }) => {
      let createdUser = await User.create({
        email,
        password,
        firstName,
        lastName
      }).save();
      return createdUser;
    }
  }
};
