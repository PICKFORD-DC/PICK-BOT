let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./lib/IMG-20220903-WA0076.png')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم$/i
handler.command = new RegExp

handler.limit = true


module.exports = handler
