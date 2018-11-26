import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./errorMessage";
import Messages from "./component";
import PropTypes from "prop-types";

export const ALL_MESSAGES = gql`
  query getMessages($roomId: ID!, $offset: Int!, $limit: Int!) {
    messages(roomId: $roomId, offset: $offset, limit: $limit) {
      id
      content
      createdAt
      author
    }
  }
`;

const MESSAGE_SUBSCRIPTION = gql`
  subscription onNewMessage($roomId: ID!) {
    messageAdded(roomId: $roomId) {
      id
      content
      author
      createdAt
    }
  }
`;

function MessagesApolloContainer({ roomId }) {
  return (
    <Query
      query={ALL_MESSAGES}
      fetchPolicy="cache-and-network"
      variables={{ roomId, offset: 0, limit: 10 }}
    >
      {({ error, data: { messages }, fetchLoading, subscribeToMore }) => {
        if (error) return <ErrorMessage message="Error loading messages." />;
        return (
          <Messages
            messages={messages}
            loading={fetchLoading}
            subscribeToNewMessages={() => {
              subscribeToMore({
                document: MESSAGE_SUBSCRIPTION,
                variables: { roomId },
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

MessagesApolloContainer.propTypes = {
  roomId: PropTypes.string
};

export default MessagesApolloContainer;
