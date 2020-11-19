const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** /tr = Ne Mutlu Türküm Diyene.\n**•** /aşk @kullanıcı = Kullanıcı İle Aranızdaki Seviyeyi Gösterir.\n**•** /trinity = GİF.\n**•** /brilliance = GİF.\n**•** /bravery = GİF.\n**•** /korkut = sunucudan birini Korkutursunuz.\n**•** /1vs1 @kullanıcı = Kullanıcı İle Eğlenceli 1VS1 atarsınız.\n**•** /balıktut = Balık Tutarsınız.\n**•** /espri = Espri Yaparsınız (Çok Soğuktur Dikkat).\n**•** /söv = Bot İstediğiniz Kişiye Söver.\n**•** /emojiyazı = yazdığınız yazıyı emojiye çevirir.\n**•** /steamstore = Seçtiğiniz Oyun Hakkında Bilgi Verir.\n**•** /slot = Slot Oyunu Oynar.\n**•** /rastgeleuye = Rast Gele en az 2 üye seçer.\n**•** /havadurumu = Seçtiğiniz Şehirin Hava Durumunu Gösterir. \n**•** /pokemon = İstediğiniz Pokemon Karakterini Aratır.')
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=606930624519077908&scope=bot&permissions=2087971903)` + "**\n**"+`[DBL Oyver]()`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/FYm8aba)`, false)
      .setFooter('MeeTR Eğlence')

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
  aliases: ['eğlence'],
  permLevel: 1
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence '
};
