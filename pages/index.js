import App from "../components/app";
import Messages from "../components/messages";

import React from "react";
import { Container, Header, Image, Menu, Segment } from "semantic-ui-react";

export default () => (
  <App>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Image
            size="mini"
            src="/static/logo.png"
            style={{ marginRight: "1.5em" }}
          />
          ChatX
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ paddingTop: "6em" }}>
      <Header as="h1">Chat App</Header>
      <Messages />
    </Container>
  </App>
);
