import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
let response = args.join(' ').split('|')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Kirim/Reply Gambar dengan caption ${command}`
m.reply(md)
let media = await q.download()
let url = await uploadImage(media)

let hasil = await (await fetch(`https://api.zahwazein.xyz/creator/smeme?text=${response[0]}&text2=${response[1]}&url=${url}&apikey=85345ee3d9de`)).buffer()
conn.sendFile(m.chat, hasil, 'smeme.jpg', `Nih kak`, m, false)
}
handler.help = ['logosmeme']
handler.tags = ['internet']
handler.command = /^(logosmeme)$/i
handler.limit = true

export default handler

