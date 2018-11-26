const { gql /*, PubSub*/ } = require("apollo-server");
const service = require("./service");
const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();

const typeDefs = gql`
  type Subscription {
    messageAdded: Message
  }
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

const MESSAGE_ADDED = "messageAdded";
const resolvers = {
  Query: {
    messages: (_, { offset, limit }) => service.getMessages(offset, limit)
  },
  Mutation: {
    sendMessage: (_, { content, username }) => {
      return service.addNewMessage(content, username).then(message => {
        pubsub.publish(MESSAGE_ADDED, { messageAdded: message });
        return message;
      });
    }
  },
  Subscription: {
    messageAdded: {
      subscribe: () => pubsub.asyncIterator([MESSAGE_ADDED])
    }
  }
};

module.exports = { typeDefs, resolvers };
