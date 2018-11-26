const prod = process.env.NODE_ENV === "production";
const { PORT } = require("../server/env");

module.exports = {
  "process.env.BASE_HTTP_URL": prod
    ? `https://chatx-mbr.herokuapp.com`
    : `http://localhost:${PORT}`,
  "process.env.BASE_WS_URL": prod
    ? `wss://chatx-mbr.herokuapp.com`
    : `ws://localhost:${PORT}`
};
