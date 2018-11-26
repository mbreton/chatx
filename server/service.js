const { onReady, sequelize } = require("./client");
const { Message, Room } = require("./model")(sequelize);

module.exports = {
  getRooms() {
    return onReady.then(() => Room.findAll());
  },
  getMessages({ roomId, offset = 0, limit = 10 }) {
    return onReady.then(() =>
      Message.findAll({
        where: { roomId },
        offset,
        limit,
        order: [["createdAt", "DESC"]]
      })
    );
  },
  addNewMessage(newMessage) {
    return onReady
      .then(() => Message.create(newMessage))
      .then(resp => resp.dataValues);
  }
};
