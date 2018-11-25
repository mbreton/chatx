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
    messages: [Message]
  }
`;

const resolvers = {
  Query: {
    messages: () => service.getMessages()
  }
};

module.exports = { typeDefs, resolvers };
