import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import InputMessage from "./component";

export const sendMessage = gql`
  mutation SendMessage($roomId: ID!, $content: String!, $author: String!) {
    sendMessage(roomId: $roomId, content: $content, author: $author) {
      id
      content
      createdAt
      author
    }
  }
`;

export default function MessagesApolloContainer() {
  const onSendHandler = mutation => ({ content, author }) => {
    mutation({ variables: { roomId: 1, content, author } });
  };
  return (
    <Mutation mutation={sendMessage}>
      {(sendMessage, { data }) => (
        <InputMessage
          onSend={onSendHandler(sendMessage)}
          loading={data && data.loading}
        />
      )}
    </Mutation>
  );
}
