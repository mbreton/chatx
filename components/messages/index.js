import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./errorMessage";
import Messages from "./component";

export const ALL_MESSAGES = gql`
  {
    messages(roomId: 1, offset: 0, limit: 20) {
      id
      content
      createdAt
      author
    }
  }
`;

const MESSAGE_SUBSCRIPTION = gql`
  subscription onNewMessage {
    messageAdded {
      id
      content
      author
      createdAt
    }
  }
`;

export default function MessagesApolloContainer() {
  return (
    <Query query={ALL_MESSAGES} fetchPolicy="cache-and-network">
      {({ error, data: { messages }, fetchLoading, subscribeToMore }) => {
        if (error) return <ErrorMessage message="Error loading messages." />;
        return (
          <Messages
            messages={messages}
            loading={fetchLoading}
            subscribeToNewMessages={() => {
              subscribeToMore({
                document: MESSAGE_SUBSCRIPTION,
                updateQuery: (prevProps, { subscriptionData }) => {
                  if (!subscriptionData.data) return prevProps;
                  const newMessage = subscriptionData.data.messageAdded;
                  return Object.assign({}, prevProps, {
                    messages: [newMessage, ...prevProps.messages]
                  });
                }
              });
            }}
          />
        );
      }}
    </Query>
  );
}
