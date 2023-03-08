let { MessageType } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

  let teks = `Pilih Dibawah kak Model Menu Nya ! o(〃＾▽＾〃)o`
const sections = [
   {
	title: `${htjava} MODEL MENU –––––––––·•`,
	rows: [
    {title: "List Menu V1", rowId: ".m13"},
    {title: "List Menu V2", rowId: ".menu6"},
    {title: "List Menu V3", rowId: ".mlist"},
    {title: "List Menu V4", rowId: ".h1"},
    {title: "List Menu V5", rowId: ".m9"},
    {title: "List Menu V6", rowId: ".m10"},
    {title: "List Menu V7", rowId: ".m11"},
    {title: "List Menu V8", rowId: ".m12"},
    {title: "List Menu V9", rowId: ".m14"},
    {title: "List Menu V10", rowId: ".m15"},
	]
  },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".owner nomor"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: ` `,
  footer: teks,
  title: `${htki} *MENULIST* ${htka}`,
  buttonText: "Click Here !",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(teks), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

handler.help = ['modelmenu']
handler.tags = ['info']
handler.command = /^(modelmenu)/i
export default handler
