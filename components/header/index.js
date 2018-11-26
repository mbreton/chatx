import { Query } from "react-apollo";
import gql from "graphql-tag";
import Header from "./component";

const ALL_ROOMS = gql`
  {
    rooms {
      id
      name
    }
  }
`;

export default function MessagesApolloContainer() {
  return (
    <Query query={ALL_ROOMS} fetchPolicy="cache-and-network">
      {({ error, data: { rooms }, fetchLoading }) => {
        if (error) return <ErrorMessage message="Error loading messages." />;
        return (
          <Header rooms={rooms} loading={fetchLoading} selectedRoomId={"1"} />
        );
      }}
    </Query>
  );
}
