const Sequelize = require("sequelize");
const Logger = require("./logger");
const env = require("./env");

const sequelize = new Sequelize({
  host: env.POSTGRES_HOST,
  database: env.POSTGRES_DATABASE,
  username: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  dialect: "postgres",
  timezone: "+01:00",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
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
      Message.all({ offset, limit, order: [["createdAt", "DESC"]] })
    );
  },
  addNewMessage(content, username) {
    return onReady
      .then(() =>
        Message.create({
          content,
          username
        })
      )
      .then(resp => resp.dataValues);
  }
};
