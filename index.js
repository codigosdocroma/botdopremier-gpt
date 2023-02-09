const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(Bot iniciado com o nome de usuário: ${client.user.tag}!);
});

client.on("message", (message) => {
  if (message.content.startsWith("!anuncio")) {
    const announcementChannel = message.mentions.channels.first();
    if (!announcementChannel) {
      return message.reply("Por favor, mencione o canal de anúncio que você deseja usar.");
    }

    const announcementMessage = message.content.split(" ").slice(2).join(" ");
    if (!announcementMessage) {
      return message.reply("Por favor, forneça uma mensagem de anúncio.");
    }

    announcementChannel.send(announcementMessage);
  }
});

client.login("ebf4a02db830c7a36211733fa1d71e0f5329bcdd987fe82b8afd5a3beafd7072");
