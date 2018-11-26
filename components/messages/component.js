import React, { PureComponent } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { List, Label, Segment, Header, Icon } from "semantic-ui-react";

class MessagesComponent extends PureComponent {
  componentDidMount() {
    this.props.subscribeToNewMessages && this.props.subscribeToNewMessages();
  }

  fromNow(time) {
    return <span>{moment(Number(time)).fromNow()}</span>;
  }

  byCreatedAt(m1, m2) {
    return m1.createdAt - m2.createdAt;
  }

  render() {
    const { messages, loading } = this.props;
    const hasMessages = messages && messages.length !== 0;
    return (
      <Segment
        placeholder={hasMessages}
        loading={loading}
        className="messages-container"
        style={{ overflowY: "auto", minHeight: "10rem" }}
      >
        {hasMessages ? (
          <List>
            {messages &&
              messages.sort(this.byCreatedAt).map(message => (
                <List.Item key={message.id}>
                  <List.Content>
                    <List.Header>
                      <Label as="a" image color="teal">
                        <img src="/static/user.png" />
                        {message.author}
                      </Label>
                      <Label tag>{this.fromNow(message.createdAt)}</Label>
                    </List.Header>
                    <List.Description>{message.content}</List.Description>
                  </List.Content>
                </List.Item>
              ))}
          </List>
        ) : (
          <Header icon textAlign="center">
            <Icon name="talk" size="huge" />
            Nobody speak yet. Be the first !
          </Header>
        )}
      </Segment>
    );
  }
}

MessagesComponent.propTypes = {
  messages: PropTypes.array,
  loading: PropTypes.bool,
  subscribeToNewMessages: PropTypes.func
};

MessagesComponent.defaultProps = {
  loading: false,
  message: []
};

export default MessagesComponent;
