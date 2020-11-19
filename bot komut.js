const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Botunuz olan ${client.user.tag} sunucuya giriş yaptı!`);
});
client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) {
     return;
}
if (msg.content.toLowerCase() === prefix + 'instegram' ) {
  msg.reply('Hüseyin Tanrıverdi')
}
if (msg.content.toLowerCase() === prefix + 'kedi' ) {
  msg.reply('https://www.google.com.tr/search?q=kedi+resimleri&rlz=1C1CHWL_trTR774TR774&tbm=isch&source=iu&ictx=1&fir=9EfL2C5-8Dzg3M%253A%252CQ-n3KbJFlUeSwM%252C_&usg=AI4_-kTE66BQZKAjPzlPuOR_0f4iZPN62Q&sa=X&ved=2ahUKEwj7vrLun9veAhWB26QKHRBFCq8Q9QEwC3oECAAQGg&cshid=1542451653548001#imgrc=9EfL2C5-8Dzg3M:')
}
if (msg.content.toLowerCase() === prefix + 'youtube' ) {
  msg.reply('HusooTV')
}
});
client.on('guildBanAdd' , (guild, user) => {
  let aramızakatılanlar = guild.channels.find('name', 'aramıza-katılanlar');
  if (!aramızakatılanlar) return;
  aramızakatılanlar.send('https://media.giphy.com/media/8njotXALXXNrW/giphy.gif **Adalet dağıtma zamanı gelmiş!** '+ user.username +'**Bakıyorum da suç işlemiş,Yargı dağıtmaya devam** :fist: :writing_hand:  :spy:' );
});
client.login('NDc4MjQ2ODA4ODkyNDczMzU0.DtF7Yg.tHksbgqaCzbSNQ9gxip7pO5f0DM');
