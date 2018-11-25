import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { List, Label, Segment, Header, Icon } from "semantic-ui-react";

function Component({ messages = [], loading }) {
  const hasMessages = messages.length === 0;
  return (
    <Segment placeholder={hasMessages} fluid loading={loading}>
      {hasMessages ? (
        <Header icon>
          <Icon name="talk" size="huge" />
          Nobody speak yet. Be the first !
        </Header>
      ) : (
        <List className="messages">
          {messages.map(message => (
            <List.Item key={message.id}>
              <List.Content>
                <List.Header>
                  <Label as="a" image color="teal">
                    <img src="/static/user.png" />
                    {message.username}
                  </Label>
                  <Label tag>{fromNow(message.createdAt)}</Label>
                </List.Header>
                <List.Description>{message.content}</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      )}
      <style jsx>{`
        .ui.list.messages {
          padding: 2rem;
        }
      `}</style>
    </Segment>
  );
}

Component.propTypes = {
  messages: PropTypes.array,
  loading: PropTypes.bool
};

function fromNow(time) {
  return <span>{moment(Number(time)).fromNow()}</span>;
}

export default Component;
