let { MessageType } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

  let teks = `Pilih Dibawah kak Model Bokev Nya ! o(〃＾▽＾〃)o`
const sections = [
   {
	title: `${htjava} BOKEV MENU –––––––––·•`,
	rows: [
    {title: "Viral", rowId: ".viral"},
    {title: "Viral2", rowId: ".viral1"},
    {title: "Viral3", rowId: ".viral2"},
    {title: "Viral4", rowId: ".viral3"},
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
  title: `${htki} *BOKEVLIST* ${htka}`,
  buttonText: "Click Here !",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(teks), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

handler.help = ['modelmenu']
handler.tags = ['info']
handler.command = /^(bokeplist)/i
export default handler
