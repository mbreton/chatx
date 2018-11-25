const { gql } = require("apollo-server");
const service = require("./service");

const typeDefs = gql`
  type Message {
    id: Int
    content: String
    createdAt: String
    updatedAt: String
    username: String
  }
  type Query {
    messages(offset: Int, limit: Int): [Message]
  }
`;

const resolvers = {
  Query: {
    messages: (parentValue, { offset, limit }) =>
      service.getMessages(offset, limit)
  }
};

module.exports = { typeDefs, resolvers };
