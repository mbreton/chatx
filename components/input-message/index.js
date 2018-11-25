import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import InputMessage from "./component";

export const sendMessage = gql`
  mutation SendMessage($content: String!, $username: String!) {
    sendMessage(content: $content, username: $username) {
      id
      content
      createdAt
      username
    }
  }
`;

export default function MessagesApolloContainer() {
  const onSendHandler = mutation => message => {
    mutation({ variables: { content: message, username: "anonymous" } });
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
