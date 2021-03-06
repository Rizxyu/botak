const TicTacToe = require("../lib/tictactoe")
let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        conn.sendButton( m.chat, `*[ ð³ _TicTacToe Game ð®_ ]\n\n*Partner ditemukan!`, `ð® Games Bot Whatsapp`, `ð¾Ok`, `ok`)
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: 'â',
                O: 'â­',
                1: '1ï¸â£',
                2: '2ï¸â£',
                3: '3ï¸â£',
                4: '4ï¸â£',
                5: '5ï¸â£',
                6: '6ï¸â£',
                7: '7ï¸â£',
                8: '8ï¸â£',
                9: '9ï¸â£',
            }[v]
        })
        let str = `
*[ ð³ _TicTacToe Games ð®_ ]*\n
Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk nyerah
`.trim()
        if (room.x !== room.o) m.reply(str, room.x, {
            contextInfo: {
                mentionedJid: conn.parseMention(str)
            }
        })
        m.reply(str, room.o, {
            contextInfo: {
                mentionedJid: conn.parseMention(str)
            }
        })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        m.reply(`*[ ð³ _TicTacToe Games ð®_ ]*\n\nMenunggu partner` + (text ? `mengetik command dibawah ini
${usedPrefix}${command} ${text}` : ''))
        conn.game[room.id] = room
    }
}

handler.help = ['tictactoe', 'ttt'].map(v => v + ' [custom room name]')
handler.tags = ['game']
handler.command = /^(tictactoe|t{3})$/

module.exports = handler
