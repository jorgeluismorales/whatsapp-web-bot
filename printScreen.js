const printScreen = async (client, message, screen) => {
  screen.messages.forEach(async m => {
    switch (m.type) {
      case "text":
        try {
          await client.sendText(message.from, m.data);
        } catch (error) {
          console.error("Error al envir mensaje");
        }
        break;

      case "image":
        try {
          await client.sendFile(message.from, m.data, "", "");
        } catch (error) {
          console.error("Error al envir imágen");
        }
        break;

      case "location":
        try {
          await client.sendLocation(message.from, m.lat, m.lon, "");
        } catch (error) {
          console.error("Error al enviar ubicación");
        }
        break;
      default:
        break;
    }
  });

  if (screen.type === "menu" || screen.type === "submenu") {
    var currentMessage = "";

    Object.entries(screen.childrens).forEach(([key, value], index) => {
      let letter = key.toUpperCase();
      let title = value.title;
      currentMessage = currentMessage + `*${letter}*. ${title}\n`;
    });

    if (screen.type === "menu") {
      currentMessage = currentMessage.trim();
    } else {
      currentMessage = currentMessage + "*X*. Realizar otra consulta";
    }

    try {
      await client.sendText(message.from, currentMessage);
    } catch (error) {
      console.error("Error al envir mensaje");
    }
  } else {
    setTimeout(async () => {
      try {
        await client.sendText(
          message.from,
          "🤖 Gracias por la consulta, envia cualquier mensaje para volver al inicio."
        );
      } catch (error) {
        console.error("Error al envir mensaje");
      }
    }, 4000);
  }
};

module.exports = printScreen;
