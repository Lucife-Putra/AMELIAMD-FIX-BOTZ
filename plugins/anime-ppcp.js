import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let jsn = await fetch(`https://api-fgmods.ddns.net/api/couple?apikey=6sotNhAL`)
let json = await jsn.json()
conn.sendButton(m.chat, '𝙱𝚘𝚢𝚜', wm, json.result.boy,[['🔄 Next 🔄', `/${command}`]], m)
conn.sendButton(m.chat, '𝙶𝚒𝚛𝚕𝚜', wm, json.result.girl,[['🔄 Next 🔄', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple)$/i
export default handler
