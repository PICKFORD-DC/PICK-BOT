let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./MP3/waalaikumsalam.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}
handler.help = ['Assalamualaikum']

handler.tags = ['main']
handler.customPrefix = /^(Assalamualaikum)$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler
