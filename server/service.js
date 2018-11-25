const Sequelize = require("sequelize");
const Logger = require("./logger");
const env = require("./env");

const sequelize = new Sequelize(env.POSTGRES_URI);
const { Message } = require("./model")(sequelize);

module.exports = {
  getMessages() {
    return sequelize
      .authenticate()
      .catch(err => {
        Logger.error("Unable to connect to the database:", err);
      })
      .then(() => {
        Logger.info("Connection has been established successfully.");
        return Message.all();
      })
      .catch(err => {
        Logger.error("Unable to load data from messages", err);
      });
  }
};
