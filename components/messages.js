import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./errorMessage";
import moment from "moment";
import { List, Image } from "semantic-ui-react";

export const allMessages = gql`
  {
    messages(offset: 0, limit: 10) {
      id
      content
      createdAt
      username
    }
  }
`;

export default function Messages() {
  return (
    <Query query={allMessages} fetchPolicy="cache-and-network">
      {({ loading, error, data: { messages } }) => {
        if (error) return <ErrorMessage message="Error loading messages." />;
        if (loading) return <div>Loading</div>;

        return (
          <List>
            {messages.map(message => (
              <List.Item key={message.id}>
                <Image avatar src="/static/user.png" />
                <List.Content>
                  <List.Header as="a">
                    Anonymous {fromNow(message.createdAt)}
                  </List.Header>
                  <List.Description>{message.content}</List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        );
      }}
    </Query>
  );
}

function fromNow(time) {
  return <span>{moment(Number(time)).fromNow()}</span>;
}
