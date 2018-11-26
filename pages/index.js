import React from "react";
import Main from "../components/main";
import Messages from "../components/messages";
import InputMessage from "../components/input-message";
import Header from "../components/header";
import { withRouter } from "next/router";

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
        <Header roomId={roomId} />
        <Messages roomId={roomId} />
        <InputMessage roomId={roomId} />
      </Main>
    );
  }
});

export default App;
