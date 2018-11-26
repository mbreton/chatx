const envalid = require("envalid");
const { str, port, host } = envalid;

const env = envalid.cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["production", "development", "test"] }),
  POSTGRES_PASSWORD: str(),
  POSTGRES_USER: str(),
  POSTGRES_HOST: host(),
  POSTGRES_PORT: port({ default: 5432 }),
  POSTGRES_DATABASE: str(),
  PORT: port({ default: 3000 })
});

module.exports = env;
