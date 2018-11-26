const env = require("./lib/env-public.js");

module.exports = {
  presets: ["next/babel"],
  plugins: [["transform-define", env]]
};
