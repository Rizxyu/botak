let hmm = 100

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `_Example:_ ${usedPrefix + command} 10`
    let user = global.DATABASE.data.users[m.sender]
   
     
    let caption = `
Kamu Menukarkan 🎑Exp kamu dengan money senilai ${text * hmm}money💵`



if ( user.exp >= text) {
    user.exp -= text
    user.money += hmm * text
 
    conn.sendButton(m.chat, caption, '©RainXyz','Tukar Lagi',`${usedPrefix + command} 10`
   )
 } else m.reply('ngadi Ngadi lu duit abis mau ditukerin apa')
    
   }
handler.help = ['tukarmoney <jumlah>']
handler.tags = ['xp']
handler.command = /^(tukarmoney|tukaruang)$/i

module.exports = handler
