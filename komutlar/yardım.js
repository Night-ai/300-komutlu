const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`₺`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=606930624519077908&scope=bot&permissions=2087971903) | [DBL'de Oyver!](https://www.discordbots-tr.xyz/) | [WebSite](https://meetr.glitch.me)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`₺ - Yardım`, `:white_small_square: | **/anakomutlar**: Sunucunuz için Ayar Komutlarını Gösterir.!\n:white_small_square: | **/eğlence**: Eğlenmek için bulunan komutlar!\n:white_small_square: | **/yetkili**: Sunucuyu yönetmek için gerekli olan komutlar!\n:white_small_square: | **/kullanıcı**: Kullanıcılar için komutlar.\n:white_small_square: | **/müzik**: Müzik ruhun gıdasıdır.`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
