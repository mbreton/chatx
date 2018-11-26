import React from "react";
import App from "../components/app";
import Messages from "../components/messages";
import InputMessage from "../components/input-message";
import Header from "../components/header";

export default () => (
  <App>
    <Header />
    <Messages />
    <InputMessage />
  </App>
);
