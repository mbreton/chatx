const env = require("./lib/env-public.js");

module.exports = {
  presets: ["next/babel"],
  plugins: [["transform-define", env]],
  env: {
    test: {
      plugins: ["require-context-hook"]
    }
  }
};
