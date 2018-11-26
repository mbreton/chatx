const Sequelize = require("sequelize");

module.exports = sequelize => {
  const Room = sequelize.define("rooms", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  const Message = sequelize.define("messages", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    }
  });

  Room.messages = Room.hasMany(Message);
  Message.room = Message.belongsTo(Room);

  return { Message, Room };
};
