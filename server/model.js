const Sequelize = require("sequelize");

module.exports = sequelize => {
  const Message = sequelize.define("messages", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    }
  });

  return { Message };
};
