let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .removebg'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://xzn.wtf/api/removebg?url=${url}&apikey=akiraa`)).buffer()
await conn.sendFile(m.chat, hasil, '', '📮Nih Hasilnya', m)
	
}
handler.help = ['hapuslatar','removebg']
handler.tags = ['maker']
handler.command = /^(hapuslatar|removebg)$/i
handler.limit = true

module.exports = handler