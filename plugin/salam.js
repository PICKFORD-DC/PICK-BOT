
let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./MP3/assalamualaikum.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}
handler.help = ['kak desah dong']

handler.tags = ['gabut']
handler.customPrefix = /^(Assalamualaikum)$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler
