const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");

exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
	const istatistikozel = new Discord.RichEmbed()
    .setColor(0x36393F)
.setDescription("MeeTR İstatistik")
  .addField(` Bot Sahipleri:`, `<@431772260508893194> ve <@481412397895122963>`, true)
  .addField('<:evettt:509812460400803840> Shard:', '1/1', true)
	.addField("<:bot:500384574786764800> Bellek Kullanımı:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField("<:botbilgi:509809947593408524> Sunucu Sayısı:", `${client.guilds.size.toLocaleString()}`, true)
  .addField("<:botbilgi:509809947593408524> Kullanıcı Sayısı:", `${client.users.size}`, true)
  .addField("<:botbilgi:509809947593408524> Toplam Kullanıcı Sayısı:", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("<:botbilgi:509809947593408524> Kanal Sayısı:", `${client.channels.size.toLocaleString()}`, true)
  .addField(`<:bot:500384574786764800> Ne Kadar Süredir Aktif:`, `${duration}`, true)
  .addField("<:bot:500384574786764800> Ping:", `${client.ping}`, true)
  .addField("<:bot:500384574786764800> Discord.js Sürümü:", `${Discord.version}`, true)
  .addField(`<:nitro:500384533896495104> Premium:`, "Aktif Değil", true)
  .addField(`Davet Et`, `[Tıkla](https://discordapp.com/oauth2/authorize?client_id=495214808484806657&scope=bot&permissions=2080767167)`, true)
  message.channel.sendEmbed(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 1
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
