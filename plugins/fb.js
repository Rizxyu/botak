let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

let apikey = 'HIRO'

if (!text) throw 'Uhmm Where Url Link?'

let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${text}`)
let json = await res.json()
if (json.result) 
conn.sendFile( m.chat, json.result, 'fb.mp4', `*📎link:* ${text}\n====================\n*🌐Url:* ${json.result}`, m, )
else throw 'Sepertinya video yg kamu berikan tidak publik atau eror'
}
handler.help = ['fb <url>']
handler.tags = ['downloader']
handler.command = /^fb$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
