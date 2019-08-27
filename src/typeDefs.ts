import { gql } from "apollo-server";

export const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "User" type can be used in other type declarations.
  type User {
    id: ID
    age: Int
    email: String
    password: String
    firstName: String
    lastName: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    Users: [User]
    User(id: ID): User
  }

  type Mutation {
    createUser(
      email: String
      password: String
      firstName: String
      lastName: String
    ): User
  }
`;
