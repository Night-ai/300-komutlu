const Discord = require('discord.js');


exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** /kullanıcıbilgi = Kullanıcı Bilginizi Gösterir.\n**•** /profil = Resimli Profilinizi Gösterir.\n**•** /afk = AFK Duyurusu Yaparsınız.\n**•** /geldim = Aktif Olduğunuzu Duyurursunuz.\n**•** /sunucubilgi = SunucuBilgilerinizi Gösterir.\n**•** /sunucuresmi = Bulunduğunuz Sunucunun Resmini Gösterir.\n**•** /sorusor = Bota Soru Sorarsınız.\n**•** /roller = Sunucudaki Tüm Rolleri Gösterir.\n**•** /emojiler = Sunucudaki Tüm Emojileri Gösterir.\n**•** /kanalbilgi = Bulunduğunuz Kanalın Bilgilerini Gösterir.\n**•** /davet = Botun Davet Linkini Verir.\n**•** /rtaraması = Sunucuda Oynuyor Kısmında Reklam Varsa Gösterir.')
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=495214808484806657&scope=bot&permissions=2080767167)` + "**\n**"+`[DBL Oyver](https://www.discordbots-tr.xyz/)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/FYm8aba)`, false)
      .setFooter('MeeTR Kişisel')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kişisel','kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'kişisel',
  description: 'Tüm komutları gösterir.',
  usage: 'kişisel'
};
