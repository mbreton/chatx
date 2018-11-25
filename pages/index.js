import App from "../components/app";
import Messages from "../components/messages";
import InputMessage from "../components/input-message";

import React from "react";
import { Container, Grid, Image, Menu } from "semantic-ui-react";

export default () => (
  <App>
    <Grid style={{ height: "100vh", flexDirection: "column" }}>
      <Grid.Row>
        <Grid.Column>
          <Menu inverted>
            <Container>
              <Menu.Item as="a" header>
                <Image
                  size="mini"
                  src="/static/logo.png"
                  style={{ marginRight: "1.5em" }}
                />
              </Menu.Item>
              <Menu.Item as="a">Home</Menu.Item>
            </Container>
          </Menu>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row stretched style={{ flex: 1 }}>
        <Grid.Column>
          <Messages />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <InputMessage />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </App>
);
