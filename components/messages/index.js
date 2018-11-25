import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "../errorMessage";
import Messages from "./component";

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

export default function MessagesApolloContainer() {
  return (
    <Query query={allMessages} fetchPolicy="cache-and-network">
      {({ loading, error, data: { messages } }) => {
        if (error) return <ErrorMessage message="Error loading messages." />;
        if (loading) return <div>Loading</div>;
        return <Messages messages={messages} />;
      }}
    </Query>
  );
}
