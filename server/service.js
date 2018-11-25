const Sequelize = require("sequelize");
const Logger = require("./logger");
const env = require("./env");

const sequelize = new Sequelize(env.POSTGRES_URI);
const { Message } = require("./model")(sequelize);

const onReady = sequelize
  .authenticate()
  .catch(err => {
    Logger.error("Unable to connect to the database:", err);
  })
  .then(() => {
    Logger.info("Connection has been established successfully.");
  });

module.exports = {
  getMessages(offset, limit) {
    return onReady.then(() =>
      Message.all({ offset, limit, order: [["createdAt", "ASC"]] })
    );
  },
  addNewMessage(content, username) {
    return onReady.then(() =>
      Message.create({
        content,
        username
      })
    );
  }
};
