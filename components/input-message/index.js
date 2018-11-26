import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import InputMessage from "./component";
import PropTypes from "prop-types";

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

function InputMessageApolloContainer({ roomId }) {
  const onSendHandler = mutation => ({ content, author }) => {
    mutation({ variables: { roomId, content, author } });
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

InputMessageApolloContainer.propTypes = {
  roomId: PropTypes.string
};

export default InputMessageApolloContainer;
