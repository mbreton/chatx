const { gql } = require("apollo-server");
const service = require("./service");
const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();

const MESSAGE_ADDED = "messageAdded";

const typeDefs = gql`
  type Subscription {
    messageAdded: Message
  }
  type Room {
    id: ID!
    name: String!
    messages: [Message]
  }
  type Message {
    id: ID!
    content: String!
    createdAt: String!
    updatedAt: String!
    author: String!
  }
  type Query {
    rooms: [Room]
    messages(roomId: ID!, offset: Int, limit: Int): [Message]
  }
  type Mutation {
    sendMessage(roomId: ID!, content: String!, author: String!): Message
  }
`;

const resolvers = {
  Query: {
    messages(_, messageReq) {
      return service.getMessages(messageReq);
    },
    rooms() {
      return service.getRooms();
    }
  },
  Mutation: {
    sendMessage(_, newMessage) {
      return service.addNewMessage(newMessage).then(message => {
        pubsub.publish(MESSAGE_ADDED, { messageAdded: message });
        return message;
      });
    }
  },
  Subscription: {
    messageAdded: {
      subscribe: () => pubsub.asyncIterator([MESSAGE_ADDED])
    }
  },
  Room: {
    messages(room) {
      return service.getMessages({ roomId: room.id });
    }
  }
};

module.exports = { typeDefs, resolvers };
