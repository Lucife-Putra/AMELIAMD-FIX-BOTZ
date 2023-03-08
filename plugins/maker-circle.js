import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .circle'
m.reply(md)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.botcahx.biz.id/api/maker/circle?url=${url}&apikey=954984e8`)).buffer()
conn.sendFile(m.chat, hasil, 'circle.jpg', `Nih kak`, m, false)
}
handler.help = ['circle']
handler.tags = ['logo']
handler.command = /^(circle)$/i
handler.limit = true
export default handler

