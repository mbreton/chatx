const { gql, PubSub, withFilter } = require("apollo-server");
const service = require("./service");
const pubsub = new PubSub();

const MESSAGE_ADDED = "messageAdded";

const typeDefs = gql`
  type Subscription {
    messageAdded(roomId: ID!): Message
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
    roomId: ID!
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
      async subscribe(rootValue, args, context) {
        return withFilter(
          () => pubsub.asyncIterator(MESSAGE_ADDED),
          (payload, variables) => {
            return payload.messageAdded.roomId === Number(variables.roomId);
          }
        )(rootValue, args, context);
      }
    }
  },
  Room: {
    messages(room) {
      return service.getMessages({ roomId: room.id });
    }
  }
};

module.exports = { typeDefs, resolvers };
