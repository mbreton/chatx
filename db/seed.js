const { sequelize, onReady } = require("../server/client");
const { Message, Room } = require("../server/model")(sequelize);

(async function() {
  try {
    await onReady;
    await sequelize.sync({ force: true });
    const homeRoom = await Room.create({ name: "Home" });
    await Room.create({ name: "Second Room" });
    await Room.create({ name: "Third Room" });
    await Promise.all(
      [...Array(15).keys()].map(idx => {
        return Message.create({
          content: `Message ${idx}`,
          author: `Mathieu ${idx}`,
          roomId: homeRoom.id
        });
      })
    );
    process.exit(0);
  } catch (e) {
    console.error(e);
  }
})();
