
let handler = async (m, { conn, usedPrefix }) => {

let user = global.DATABASE.data.users[m.sender]
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
  
let caption = `
╭──⌠  𝒴ℴ𝓊𝓇 ℬ𝒶𝓁𝒶𝓃𝒸ℯ ⌡
├ _${name} Bank Account 👛_
│
├ *💵Balance :* ${user.money}
├ *🪙 Koin: ${user.koin}
│
╰────────────

Untuk Menukar exp ke money ketik
${usedPrefix}tukarmoney 100
`

conn.reply( m.chat, caption, m)
}

handler.help = ['balance']
handler.tags = ['xp']
handler.command = /^(balance|dompet)$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
