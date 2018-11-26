import React from "react";
import Main from "../components/main";
import Messages from "../components/messages";
import InputMessage from "../components/input-message";
import Header from "../components/header";
import { withRouter } from "next/router";
import Head from "next/head";

const App = withRouter(({ router }) => {
  const {
    query: { roomId }
  } = router;
  if (!roomId) {
    router.push("/index?roomId=1");
    return <></>;
  } else {
    return (
      <Main>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <Header roomId={roomId} />
        <Messages roomId={roomId} />
        <InputMessage roomId={roomId} />
      </Main>
    );
  }
});

export default App;
