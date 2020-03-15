const Keyv = require("keyv");
const data = require("./data");
const printScreen = require("./printScreen");

const ttl = 60 * 60 * 1000;
const users = new Keyv();

const processMessages = function(client) {
  client.onMessage(async message => {
    let input = message.body.toLowerCase();
    let currentUser = await users.get(message.from);

    if (!currentUser) {
      await users.set(message.from, ["root"], ttl);
      printScreen(client, message, data["root"]);
    } else {
      const currentScreen = currentUser.reduce((object, current) => {
        if (current === "root") {
          return object[current];
        } else {
          return object["childrens"][current];
        }
      }, data);

      if (Object.keys(currentScreen.childrens).includes(input)) {
        if (currentScreen.childrens[input].type !== "data") {
          currentUser.push(input);
          await users.set(message.from, currentUser, ttl);
        } else {
          await users.delete(message.from);
        }

        printScreen(client, message, currentScreen.childrens[input]);
      } else if (currentScreen.type === "submenu" && input === "x") {
        await users.set(message.from, ["root"], ttl);
        printScreen(client, message, data["root"]);
      }
    }
  });
};

module.exports = processMessages;
