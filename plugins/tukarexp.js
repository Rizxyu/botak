let hmm = 100

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `_Example:_ ${usedPrefix + command} 10`
    let user = global.DATABASE.data.users[m.sender]
   
     
    let caption = `
Kamu Menukarkan 💵Uang kamu dengan exp senilai *${text * hmm}* money💵`



if ( user.money >= text) {
    user.money -= text
    user.exp += hmm * text
 
    conn.sendButton(m.chat, caption, '©RainXyz','Tukar Lagi',`${usedPrefix + command} 10`
   )
 } else m.reply('ngadi Ngadi lu duit abis mau ditukerin apa')
    
   }
handler.help = ['tukarexp <jumlah>']
handler.tags = ['xp']
handler.command = /^(tukarexp|tukarxp)$/i

module.exports = handler
