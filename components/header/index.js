import { Query } from "react-apollo";
import gql from "graphql-tag";
import Header from "./component";
import PropTypes from "prop-types";

const ALL_ROOMS = gql`
  query getRooms {
    rooms {
      id
      name
    }
  }
`;

function MessagesApolloContainer({ roomId }) {
  return (
    <Query query={ALL_ROOMS} fetchPolicy="cache-and-network">
      {({ error, data: { rooms }, fetchLoading }) => {
        if (error) return <ErrorMessage message="Error loading messages." />;
        return <Header rooms={rooms} loading={fetchLoading} roomId={roomId} />;
      }}
    </Query>
  );
}

MessagesApolloContainer.propTypes = {
  roomId: PropTypes.string
};

export default MessagesApolloContainer;
