const { gql } = require("apollo-server");
const service = require("./service");

const typeDefs = gql`
  type Message {
    id: Int!
    content: String!
    createdAt: String!
    updatedAt: String!
    username: String!
  }
  type Query {
    messages(offset: Int, limit: Int): [Message]
  }
  type Mutation {
    sendMessage(content: String!, username: String!): Message
  }
`;

const resolvers = {
  Query: {
    messages: (parentValue, { offset, limit }) =>
      service.getMessages(offset, limit)
  },
  Mutation: {
    sendMessage: (parent, { content, username }) => {
      return service.addNewMessage(content, username);
    }
  }
};

module.exports = { typeDefs, resolvers };
