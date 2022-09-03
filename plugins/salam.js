let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./lib/mp3_WhatsApp-Audio-2021-03-02-at-20.46.15.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler
