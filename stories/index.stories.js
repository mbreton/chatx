import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import MessageInput from "../components/input-message/component";
import Messages from "../components/messages/component";
import Header from "../components/header/component";
import moment from "moment";

storiesOf("MessageInput", module)
  .add("simple", () => <MessageInput />)
  .add("With a defined content and author", () => (
    <MessageInput content="Hello hello 👍" author="Mathieu" />
  ))
  .add("Bubble send event", () => <MessageInput onSend={action("send")} />)
  .add("while loading", () => <MessageInput loading={true} />);

storiesOf("Messages", module)
  .add("simple", () => <Messages />)
  .add("while loading", () => <Messages loading={true} />)
  .add("with few messages", () => (
    <Messages
      messages={[
        {
          id: 1,
          content: "Hello",
          author: "Foo",
          createdAt: moment()
            .subtract(2, "days")
            .valueOf()
        },
        {
          id: 2,
          content: "Bonjour",
          author: "Bar",
          createdAt: moment()
            .subtract(1, "days")
            .valueOf()
        },
        {
          id: 3,
          content: "Demat",
          author: "Qix",
          createdAt: moment()
            .subtract(1, "hours")
            .valueOf()
        },
        {
          id: 4,
          content: "ní zǎo",
          author: "Foo",
          createdAt: new Date().getTime()
        }
      ]}
    />
  ));

storiesOf("Header", module)
  .add("simple", () => <Header />)
  .add("With two rooms", () => (
    <Header
      roomId={"2"}
      rooms={[{ id: 1, name: "Room1" }, { id: 2, name: "Room2" }]}
    />
  ));
