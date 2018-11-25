const envalid = require("envalid");
const { str, port } = envalid;

const env = envalid.cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["production", "development"] }),
  POSTGRES_URI: str(),
  PORT: port({ default: 3000 })
});

module.exports = env;
