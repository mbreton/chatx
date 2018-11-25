const express = require("express");
const next = require("next");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schema");
const Logger = require("./logger");
const env = require("./env");

const port = env.PORT;
const dev = env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });
  apolloServer.applyMiddleware({ app });

  app.get("*", (req, res) => handle(req, res));

  app.listen(port, err => {
    if (err) {
      Logger.error(`Error during the boot`, err);
      throw err;
    }
    Logger.info(`> Ready on http://localhost:${port}`);
  });
});
