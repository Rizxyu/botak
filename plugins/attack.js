let handler = async(m, {conn, usedPrefix, args, command}) => {let user = global.DATABASE.data.users[m.sender]if (!('created' in user)) return m.reply('anda tidak memiliki kerajaan')if (!('created' in user)) return m.reply('Itu adalah aliansi kamu kamu tidak dapat menyerangnya')let who = m.mentionedJid ? m.mentionedJid[0] : (args[0].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')let count = args[1] && args[1].length > 0 ? Math.min(100, Math.max(parseInt(args[1]), 1)) : Math.min(1)if (!who || !args[0]) return m.reply('tag yg ingin di attack')let enemy = global.DATABASE.data.users[who]if (!('created' in enemy)) return m.reply('yang anda tag tidak memiliki kerajaan')if (!('aliance' in enemy)) return m.reply('Itu adalah aliansi kamu kamu tidak dapat menyerangnya')let userTroops = user.troopslet enemyTroops = enemy.troopslet enemyGold = enemy.emaslet enemyWood = enemy.kayulet enemyStone = enemy.batuif (enemy.shield == true) return m.reply('shield player tersebut aktif dan tidak dapat diserang')if (!who) conn.sendButton(m.chat, ` ${who} hendak menyerang\n\nPilih Dibawah`, `${global.botwm}`, 'YA', `${usedPrefix}ay`, 'TIDAK', `${usedPrefix}ant`, null, false, {                contextInfo: {                  mentionedJid: [user]                }              })try {if (/ay/.test(command)) {if (user.troops >= count * 1) {setTimeout(() => {if (count * 1 > enemy.troops) {global.DATABASE.data.users[m.sender].troops -= global.DATABASE.data.users[who].troopsglobal.DATABASE.data.users[who].troops -= count * 1if (enemy.troops < 0) global.DATABASE.data.users[who].troops = 0m.reply(`berhasil menyerang dan memenangkan peperangan, tersisa ${count - global.DATABASE.data.users[who].troops} yang berhasil survive dan kembali ke kerajaan, serta mendapatkan seluruh SDA dari user yang diserang`)global.DATABASE.data.users[m.sender].emas += enemyGoldglobal.DATABASE.data.users[m.sender].kayu += enemyWoodglobal.DATABASE.data.users[m.sender].batu += enemyStoneglobal.DATABASE.data.users[who].emas= 0global.DATABASE.data.users[who].kayu = 0global.DATABASE.data.users[who].batu = 0}if (count * 1 < enemy.troops) {global.DATABASE.data.users[m.sender].troops -= global.DATABASE.data.users[who].troopsglobal.DATABASE.data.users[who].troops -= count * 1m.reply(`Kamu menyerang dan kalah dalam peperangan, semua troops mati dalam peperangan`)}}, 20000)setTimeout(() => {	m.reply(`Memulai Peperangan⚔️`)}, 10000)setTimeout(() => {	conn.reply( m.chat, `Kamu mulai akan menyerang kerajaan ${who}`, m,	false, {    contextInfo: {      mentionedJid: conn.parseMention(text)    }  })	}, 0)} else m.reply('troops kamu tidak cukup untuk menyerang target')if (/an/.test(command)) return conn.reply(m.chat, `${who} tidak setuju`, null, false, {                contextInfo: {                  mentionedJid: [user]                }              }) } catch (e) {	throw e}}handler.help = ['attack']module.exports = handlerhandler.command = /^(attack|ay|an)/i