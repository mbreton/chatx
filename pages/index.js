import App from "../components/app";
import Messages from "../components/messages";
import InputMessage from "../components/input-message";

import React from "react";
import { Container, Image, Menu } from "semantic-ui-react";

export default () => (
  <App>
    <Menu inverted>
      <Menu.Item as="a" header>
        <Image
          size="mini"
          src="/static/logo.png"
          style={{ marginRight: "1.5em" }}
        />
      </Menu.Item>
      <Menu.Item as="a">Home</Menu.Item>
    </Menu>
    <Messages />
    <InputMessage />
  </App>
);
