const { sequelize, onReady } = require("../server/client");
const { Message, Room } = require("../server/model")(sequelize);

(async function() {
  try {
    await onReady;
    await sequelize.sync({ force: true });
    const homeRoom = await Room.create({ name: "Home" });
    const secondRoom = await Room.create({ name: "Second Room" });
    const thirdRoom = await Room.create({ name: "Third Room" });
    await Promise.all([
      ...[...Array(15).keys()].map(idx => {
        return Message.create({
          content: `Message ${idx}`,
          author: `Mathieu ${idx}`,
          roomId: homeRoom.id
        });
      }),
      ...[...Array(10).keys()].map(idx => {
        return Message.create({
          content: `Vamos a la playa senior zoro ${idx}`,
          author: `George Abitbol ${idx}`,
          roomId: secondRoom.id
        });
      }),
      ...[...Array(5).keys()].map(idx => {
        return Message.create({
          content: `Third ${idx}`,
          author: `Nicolas ${idx}`,
          roomId: thirdRoom.id
        });
      })
    ]);
    process.exit(0);
  } catch (e) {
    console.error(e);
  }
})();
